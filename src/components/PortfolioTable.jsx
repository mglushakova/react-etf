import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';

function PortfolioTable({ portfolio }) {
  const [totalPortfolioCost, setTotalPortfolioCost] = useState(0);
  useEffect(() => {
    if (Object.entries(portfolio).length === 0) return;
    setTotalPortfolioCost(
      portfolio.securities.reduce((acc, item) => {
        return acc + item.currentValue;
      }, 0)
    );
  }, [portfolio.securities]);
  return (
    <div>
      <table className="portfolio-table">
        <thead>
          <tr>
            <th>Тикер</th>
            <th>Название</th>
            <th>Цена, ₽</th>
            <th>Стоимость</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(portfolio).length !== 0 &&
            portfolio.securities.map((security) => (
              <TableRow
                security={security}
                totalPortfolioCost={totalPortfolioCost}
                key={security.id}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default PortfolioTable;
