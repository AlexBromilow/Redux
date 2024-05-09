import React, { FunctionComponent, ReactNode } from 'react';
import Animations from 'src/Styles/Animations';
import GlobalStyles from 'src/Styles/GlobalStyles';
import Normalize from 'src/Styles/NormalizeStyles';
import Typography from 'src/Styles/Typography';

type LayoutProps = {
  children: ReactNode | ReactNode[];
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <Typography />
      <Animations />
      {children}
    </>
  );
};

export default Layout;
