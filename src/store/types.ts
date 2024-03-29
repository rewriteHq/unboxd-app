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
  wallet: {
    data: { balance: number };
    error: string | null;
    isLoading: boolean;
  };
  wishlist: { data: WishList[]; isLoading: boolean };
  resources: { data: { categories: Array<any> }; error: string | null };
  user: {
    authenticated: boolean;
    isVerified: boolean;
    credentials: {
      DOB: string | null;
      createdAt: string;
      email: string;
      firstname: string;
      lastname: string;
      username: string;
      phone: string;
      role: string;
      signType: string;
      updatedAt: string;
      _id: string;
    };
    errors: string | null;
    loading: boolean;
  };
  verifyUser: {
    loading: boolean;
    errors: string | null;
    email: string;
    step: number;
  }
};
