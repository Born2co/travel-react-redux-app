import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auxulary from '../hoc/Auxulary/Auxulary';
import Header from './Header'
import WelcomeComponent from './WecomeComponent';
import GetTravels from '../../containers/getTravels/GetTravels';

import ErrorComponent from './ErrorComponent'
import ContactData from '../../containers/ContactData/ContactData';

import Domestic from '../../Component/travelTypes/Domestic'
import International from '../../Component/travelTypes/International'


class TravelApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Auxulary>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={WelcomeComponent}></Route>
                        <Route path="/welcome" exact component={WelcomeComponent}></Route>
                        <Route path="/travels" component={GetTravels}></Route>
                        <Route path="/addTravel" component={ContactData}></Route>
                        <Route path="/domestic" component={Domestic}></Route>
                        <Route path="/international" component={International}></Route>

                        <Route component={ErrorComponent} />
                    </Switch>
                </Auxulary>



            </div>
        )
    }
}
export default TravelApp