import React from 'react';
import ContentWrapper from '../components/common/ContentWrapper';
import ExplainWrapper from '../components/common/ExplainWrapper';
import SidebarContainer from '../containers/sidebar/SidebarContainer';
import HeaderContainer from '../containers/header/HeaderContainer';
import MemberInfoContainer from '../containers/common/MemberInfoContainer';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Layout = () => {
  const matches = useMediaQuery('(min-width:800px)');
  return (
    <>
      <ExplainWrapper />
      <MemberInfoContainer />
      <HeaderContainer />
      {matches ? <SidebarContainer /> : ''}
      <ContentWrapper />
    </>
  );
};

export default Layout;
