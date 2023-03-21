import { React } from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import { PortfoliosContext } from './context';

function App() {
  const portfolios = [
    {
      id: 23423542352,
      title: 'Тестовый портфель',
      securities: [
        {
          id: 419145883,
          secid: 'AKCH',
          title: 'БПИФ Альфа Китайские Акции',
          price: 1,
          proportion: 10,
          value: 20000,
        },
        {
          id: 415306037,
          secid: 'AKEB',
          title: 'БПИФ Альфа Управляемые Еврообл',
          price: 100,
          proportion: 30,
          value: 10000,
        },
        {
          id: 23432423,
          secid: 'AKMM',
          title: 'БПИФ Альфа Денежный рынок',
          price: 10,
          proportion: 60,
          value: 50000,
        },
      ],
    },

    {
      id: 34534534534,
      title: 'Тестовый портфель2',
      securities: [
        {
          id: 419145883,
          secid: 'AKCH',
          title: 'БПИФ Альфа Китайские Акции',
          price: 1,
          proportion: 10,
          value: 20000,
        },
        {
          id: 415306037,
          secid: 'AKEB',
          title: 'БПИФ Альфа Управляемые Еврообл',
          price: 100,
          proportion: 30,
          value: 10000,
        },
        {
          id: 23432423,
          secid: 'AKMM',
          title: 'БПИФ Альфа Денежный рынок',
          price: 10,
          proportion: 60,
          value: 50000,
        },
      ],
    },
  ];

  return (
    <PortfoliosContext.Provider
      value={{
        portfolios,
      }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter></AppRouter>
      </BrowserRouter>
    </PortfoliosContext.Provider>
  );
}

export default App;
