import { useCallback, useEffect, useState, MouseEvent } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { NumberFormatValues } from 'react-number-format';
import {
  GiftCountdown,
  GiftCoverTime,
  GiftDescription,
  GiftProgressPrice,
} from './styles';
import { getGift, getWishlistBySlug } from '../redux/actions';
import AppState from '../../../../../typings';
import { differenceInDays } from 'date-fns';
import {
  CoverImage,
  NeedText,
} from '../../../../beneficiary/pages/Event/styles';
import ProgressBar from '../../../../../commons/Progress';
import GiftCard from '../../../../../components/GiftCard';
import PriceSuggest from './components/PriceSuggest';
import ContributorLayout from '../../../../../commons/ContributorLayout';
import { GiftList, EventCardContent, Form } from '../styles';
import PageLoader from '../../../../../components/PageLoader';
import Button from '../../../../../components/Button';

import Notify from '../../../../../utils/notify/notify';
import PriceInput from '../../../../../components/Input/price';
import PayWithFlutterwave from '../../../../../commons/Payment/flutterwave';
import { getPaymentReference } from './services';
import ThankYouModal from './components/ThankYouModal';
import PrePaymentModal from './components/PrePayment';
import { isEmail } from '../../../../../utils/validate';
import { WishList } from '../../../../../typings';

export interface EventData extends WishList {
  giftId: string;
}
interface ParamType {
  id: string;
  username: string;
  slug: string;
}

interface PaymentState {
  amount: string | number;
  email: string | '';
  phone: string | '';
  name: string | '';
  anonymous: boolean;
  showForm: boolean;
}

const Gift = () => {
  const { id, username, slug } = useParams<ParamType>();
  const history = useHistory();
  const dispatch = useDispatch();
  const { gift, wishlist } = useSelector(
    (state: AppState) => state.contributor.event.data
  );
  const [paymentData, setPaymentData] = useState<PaymentState>({
    amount: '',
    email: '',
    phone: '',
    name: '',
    anonymous: false,
    showForm: false,
  });

  const eventData = { ...wishlist, giftId: id };
  const [next, setNext] = useState(false);

  const [loading, setLoading] = useState(false);

  const selectPrice = (amount: number | '') => {
    setPaymentData({
      ...paymentData,
      amount,
      showForm: true,
    });
  };

  useEffect(() => {
    dispatch(getGift(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (!wishlist) {
      dispatch(getWishlistBySlug(username, slug));
    }
  }, [dispatch, wishlist, username, slug]);

  const daysLeft = wishlist
    ? differenceInDays(new Date(wishlist.date), new Date())
    : 1;
  const percentageRaised = gift
    ? Math.round((gift.paid / gift.totalCost!) * 100)
    : 0;


  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const openGift = useCallback(
    (giftId: string) => {
      history.push(`/${username}/${slug}/${giftId}`);
      scrollToTop();
    },
    [history, username, slug]
  );

  const complete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNext(true);
  };

  const handleClose = () => setNext(false);

  const [reference, setReference] = useState('');
  const [successModal, setSuccessModal] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (e.target.name === 'anonymous') {
      if (e.target.checked) {
        setPaymentData((prev) => ({ ...prev, anonymous: true }));
      }
    } else {
      setPaymentData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }, []);

  const changePrice = useCallback(({ value }: NumberFormatValues) => {
    if (+value > 500000) {
      return Notify.top('Kindly input an amount less than 500,000');
    }
    setPaymentData((prev) => ({ ...prev, amount: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { amount, email, anonymous, name, phone } = paymentData;
    const token = localStorage.getItem('token');

    if (!amount) {
      return Notify.top('Kindly input an amount to be paid');
    }

    if (!email || !isEmail(email)) {
      return Notify.top('Please enter a valid email address');
    }

    const payload = {
      amount: +amount,
      email,
      listId: eventData?._id!,
      giftId: eventData?.giftId!,
      givingType: token ? 'user' : anonymous ? 'anonymous' : 'guest',
      givingTo: eventData?.userID!._id!,
      giver: {
        email,
        name,
        phoneNumber: phone,
      }
    };

    setLoading(true);
    const [err, result] = await getPaymentReference(payload!);
    setLoading(false);

    if (err) {
      return;
    }

    setReference(result.reference);
  };

  const toggleSuccessModal = useCallback(
    () => setSuccessModal((prev) => !prev),
    []
  );

  const paymentSuccess = useCallback(() => {
    setReference('');
    setSuccessModal(true);
  }, []);

  const removeReference = () => setReference('');

  return gift ? (
    <ContributorLayout>
      <div className="container">
        <GiftCoverTime>
          <CoverImage src={gift.imageURL} alt={gift.name} />

          <GiftCountdown>
            {daysLeft} {daysLeft > 1 ? 'days ' : 'day'} left
          </GiftCountdown>
          <GiftDescription>
            <EventCardContent>
              <h3>{gift.name}</h3>
              <GiftProgressPrice>
                <ProgressBar
                  percentage={percentageRaised}
                  radius={21}
                  stroke={1.5}
                />
                <div className="price">
                  <p>₦{gift.totalCost?.toLocaleString()}</p>
                  <small>
                    ₦
                    {gift.paid.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{' '}
                    raised
                  </small>
                </div>
              </GiftProgressPrice>
            </EventCardContent>
          </GiftDescription>
        </GiftCoverTime>

        {wishlist && (
          <>
            <Form>
              <PriceSuggest
                price={gift.totalCost!}
                selectSuggestion={selectPrice}
              />
              {paymentData.showForm && (
                <PriceInput
                  onChange={changePrice}
                  name="amount"
                  value={paymentData.amount}
                  label="Amount to pay"
                />
              )}
              <Button className={+paymentData.amount > 0 ? "null" : "disabled"} onClick={complete} disabled={+paymentData.amount > 0 ? false : true}>Contribute</Button>

              {next && (
                <PrePaymentModal
                  close={handleClose}
                  change={handleChange}
                  submit={handleSubmit}
                  data={paymentData}
                />
              )}

              {reference && (
                <PayWithFlutterwave
                  amount={+paymentData.amount}
                  email={paymentData.email}
                  event={eventData?.title!}
                  reference={reference}
                  success={paymentSuccess}
                  close={removeReference}
                />
              )}

              {loading && <PageLoader />}

              <ThankYouModal
                show={successModal}
                close={toggleSuccessModal}
                eventData={eventData as EventData}
              />
            </Form>

            <NeedText>
              Choose another item to gift {wishlist.userID.firstname}
            </NeedText>

            <GiftList>
              {wishlist.gifts.map((gift) =>
                gift._id !== wishlist._id ? (
                  <GiftCard
                    name={gift.name}
                    image={gift.imageURL}
                    price={gift?.totalCost!}
                    raised={gift?.paid}
                    key={gift._id}
                    onClick={() => openGift(`${gift._id}`)}
                  />
                ) : null
              )}
            </GiftList>
          </>
        )}
      </div>
    </ContributorLayout>
  ) : (
    <PageLoader />
  );
};

export default Gift;
