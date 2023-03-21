import React, { useContext, useState, useEffect } from 'react';
import PortfolioTable from '../components/PortfolioTable';
import { PortfoliosContext } from '../context';
import { useParams } from 'react-router-dom';
import TitleForm from '../components/TitleForm';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import SecurityForm from '../components/SecurityForm';

function PortfolioIdPage() {
  const [modal, setModal] = useState(false);
  const [portfolio, setPortfolio] = useState({});
  const [modalContent, setModalContent] = useState('titleForm');

  let params = useParams();
  const { portfolios, setPortfolios } = useContext(PortfoliosContext);

  useEffect(() => {
    const portfolio = portfolios.filter((portfolio) => {
      return portfolio.id.toString() === params.id;
    })[0];

    setPortfolio(portfolio);
  }, []);

  const editTitle = (newTitle) => {
    setPortfolio({ ...portfolio, title: newTitle });
    setPortfolios((prevPortfolios) => {
      if (!prevPortfolios) return;
      const newPortfolios = [...prevPortfolios];
      for (let p of newPortfolios) {
        if (p.id === portfolio.id) {
          p.title = newTitle;
        }
      }
      return newPortfolios;
    });
    localStorage.removeItem('portfolios');
    localStorage.setItem('portfolios', JSON.stringify(portfolios));
    setModal(false);
  };

  const addSecurity = (security) => {
    console.log(security);
  };

  const onAddSecurityButton = () => {
    setModalContent('securityForm');
    setModal(true);
  };

  return (
    <div>
      <h1 className="table-header">
        {portfolio.title}
        <button
          onClick={() => setModal(true)}
          className="portfolio__title-button">
          <svg
            className="portfolio__title-icon"
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10.586 1.586a2 2 0 1 1 2.828 2.828l-.793.793-2.828-2.828.793-.793ZM8.379 3.793 0 12.172V15h2.828l8.38-8.379-2.83-2.828h.001Z" />
          </svg>
        </button>
      </h1>
      <PortfolioTable portfolio={portfolio} />
      <MyButton onClick={onAddSecurityButton}>Добавить</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        {(() => {
          if (modalContent === 'titleForm') {
            return <TitleForm title={portfolio.title} editTitle={editTitle} />;
          } else if (modalContent === 'securityForm') {
            return <SecurityForm addSecurity={addSecurity} />;
          } else {
            return <div>empty modal</div>;
          }
        })()}
      </MyModal>
    </div>
  );
}

export default PortfolioIdPage;
