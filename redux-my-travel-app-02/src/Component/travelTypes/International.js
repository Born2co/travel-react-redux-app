import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
class International extends Component {
  

    render() {
        // const intTravel = this.props.travels.filter(travel =>travel.travelData.country !=='india');
        // console.log(intTravel);
        //console.log(this.props.travels);

        const internationaltravelData =<div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Email</th>
                        <th>ZipCode</th>
                    </tr>
                </thead>
                <tbody >
                    {
                       this.props.travels
                       .filter(travel =>travel.travelData.country !=='india')
                        .map(
                            travel =>
                                <tr key={travel.id}>
                                    <td> {travel.travelData.name} </td>
                                    <td> {travel.travelData.country} </td>
                                    <td> {travel.travelData.email} </td>
                                    <td> {travel.travelData.zipCode} </td>
                                    <td><button className="btn btn-warning" onClick={() => this.props.onDeleteTravels(travel.id)}>Delete</button></td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
        return (
            <div>
                <h3 style={{ textAlign: 'center' }}>International travels</h3>
                {internationaltravelData}
            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        travels: state.travelsData,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onDeleteTravels: (id) => dispatch(actions.deleteTravels(id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(International);
//export default International;