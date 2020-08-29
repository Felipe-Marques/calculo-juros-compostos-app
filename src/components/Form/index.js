import React from 'react';

export default function Form({ data, onChange }) {
  const { initialValue, monthlyInterest, monthlyPeriod } = data;

  const handleChangeInitialValue = (event) => {
    onChange(+event.target.value, null, null);
  };

  const handleChangeMonthlyPeriod = (event) => {
    onChange(null, +event.target.value, null);
  };

  const handleChangeMonthlyInterest = (event) => {
    onChange(null, null, +event.target.value);
  };

  return (
    <div className="center row">
      <div className="col input-field s6 m4">
        <input
          id="inputInitialValue"
          type="number"
          value={initialValue}
          min="100"
          step="100"
          onChange={handleChangeInitialValue}
        />
        <label htmlFor="inputInitialValue" className="active">
          Capítal Inicial:
        </label>
      </div>
      <div className="col input-field s6 m4 ">
        <input
          id="inputMonthlyInterest"
          type="number"
          value={monthlyInterest}
          min="-12"
          max="12"
          step="0.010"
          onChange={handleChangeMonthlyInterest}
        />
        <label htmlFor="inputMonthlyInterest" className="active">
          Taxa de Juros (a.m):
        </label>
      </div>
      <div className="col input-field s6 m4 ">
        <input
          id="inputMonthlyPeriod"
          type="number"
          value={monthlyPeriod}
          min="1"
          step="1"
          max="36"
          onChange={handleChangeMonthlyPeriod}
        />
        <label htmlFor="inputMonthlyPeriod" className="active">
          Período (meses):
        </label>
      </div>
    </div>
  );
}
