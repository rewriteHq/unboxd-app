import React from 'react';
import ContributorHeader from './ContributorHeader';
import { ContributorContainer } from './styles';
import { IContributorProps } from './types';

const ContributorLayout: React.FC<IContributorProps> = ({ children }) => {
  return (
    <>
      <ContributorHeader />
      <ContributorContainer>
        {children}
      </ContributorContainer>
    </>
  );
}

export default ContributorLayout;