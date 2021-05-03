import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';
import AppWrapper from '../../AppWrapper';
import { DashboardHeaderWrapper } from './styles';

const DashboardHeader: React.FC = () => {
  return (
    <DashboardHeaderWrapper>
      <AppWrapper>
        <div className="header-content">
          <Logo />
          <Link to="/about">About Unboxd</Link>
        </div>
      </AppWrapper>
    </DashboardHeaderWrapper>
  );
};

export default DashboardHeader;
