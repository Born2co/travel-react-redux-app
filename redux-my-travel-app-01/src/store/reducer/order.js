import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState= {
    orders: [],
    loading: false,
    purchased: false,
    message: null
}
//posting to firebase
const purchaseInit = ( state, action ) => {
    return updateObject( state, { purchased: false } );
};

const purchaseBurgerStart = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const purchaseBurgerSuccess = ( state, action ) => {
    const newOrder = updateObject( action.orderData, { id: action.orderId } );
    return updateObject( state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat( newOrder )
    } );
};

const purchaseBurgerFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

//fetch data from firebase
const fetchOrdersStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchOrdersSuccess = ( state, action ) => {
    return updateObject( state, {
        orders: action.orders,
        loading: false
    } );
};

const fetchOrdersFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


//delete travels

const deleteOrderStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const deleteOrdersSuccess = ( state, action ) => {
    return updateObject( state, {
        message: action.message,
        loading: false
    } );
};

const deleteOrdersFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit( state, action );
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart( state, action );
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess( state, action )
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail( state, action );

        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart( state, action );
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess( state, action );
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail( state, action );

        case actionTypes.DELETE_ORDERS_START: return deleteOrderStart( state, action );
        case actionTypes.DELETE_ORDERS_SUCCESS: return deleteOrdersSuccess( state, action );
        case actionTypes.DELETE_ORDERS_FAIL: return deleteOrdersFail( state, action );
        default: return state;
    }
}

export default reducer;