import React from 'react';
import { WishCardWrapper } from './styles';
import { ReactComponent as Cake } from '../../assets/img/icons/cake.svg';

interface WishCardProps {
  title: string;
  wishCount: number;
  imgSrc: string;
}

const WishCard: React.FC<WishCardProps> = ({ title, wishCount, imgSrc }) => {
  return (
    <WishCardWrapper>
      <div className="overlay"></div>
      <div className="wish-details">
        <h1>{title}</h1>
        <div className="wish-category">
          <span className="wish-amount d-flex-center">{wishCount} wishes</span>
          <span className="wish-icon d-flex-center">
            <Cake />
          </span>
        </div>
      </div>
      <img src={imgSrc} className="img" alt="wish" />
    </WishCardWrapper>
  );
};

export default WishCard;
