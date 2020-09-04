import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState= {
    travelsData: [],    
    loading: false,
    purchased: false,
    message: null
}
//posting Travels Data to firebase
const addTravelsInit = ( state, action ) => {
    return updateObject( state, { purchased: false } );
};

const addTravelsStart = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const addTravelsSuccess = ( state, action ) => {
    const newOrder = updateObject( action.travelData, { id: action.travelId } );
    return updateObject( state, {
        loading: false,
        purchased: true,
        travelsData: state.travelsData.concat( newOrder )
    } );
};

const addTravelsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

//fetch travels data from firebase
const fetchTravelsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchTravelsSuccess = ( state, action ) => {
    return updateObject( state, {
        travelsData: action.travelsData,
        loading: false
    } );
};

const fetchTravelsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


//delete travels from firebase

const deleteTravelsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const deleteTravelsSuccess = ( state, action ) => {
    return updateObject( state, {
        message: action.message,
        loading: false
    } );
};

const deleteTravelsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TRAVELS_INIT: return addTravelsInit( state, action );
        case actionTypes.ADD_TRAVELS_START: return addTravelsStart( state, action );
        case actionTypes.ADD_TRAVELS_SUCCESS: return addTravelsSuccess( state, action )
        case actionTypes.ADD_TRAVELS_FAIL: return addTravelsFail( state, action );

        case actionTypes.FETCH_TRAVELS_START: return fetchTravelsStart( state, action );
        case actionTypes.FETCH_TRAVELS_SUCCESS: return fetchTravelsSuccess( state, action );
        case actionTypes.FETCH_TRAVELS_FAIL: return fetchTravelsFail( state, action );

        case actionTypes.DELETE_TRAVELS_START: return deleteTravelsStart( state, action );
        case actionTypes.DELETE_TRAVELS_SUCCESS: return deleteTravelsSuccess( state, action );
        case actionTypes.DELETE_TRAVELS_FAIL: return deleteTravelsFail( state, action );
        default: return state;
    }
}

export default reducer;