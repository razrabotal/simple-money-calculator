// SettlementCalculator.tsx
import React, { useState } from 'react';

const SettlementCalculator: React.FC = () => {
  const [cashGivenToEmployees, setCashGivenToEmployees] = useState<number>(0);
  const [moneyTransferredToMe, setMoneyTransferredToMe] = useState<number>(0);
  const [myPercentage, setMyPercentage] = useState<number>(50);
  const [result, setResult] = useState<string>('');

  const calculateSettlement = () => {
    const totalAmount = cashGivenToEmployees + moneyTransferredToMe;
    const myShare = (totalAmount * myPercentage) / 100;
    const employeesShare = totalAmount - myShare;

    const employeesReceived = cashGivenToEmployees;

    const employeesBalance = employeesShare - employeesReceived;

    if (employeesBalance > 0) {
      setResult(
        `Ви повинні переказати співробітникам ${employeesBalance.toFixed(
          2
        )} грн.`
      );
    } else if (employeesBalance < 0) {
      setResult(
        `Співробітники повинні передати вам ${Math.abs(
          employeesBalance
        ).toFixed(2)} грн готівкою.`
      );
    } else {
      setResult('Розрахунок завершено, ніхто нікому нічого не винен.');
    }
  };

  return (
    <main className="container">
      <h1>Калькулятор розрахунків</h1>
      <form>
        <div className="grid">
          <label htmlFor="cashGivenToEmployees">
            Скільки дали грошей готівкою співробітникам:
            <input
              id="cashGivenToEmployees"
              type="number"
              value={cashGivenToEmployees}
              onChange={(e) =>
                setCashGivenToEmployees(parseFloat(e.target.value) || 0)
              }
            />
          </label>
          <label htmlFor="moneyTransferredToMe">
            Скільки перевели грошей на карту вам:
            <input
              id="moneyTransferredToMe"
              type="number"
              value={moneyTransferredToMe}
              onChange={(e) =>
                setMoneyTransferredToMe(parseFloat(e.target.value) || 0)
              }
            />
          </label>
          <label htmlFor="myPercentage">
            Який відсоток ви берете собі:
            <input
              id="myPercentage"
              type="number"
              value={myPercentage}
              onChange={(e) => setMyPercentage(parseFloat(e.target.value) || 0)}
            />
          </label>
        </div>
        <button type="button" onClick={calculateSettlement}>
          Розрахувати
        </button>
      </form>
      {result && (
        <article>
          <h3>{result}</h3>
        </article>
      )}
    </main>
  );
};

export default SettlementCalculator;
