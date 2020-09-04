import React, { Component } from 'react';
import moment from 'moment';
class ListOfTravels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            travels: [
                { id: 1, description: 'this is desc', travelDate: new Date(), done: false },
                { id: 2, description: 'this is desc', travelDate: new Date(), done: false }
            ],
            message: null }}
    render() {
        return (
            <div>
                <h1>Travel List </h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Travel Date</th>
                                <th>Journey completed</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.state.travels.map(
                                    travel =>
                                        <tr key={travel.id}>

                                            <td>{travel.description}</td>
                                            <td>{moment(travel.travelDate).format('YYYY-MM-DD')}</td>
                                            <td>{travel.done.toString()}</td>

                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}
export default ListOfTravels