/*

Okay lots of complex things but seems pretty cool. 

The idea is to be familiar with the tech and figure out later 


Architecture of NGRX

ComponentA -> Action -> Reducer -> Store -> Selector -> ComponentA


So what is Ngrx

A - Basically Ngrx the way I see it is a local DB that saves a state of the app. 

B - The 'Store' is where the state lives and is the source of truth

C - Any component can have access to the the state through a selector

D - Components do not talk each other rather they interact with the Ngrx store 

E - Components do not directly interact with the store but rather they trigger "actions" which is interpreted by a 'Reducer' 

F - A reducer takes the current state, merges with the new info and creates a new state (does not mutate old)

H - The reducer saves the new state in the store 




*/
