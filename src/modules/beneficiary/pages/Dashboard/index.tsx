import { ComponentProps } from './types';
import DashboardLayout from '../../../../commons/DashboardLayout';
import { MyUnboxdListHeader, WishList } from './styles';
import Logo from '../../../../components/Logo';
import WishCard from '../../../../components/WishCard';
import wishes from '../../../../mocks/wishes.json';

const Dashboard: React.FC<ComponentProps> = () => {
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
        {wishes.map((wish) => (
          <WishCard
            key={wish.title}
            title={wish.title}
            wishCount={wish.count}
            imgSrc={wish.imgSrc}
          />
        ))}
      </WishList>
    </DashboardLayout>
  );
};

export default Dashboard;
