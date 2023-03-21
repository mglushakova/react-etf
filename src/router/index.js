import About from '../pages/About';
import PortfolioIdPage from '../pages/PortfolioIdPage';
import PortfolioList from '../pages/PortfolioList';

export const routs = [
  { path: '/about', component: <About />, exact: true },
  { path: '/portfolios', component: <PortfolioList />, exact: true },
  { path: '/portfolios/:id', component: <PortfolioIdPage />, exact: true },
];
