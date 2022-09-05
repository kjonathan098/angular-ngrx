/*

Now lets see how to call actions inside your components 

A - In constructore create instance 

    constructor(private store: Store) {}

B - Store class has a method called dispatch 

    means fire action 

    ngOnInit(): void {
        this.store.dispatch();
    }

C - as an argument to dispatch we can pass any var we created in ur actions files and call it! 

      ngOnInit(): void {
        this.store.dispatch(loadItems());
    }

*/
