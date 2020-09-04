import React, { Component } from 'react';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
class TravelComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            travels: 
                {
                    // initialValues={{ description, targetDate }}
                     id: this.props.match.params.id,
                     description: 'Add Travel ',
                     targetDate: moment(new Date()).format('YYYY-MM-DD')
                 
            }
        }

     

        this.saveTravel = this.saveTravel.bind(this);
    }

    saveTravel() {
        console.log(`save travel clicked`);
        const updatedTravels  = {
            ...this.state.travels
        }
        console.log(updatedTravels);
        this.setState({travels: updatedTravels})


    }
    render() {

        let { description, targetDate } = this.state
        //let description = this.state.description
        //let targetDate =this.state.targetDate

        return (
            <div>
                <h3>Add Travels</h3>
                <div className="container">
                    <Formik
                        initialValues={{ description, targetDate }}
                        validateOnChange={false}
                        validateOnBlur={false}
                        enableReinitialize={true}
                        onSubmit={this.onSubmit}
                        validate={this.validate}

                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                     className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div"
                                     className="alert alert-warning" />

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>

                                    <button className="btn btn-success" type="submit" onClick={this.saveTravel}>Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}


export default TravelComponent