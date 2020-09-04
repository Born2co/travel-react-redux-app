import * as actionTypes from './actionTypes';
import axios from '../../Component/axios-orders';

export const addTravelsSuccess = (id, travelData) => {
    return {
        type: actionTypes.ADD_TRAVELS_SUCCESS,
        travelId: id,
        travelData: travelData
    };
};

export const addTravelsFail = (error) => {
    return {
        type: actionTypes.ADD_TRAVELS_FAIL,
        error: error
    };
}

export const addTravelsStart = () => {
    return {
        type: actionTypes.ADD_TRAVELS_START
    };
};

export const submitTravelData = (travelData) => {
    return dispatch => {
        dispatch(addTravelsStart());
        axios.post('/travel.json', travelData)
            .then(response => {
                // console.log(`response.data.name= id: ${response.data.name}`);
                dispatch(addTravelsSuccess(response.data.name, travelData));
            })
            .catch(error => {
                dispatch(addTravelsFail(error));
            });
    };
};


//Fetch starts here ...
export const fetchTravelsSuccess = (travels) => {
    console.log(`travels ${travels}`)
    return {
        type: actionTypes.FETCH_TRAVELS_SUCCESS,
        travelsData: travels
    };
};

export const fetchTravelsFail = (error) => {
    return {
        type: actionTypes.FETCH_TRAVELS_FAIL,
        error: error
    };
};

export const fetchTravelsStart = () => {
    return {
        type: actionTypes.FETCH_TRAVELS_START
    };
};

export const fetchTravelData = () => {
    return dispatch => {
        dispatch(fetchTravelsStart());
        axios.get('/travel.json')
            .then(res => {
                console.log(`Res: ${res.data}`);
                    const fetchedTravels = [];
                    for (let key in res.data) {
                        fetchedTravels.push({
                            ...res.data[key],
                            id: key
                        });
                    }
                    dispatch(fetchTravelsSuccess(fetchedTravels));
            })
            .catch(err => {
                dispatch(fetchTravelsFail(err));
            });
    };
};


//delete travels
export const deleteTravelsSuccess = (message) => {
    return {
        type: actionTypes.DELETE_TRAVELS_SUCCESS,
        message: message
    };
};

export const deleteTravelsFail = (error) => {
    return {
        type: actionTypes.DELETE_TRAVELS_FAIL,
        error: error
    };
};

export const deleteTravelsStart = () => {
    return {
        type: actionTypes.DELETE_TRAVELS_START
    };
};


export const deleteTravels = (id) => {
    return dispatch => {
        dispatch(deleteTravelsStart());
        axios.delete(`/travel/${id}.json`)
            .then(response => {
                const message = `Delete of todo ${id} Successful`;
                dispatch(deleteTravelsSuccess(message));
                //this.setState({ message: `Delete of todo ${id} Successful` })
                //this.refreshTravel();
                dispatch(fetchTravelData());
            })
            .catch(err => {
                dispatch(deleteTravelsFail(err));
            });
    };
};