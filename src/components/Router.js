import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wishes from './Wishes';
import Header from './Header/Header';
import Countries from './Countries';
import Continents from './Continents';
import CamList from './Page_Cams/CamList';
import Cams from './Page_Cams/Cams';



function Router() {
    return (
        <div>
            <Header />
            <Switch>
                <div className="routeLink">
                    <Route exact path='/' component={Wishes} />
                    <Route path='/continents' component={Continents} />
                    <Route path='/countries' component={Countries} />
                    <Route path='/camlist' component={CamList} />
                    <Route path='/cams' component={Cams} />

                </div>
            </Switch>

        </div>
    )
}

export default Router
