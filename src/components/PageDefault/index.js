import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const Wrapper = styled.main`
  flex: 1;
  min-height: 100%;
  height: auto;
  padding-top: 30px;
  padding-bottom: 14vh;
  padding-left: 5%;
  padding-right: 5%;
`;

export default function PageDefault({ children }) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}
