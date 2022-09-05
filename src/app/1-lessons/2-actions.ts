/*

Intro to actions 

Structure of an action 

    {
        `[Item List] Load Items`
    }

Actions represent an Event that happened in your app 

    1 - Start by adding a folder called state in your app 

    2 - Add a folder for actions

    3 - Inside you can start adding files for actions 

        * By convention name them items.actions.ts


A - import 

    import { createAction, props } from '@ngrx/store';

B - create a var 

    export const loadItems = 


C - Assign it to a method 

    export const loadItems = createAction()

D - create actions needs one thing 'NAME'

    By convention your write in [] the component its related to 
    and the actions is supossed to be doing 

    `[Food Items] load food`

    export const loadItems = createAction(`[Food Items] load food`)

E - You can also pass a second argument which is props 

    Props helps you tell if youre expecting a returned value 

    props<{ items: ItemModel[] }>()

    export const loadedItems = createAction(
        `[Items List] loaded success`,
        props<{ items: ItemModel[] }>()
    );



*/

import { createAction, props } from '@ngrx/store';

export interface IFood {
  name: string;
  price: string;
  pic: string;
}

export const loadFoods = createAction(`[Food Items] load food`);

export const loadedFoods = createAction(
  `[Items List] loaded success`,
  props<{ items: IFood[] }>()
);
