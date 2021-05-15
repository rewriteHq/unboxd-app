import React from "react";

export interface WishItemProps extends React.HtmlHTMLAttributes<unknown> {
  image: string,
  name: string,
  price: string,
  raised: string
}