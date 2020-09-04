import React, { Component } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
// import Domestic from '../../Component/travelTypes/Domestic';
//   import International from '../../Component/travelTypes/International';

class GetTravels extends Component {

    componentDidMount() {
        //action call
        this.props.onGetTravels();

    }
    render() {
     
        const travelData =<div className="container">
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
                        this.props.travels.map(
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
                <h3 style={{ textAlign: 'center' }}>Travel List </h3>
                {this.props.message && <div className="alert alert-success">{this.props.message}</div>}
                {travelData}
              
          
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        travels: state.travelsData,
        message: state.message

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetTravels: () => dispatch(actions.fetchTravelData()),
        onDeleteTravels: (id) => dispatch(actions.deleteTravels(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetTravels);
