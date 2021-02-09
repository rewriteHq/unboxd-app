import { DashboardWrapper } from './styles';
import { ComponentProps } from './types';
import DashboardLayout from '../../commons/DashboardLayout';
import NoItem from '../../components/NoItem';

const Dashboard: React.FC<ComponentProps> = () => {
  return (
    <DashboardLayout pageTitle="Add your needs" showBack>
      <DashboardWrapper>
        <div className="container">
          <NoItem />
        </div>
      </DashboardWrapper>
    </DashboardLayout>
  );
};

export default Dashboard;
