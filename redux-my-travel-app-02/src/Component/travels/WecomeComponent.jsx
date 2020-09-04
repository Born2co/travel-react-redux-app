import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            welcomeMessage: ''
        }
    }
    render() {
        return (
            <div >
                <h1 style={{textAlign: 'center'}}> Welcome!</h1>
                <div className="container" style={{textAlign: 'center'}}>
                    Welcome You can manage your treavels
                </div>

                <div className="container" style={{textAlign: 'center'}}>
                    click here to get Travel Details.
                 <button
                        className="btn btn-success"
                    >
                        <Link to="/travels">here</Link>
                    </button>
                </div>
                
                <div className="container" style={{textAlign: 'center'}}>
                 <button
                        className="btn btn-success"
                    >
                        <Link to="/addTravel">Add Travel</Link>
                    </button>
                </div>
            </div>
        );
    }
}
export default WelcomeComponent