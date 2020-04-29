import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wishes from './components/Wishes';
import Navbar from './components/Navbar';
import Countries from './components/Countries';
import Continents from './components/Continents';
import CamList from './components/CamList';
import Cams from './components/Cams';



function Router() {
    return (
        <div>
            <Navbar />
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
