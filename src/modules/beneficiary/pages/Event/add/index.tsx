import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import * as R from 'ramda';
import { useParams } from 'react-router';
import DashboardLayout from '../../../../../commons/DashboardLayout';
import NoItem from '../../../../../components/NoItem';
import { DashboardFilm, DashboardWrapper } from '../../Dashboard/styles';
import { AddItem, Explainer } from './styles';
import { getWishlist } from './service';
import { WishList } from '../../../../../typings';
import GiftList from './components/GiftList';

type ParamTypes = {
  id: string;
};

const explainerTextTitle = [
  '',
  'One item added',
  'Two items added',
  'Three items added',
];

const AddEvent = () => {
  const { id } = useParams<ParamTypes>();
  const [data, setData] = useState<WishList | null>(null);
  const navItems = [
    () => (
      <a href="#0" key={shortid.generate()}>
        Finish
      </a>
    ),
  ];

  useEffect(() => {
    (async function () {
      const [err, result] = await getWishlist(id);
      setData(result);
    })();
  }, [id]);

  const renderExplainer = (giftLength: number) => {
    if (giftLength < explainerTextTitle.length) {
      return (
        <Explainer>
          <h3>{explainerTextTitle[giftLength]}</h3>
          <p>
            If you need more things, add to the list by clicking on the plus
            button
          </p>
        </Explainer>
      );
    }

    return null;
  };

  return data ? (
    <DashboardLayout pageTitle="Add your needs" navItems={navItems} showBack>
      <DashboardWrapper>
        <div className="container">
          <GiftList gifts={data.gifts} wishlistId={id} />
        </div>
        {data.gifts.length < 6 && <DashboardFilm />}
      </DashboardWrapper>
      {R.isEmpty(data.gifts) ? (
        <Explainer>
          <p>
            Populate your list with all that you need. Click plus button to add
            item
          </p>
        </Explainer>
      ) : (
        renderExplainer(data.gifts.length)
      )}
      <AddItem to={`/event/add-gift/${id}`}>+</AddItem>
    </DashboardLayout>
  ) : null;
};

export default AddEvent;
