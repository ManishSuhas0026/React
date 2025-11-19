import { createStore } from 'redux';

// Initial State
const initialState = {
    user: {
        username : "Manish",
        balance : 35000
    },
};

// Action

export const addMoney = (amt) => ({
    type: "addMoney",
    payload : amt,
});

export const removeMoney = (amt) => ({
    type: "removeMoney",
    payload : amt,
});

// Reducer state

function reducer(state = initialState, action) {
    switch(action.type) {
        case "addMoney":
            return {
                user : {
                    username : state.user.username,
                    balance: state.user.balance + action.payload
                },
            };

        case "removeMoney":
            return {
                user : {
                    username : state.user.username,
                    balance: state.user.balance - action.payload
                },
            };

        default :
            return state;
    }

}

const store = createStore(reducer);
export default store;