/*
Ok lots of little details 

Reducers are the ones responsible to change from current state to a new state which are determined by the actions 

When a reducers listens to an action takes the current state and accroding to logic generates new state with properties changed 

0.A Reducers are a pure function 

    - Always produce predictable outcomes 
    *
        const sum (a, b) => {return a + b}
        sum(2,2)
        sum(2,2)
    
    - Doesnt have colateral effect (doesnt change any var outside its scope)


Lets create our first reducer 

A - In folder state 

    - create new folder reducers
    - create file foods.reducer.ts

B - import 

    import { createReducer, on } from '@ngrx/store';

C - The reducer should always have an initial state 

   export const initialState : {} = {}

D - Declare your interface and initiliaze it 

     export const initialState : {loading: boolean, items : ReadOnlyArray<FoodModel>} = {
        loading: false , 
        items : []
     }

E - Create a reducer function 

    1) create a var
    2) assign to a createReducer method 
    3) First argument pass initialState
    4) Second argument pass "on" method 

   export const foodReducer = createReducer(initialState, on())

F - The on method is like listening to actions 

    1) as first argument pass the action to listen 
    2) as the second argument pass a call back function
    3) the callback function returns the spread of the state with the change values

      export const foodReducer = createReducer(initialState, on(loadedFoods, (state)=> {
          return {...state, loading: true}
      }))



   
*/

import { createReducer, on } from '@ngrx/store';
import { IFood, loadedFoods } from './2-actions';
export const initialState: {
  loading: boolean;
  items: ReadonlyArray<IFood>;
} = {
  loading: false,
  items: [],
};

export const foodReducer = createReducer(
  initialState,
  on(loadedFoods, (state) => {
    return { ...state, loading: true };
  })
);
