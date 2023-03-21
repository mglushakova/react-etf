import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';

function PortfolioTable({ portfolio }) {
  let totalPortfolioCost = 0;
  useEffect(() => {
    totalPortfolioCost = portfolio.reduce((acc, item) => {
      return acc + item.currentValue;
    }, 0);
  }, [portfolio]);
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
          {portfolio.map((security) => (
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
