import React from 'react';

export interface GiftCardProps extends React.HtmlHTMLAttributes<unknown> {
  image: string;
  name: string;
  price: string;
  raised: string;
}
