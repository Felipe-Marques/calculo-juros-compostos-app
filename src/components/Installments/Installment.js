import React from 'react';
import styled from 'styled-components';
import { formatMoney, formatPercentage } from '../../helpers/formatter.js';

const WrapperCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 80px;
  width: 150px;
  border: 1px solid teal;

  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
  margin-right: 10px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 10px;
`;

const Index = styled.p`
  margin-right: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0;
`;

export default function Installment({ data }) {
  const { id, value, difference, percentage, profit } = data;

  const signal = profit === true ? '+' : '-';
  const color = profit ? '#1b5e20' : '#b71c1c  ';
  const colorPercent = profit ? '#0d47a1' : '#f44336 ';

  return (
    <WrapperCard>
      <Index>{id}</Index>
      <Div>
        <Text style={{ color: color }}>{formatMoney(value)}</Text>
        <Text style={{ color: color }}>{`${signal} ${formatMoney(
          difference
        )}`}</Text>
        <Text style={{ color: colorPercent }}>
          {formatPercentage(percentage)}
        </Text>
      </Div>
    </WrapperCard>
  );
}
