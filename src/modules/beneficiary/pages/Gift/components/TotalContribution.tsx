import React from 'react';
import { Total, TotalAmount } from '../styles';

const TotalContribution = () => {
  return (
    <Total>
      <TotalAmount>
        <span>Amount raised</span>
        <p>₦ 84,000.00</p>
      </TotalAmount>
    </Total>
  );
};

export default TotalContribution;
