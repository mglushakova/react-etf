import React, { useContext } from 'react';
import PortfolioTable from '../components/PortfolioTable';
import { PortfoliosContext } from '../context';

function PortfolioIdPage() {
  const { portfolios } = useContext(PortfoliosContext);

  return (
    <div>
      <h1 className="table-header">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.586 1.586a2 2 0 1 1 2.828 2.828l-.793.793-2.828-2.828.793-.793ZM8.379 3.793 0 12.172V15h2.828l8.38-8.379-2.83-2.828h.001Z"
            fill="#252C32"
          />
        </svg>
        {/* {title} */}
        Заголовок портфеля
      </h1>
      {/* <PortfolioTable portfolio={securities} /> */}
    </div>
  );
}

export default PortfolioIdPage;
