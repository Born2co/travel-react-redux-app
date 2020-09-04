import React, { Component } from 'react';
import Button from '../../Component/Button/Button';
import classes from './ContactData.css';
import Input from '../../Component/Input/Input';
import Spinner from '../../Component/Spinner/Spinner'

import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            fromCity: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'From City'
                },
                value: ''
            },
            toCity: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Destination'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            familyFlag: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'yes', displayValue: 'Family' },
                        { value: 'no', displayValue: 'Single' }
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
            console.log(formData[formElementIdentifier]);
        }

        const travel = {
            travelData: formData
        }

        //action call
        this.props.onSubmitTravelData(travel);
        //after posting travel data take to home page
        this.props.history.push(`/welcome`)
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({ orderForm: updatedOrderForm });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success">SUBMIT</Button>
            </form>
        );
        if (this.props.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Travel Details</h4>
                {form}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        loading: state.loading
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onSubmitTravelData: (travelData) => dispatch(actions.submitTravelData(travelData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);