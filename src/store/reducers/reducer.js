import {CHANGE, MODALW, TIMES} from "../actions/actions";

const inState = {
	settingModal: false,
    change: "caral",
	times:{
		pomofocus: 25, 
		shortBreak:5, 
		longBreak: 10,
		auto: false,
		autoBreak: false
	}
};
export const myPomo = (state = inState, action) => {
	switch (action.type) {
        case CHANGE:
            return{
               ...state,change:action.color
            }

		case MODALW:
			if (state.settingModal === false) {
				return { ...state, settingModal: true };
			} else {
				return { ...state, settingModal: false };
			}
         
		case TIMES: 
		   return {
             ...state, 
			 pomofocus: state.pomofocus,
		     shortBreak: state.shortBreak,
		     longBreak: state.longBreak,
		}
		default:
			return state;
	}
};
