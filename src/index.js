import store from "./store";
import {bugAdded} from './actions';

store.subscribe(() => {
    console.log('store changed', store.getState());
});

store.dispatch(bugAdded('bug1'));



console.log(store.getState());