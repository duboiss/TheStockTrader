import Home from "../components/Home";
import Portfolio from "../components/portfolio/Portfolio";
import Stocks from "../components/stocks/Stocks";

export const routes = [
    {path: '/', component: Home, meta: {title: 'Home'}},
    {path: '/portfolio', component: Portfolio, meta: {title: 'Portfolio'}},
    {path: '/stocks', component: Stocks, meta: {title: 'Stocks'}}
];
