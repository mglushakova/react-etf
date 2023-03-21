import React from 'react';
import { rubble } from '../helpers/rubbleFormatter';

function TableRow({ security, totalPortfolioCost }) {
  return (
    <tr>
      <td>
        <span className="ticker">{security.secid}</span>
      </td>
      <td>{security.title}</td>
      <td>{rubble.format(security.price)}</td>
      <td>
        {rubble.format(security.value)}₽ ({security.proportion}%)
      </td>
    </tr>
  );
}

export default TableRow;
