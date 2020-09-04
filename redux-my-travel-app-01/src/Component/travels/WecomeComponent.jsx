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
            <div>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome You can manage your treavels
                </div>
                <div className="container">
                    click here to get Travel Details.
                 <button
                        className="btn btn-success"
                    >
                        <Link to="/treavels">here</Link>
                    </button>
                </div>

                <div className="container">
                    
                 <button
                        className="btn btn-success"
                    >
                        <Link to="/treavel">Add Travel</Link>
                    </button>
                </div>
            </div>
        );
    }
}
export default WelcomeComponent