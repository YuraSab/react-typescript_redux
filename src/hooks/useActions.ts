import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
// import * as UserActionCreators from "../store/action-creators";
import ActionCreators from "../store/action-creators";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch)
}