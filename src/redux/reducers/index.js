import { combineReducers} from 'redux'; //Nơi lưu reducer STORE thức hiện action
import Cart from "./Cart"
import demo from "./demo"
const appReducers = combineReducers({
    Cart,
    demo
});

export default appReducers
