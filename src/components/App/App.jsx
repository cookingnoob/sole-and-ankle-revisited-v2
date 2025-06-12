import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import { BREAKPOINTS, COLORS, WEIGHTS } from '../../constants';

const GlobalStyled = createGlobalStyle`
  html{
    --color-white: ${COLORS.white};
    --color-gray-100: ${COLORS.gray[100]};
    --color-gray-300: ${COLORS.gray[300]};
    --color-gray-500: ${COLORS.gray[500]};
    --color-gray-700: ${COLORS.gray[700]};
    --color-gray-900: ${COLORS.gray[900]};
    --color-primary: ${COLORS.primary};
    --color-secondary: ${COLORS.secondary};

    --weight-normal: ${ WEIGHTS.normal};
    --weight-medium: ${ WEIGHTS.medium};
    --weight-bold: ${ WEIGHTS.bold};

    --breakpoint-phone: ${BREAKPOINTS.phone}rem;
    --breakpoint-tablet: ${BREAKPOINTS.tablet}rem;
    --breakpoint-laptop: ${BREAKPOINTS.laptop}rem;
  }
`

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
    <GlobalStyled/>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
