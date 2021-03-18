import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../../../commons/DashboardLayout';
import { DashboardContainer } from '../../../../commons/DashboardLayout/styles';

type ParamTypes = {
  id: string;
};

const Event = () => {
  const { id } = useParams<ParamTypes>();
  // const [data, setData] = use
  const [activeExplainer, setActiveExplainer] = useState(1);
  const [explainer, setExplainer] = useState({ show: false, active: 1 });

  const navItems = [
    () => <Link to={`/event/edit/${id}`}>Edit</Link>,
    () => <Link to={`/event/share`}>Share</Link>,
    () => <Link to={`/event/wallet/${id}`}>Wallet</Link>,
  ];

  // useEffect(() => {

  // }, [])

  return (
    <>
      <DashboardLayout pageTitle="" navItems={navItems} showBack>
        <DashboardContainer>Begin with Magic</DashboardContainer>
      </DashboardLayout>
    </>
  );
};

export default Event;
