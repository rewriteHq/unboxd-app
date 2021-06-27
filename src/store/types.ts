import store from '.';
import { WishList } from '../typings';

export type AppDispatch = typeof store.dispatch;

export type GlobalStoreState = {
  beneficiary: {
    link: string;
  };
  contributor: {
    event: { data: any; error: string | null };
  };
  event: {
    list: { data: any | null; error: string | null };
    wallet: { data: any | null; error: string | null };
  };

  gifts: { data: any; error: string | null };
  wishlist: { data: WishList[]};
  resources: { data: { categories: Array<any> }; error: string | null };
  user: {
    authenticated: boolean;
    credentials: {
      DOB: string | null;
      createdAt: string;
      email: string;
      firstname: string;
      lastname: string;
      username: string;
      role: string;
      signType: string;
      updatedAt: string;
      _id: string;
    };
    errors: string | null;
    loading: boolean;
  };
};
