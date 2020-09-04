import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auxulary from '../hoc/Auxulary/Auxulary';
import Header from './Header'
import WelcomeComponent from './WecomeComponent';
// import ListOfTravels from './ListOfTravels'
import GetTravels from '../../containers/getTravels/GetTravels';

import ErrorComponent from './ErrorComponent'
import ContactData from '../ContactData/ContactData';


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
                        {/* <Route path="/treavel" component={EnterTravelComponent}></Route> */}
                        <Route path="/addTravel" component={ContactData}></Route>
                        <Route component={ErrorComponent} />
                    </Switch>
                    {/* <FooterComponent /> */}
                </Auxulary>



            </div>
        )
    }
}
export default TravelApp