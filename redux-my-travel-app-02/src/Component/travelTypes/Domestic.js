import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const domestic = (props) => {
    const domesticTravelData = <div className="container">
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
                    props.travels
                        .filter(travel => travel.travelData.country === 'india')
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
        <div >
            <h3 style={{ textAlign: 'center' }}>Domestic Travel</h3>
            {domesticTravelData}
        </div >
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(domestic);

//export default domestic;