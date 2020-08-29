import React from 'react';
import styled from 'styled-components';
import Installment from './Installment';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export default function Installments({ data }) {
  return (
    <Wrapper>
      {data.map((installment) => {
        const { id } = installment;
        return <Installment key={id} data={installment} />;
      })}
    </Wrapper>
  );
}
