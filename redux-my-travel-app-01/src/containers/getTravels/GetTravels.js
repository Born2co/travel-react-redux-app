import React, { Component } from 'react';
//import axios from '../../Component/axios-orders';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
class GetTravels extends Component {

    state = {
       // orders: [],
       // loading: true,
       // message: null
    }

    componentDidMount() {
        this.props.onGetTravels();
    //    this.refreshTravel();
    }
   
    refreshTravel = () => {
        // axios.get('/travel.json')
        //     .then(res => {

        //         const fetchedOrders = [];
        //         for (let key in res.data) {
        //             fetchedOrders.push({
        //                 ...res.data[key],
        //                 id: key
        //             });
        //         }

        //         console.log(`fetchedOrders[0].travelData`, fetchedOrders);
        //         this.setState({ loading: false, orders: fetchedOrders });
        //     })
        //     .catch(err => {
        //         this.setState({ loading: false });
        //     });
        
        //  this.props.onGetTravels();

    }





    deleteTodoClicked = (id) => {
        console.log(`delete id : ${id}`)

        //delete from state

        //    const newTravels= [...this.state.orders];
        //    const updatedTravel= newTravels.filter(f=>f.id !==id);
        //    this.setState({orders: updatedTravel, message: `Delete of todo ${id} Successful`})

        // axios.delete(`/travel/${id}.json`)
        //     .then(response => {
        //         this.setState({ message: `Delete of todo ${id} Successful` })
        //         this.refreshTravel();
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })


    }

    render() {
        return (
            <div>
                <h3>Travel List </h3>
                {this.props.message && <div className="alert alert-success">{this.props.message}</div>}
                <div className="container">
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
                                this.props.orders.map(
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
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        orders: state.orders,
        message: state.message

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetTravels: () => dispatch(actions.fetchOrders()),
        onDeleteTravels: (id) => dispatch(actions.deleteTravels(id))
    };
};

//export default GetTravels;
export default connect(mapStateToProps, mapDispatchToProps)(GetTravels);
