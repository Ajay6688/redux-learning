import {createSlice , configureStore} from '@reduxjs/toolkit';

let initialState = {
    count : 0 ,
    showCounter : true 
}

let counterSlice = createSlice({
    name : 'counter' ,
    initialState : initialState,
    reducers : {
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        increment5(state , action ){
            state.count = state.count + action.payload
        },
        toggle(state){
            state.showCounter = !state.showCounter
        }
    }
})

let authInitialState = {
    authenticated : false 
}

const authSlice = createSlice({
    name : 'auth',
    initialState : authInitialState ,
    reducers : {
        login(state){
            console.log("hii")
            state.authenticated = true ;
        },
        logout(state){
            state.authenticated = false ;
        }
    }
})

const store = configureStore({
    reducer : {
        counter: counterSlice.reducer,
        auth : authSlice.reducer 
    }
}) ; 

 
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store ;


// const counterReducer = (state = initialState, action)=>{
//     console.log('inside reducer');
//     if(action.type =='INCREMENT'){
//         return {
//             counter : state.counter + 1
//         } 
//     }

//     if(action.type === 'INCREMENT5'){
//         console.log("inside increment 5")
//         return {
//             counter : state.counter + action.amount
//         }
//     }

//     if(action.type ==='DECREMENT'){
//         return {
//             counter : state.counter - 1
//         }
//     }

//     if(action.type ==='TOGGLE'){
//         return {
//             counter : state.counter ,
//             showCounter : !state.showCounter
//         }
//     }

//     return state ;
// }


