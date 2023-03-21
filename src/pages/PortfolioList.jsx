import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PortfoliosContext } from '../context';

function PortfolioList() {
  const { portfolios } = useContext(PortfoliosContext);

  //securities.columns=secid,name,group&
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       'https://iss.moex.com/iss/securities.json?group_by_filter=corporate_bond&group_by=type&group_by_filter=exchange_ppif&securities.columns=id,secid,name,is_traded&limit=150'
  //     );
  //     // const response = await fetch(
  //     //   'https://iss.moex.com/iss/securitytypes.json'
  //     // );

  //     const result = await response.json();
  //     console.log(response);
  //     //console.log(result);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="App container">
      <ul className="portfolios-list">
        {Object.entries(portfolios).length !== 0 &&
          portfolios.map((portfolio) => (
            <li className="portfolios-item" key={portfolio.id}>
              <Link
                to={{
                  pathname: '/portfolios/' + portfolio.id,
                }}>
                {portfolio.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PortfolioList;
