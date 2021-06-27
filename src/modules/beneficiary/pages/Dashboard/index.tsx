import { ComponentProps } from './types';
import DashboardLayout from '../../../../commons/DashboardLayout';
import { MyUnboxdListHeader, WishList } from './styles';
import Logo from '../../../../components/Logo';
import WishCard from '../../../../components/WishCard';
import { useSelector } from 'react-redux';
import { GlobalStoreState } from '../../../../store/types';

const fallbackImage =  "/assets/birthday.jpg";

const Dashboard: React.FC<ComponentProps> = () => {
  const {data: wishlist} = useSelector((state : GlobalStoreState ) => state.wishlist);
  return (
    <DashboardLayout>
      <MyUnboxdListHeader>
        <p>
          my&nbsp;
          <Logo />
          &nbsp; list
        </p>
      </MyUnboxdListHeader>
      <WishList>
        {wishlist.map((wish) => (
          <WishCard
            key={wish._id}
            title={wish.title}
            wishCount={wish.gifts.length}
            imgSrc={wish.coverImage || fallbackImage}
          />
        ))}
      </WishList>
    </DashboardLayout>
  );
};

export default Dashboard;
