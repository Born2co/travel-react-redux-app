import * as actionTypes from './actionTypes';
import axios from '../../Component/axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/travel.json', orderData)
            .then(response => {
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
    };
};


//Fettch starts here ...

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        axios.get('/travel.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(err => {
                dispatch(fetchOrdersFail(err));
            });
    };
};


//delete travels

export const deleteOrdersSuccess = (message) => {
    return {
        type: actionTypes.DELETE_ORDERS_SUCCESS,
        message: message
    };
};

export const deleteOrdersFail = (error) => {
    return {
        type: actionTypes.DELETE_ORDERS_FAIL,
        error: error
    };
};

export const deleteOrderStart = () => {
    return {
        type: actionTypes.DELETE_ORDERS_START
    };
};


export const deleteTravels = (id) => {
    return dispatch => {
        dispatch(deleteOrderStart());
        axios.delete(`/travel/${id}.json`)
            .then(response => {
                const message = `Delete of todo ${id} Successful`;
                dispatch(deleteOrdersSuccess(message));
                //this.setState({ message: `Delete of todo ${id} Successful` })
                //this.refreshTravel();
                dispatch(fetchOrders());
            })
            .catch(err => {
                dispatch(deleteOrdersFail(err));
            });
    };
};

