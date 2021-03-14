import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import * as R from 'ramda';
import { useParams } from 'react-router';
import DashboardLayout from '../../../../../commons/DashboardLayout';
import NoItem from '../../../../../components/NoItem';
import { DashboardWrapper } from '../../Dashboard/styles';
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

  const renderExplainerTitle = (giftLength: number) => {
    if (giftLength < explainerTextTitle.length) {
      return explainerTextTitle[giftLength];
    }

    return 'Over three items added';
  };

  return data ? (
    <DashboardLayout pageTitle="Add your needs" navItems={navItems} showBack>
      <DashboardWrapper>
        <div className="container">
          <GiftList gifts={data.gifts} wishlistId={id} />
        </div>
      </DashboardWrapper>
      {R.isEmpty(data.gifts) ? (
        <Explainer>
          <p>
            Populate your list with all that you need. Click plus button to add
            item
          </p>
        </Explainer>
      ) : (
        <Explainer>
          <h3>{renderExplainerTitle(data.gifts.length)}</h3>
          <p>
            If you need more things, add to the list by clicking on the plus
            button
          </p>
        </Explainer>
      )}
      <AddItem to={`/event/add-gift/${id}`}>+</AddItem>
    </DashboardLayout>
  ) : null;
};

export default AddEvent;
