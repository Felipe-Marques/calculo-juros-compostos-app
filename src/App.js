import React, { useState, useEffect } from 'react';
import PageDefault from './components/PageDefault';
import Form from './components/Form';
import Installments from './components/Installments/Installments';

export default function App() {
  const [initialValue, setInitialValue] = useState(100);
  const [monthlyInterest, setMonthlyIntesrest] = useState(1);
  const [monthlyPeriod, setMonthlyPeriod] = useState(1);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    calculateInterest(initialValue, monthlyInterest, monthlyPeriod);
  }, [initialValue, monthlyInterest, monthlyPeriod]);

  const calculateInterest = (initialValue, monthlyInterest, monthlyPeriod) => {
    const newInstallments = [];

    let currentId = 1;
    let currentValue = initialValue;
    let percentage = 0;

    for (let i = 1; i <= monthlyPeriod; i++) {
      const percentValue = (currentValue * Math.abs(monthlyInterest)) / 100;

      currentValue =
        monthlyInterest >= 0
          ? currentValue + percentValue
          : currentValue - percentValue;

      percentage = (currentValue / initialValue - 1) * 100;

      newInstallments.push({
        id: currentId++,
        value: currentValue,
        difference: Math.abs(currentValue - initialValue),
        percentage,
        profit: monthlyInterest > 0,
      });

      setInstallments(newInstallments);
    }
  };

  const handleChange = (newValue, newPeriod, newInterest) => {
    if (newValue !== null) {
      setInitialValue(newValue);
      return;
    }

    if (newPeriod !== null) {
      setMonthlyPeriod(newPeriod);
      return;
    }

    setMonthlyIntesrest(newInterest);
  };

  return (
    <PageDefault>
      <Form
        data={{ initialValue, monthlyInterest, monthlyPeriod }}
        onChange={handleChange}
      />
      {/* <Inputs onChange={handleInputs} /> */}
      <Installments data={installments} />
    </PageDefault>
  );
}
