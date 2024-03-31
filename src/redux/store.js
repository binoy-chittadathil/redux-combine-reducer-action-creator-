import { combineReducers, createStore } from "redux";

const appReducer = combineReducers({
    count:countReducer,
    ready:readyReducer
});

function countReducer(prevState = 0, action) {
    switch (action.type) {
        case 'increment':

            return prevState + 1

        case 'decrement':

            return prevState - 1

        default:
            return prevState
    }
}

function readyReducer(prevState=false, action){
    switch (action.type) {
        case 'setReady':
            
            return !prevState
    
        default:
            return prevState
    }
}

const store = createStore(appReducer);

// action creator
function increment(){
    return{
        type:'increment'
    }
}

function decrement(){
    return{
        type:'decrement'
    }
}

function isReady(){
    return {
        type:'setReady'
    }
}

export default store
export {
    increment,
    decrement,
    isReady
}