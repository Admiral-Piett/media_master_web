import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ DashboardPage } exact={true} />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
