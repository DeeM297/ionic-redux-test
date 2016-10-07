import { Action } from 'redux'

const initialState = {
	counter: 0
}

export default function (state = initialState, action: Action) {
	switch (action.type) { 
		case 'INCREMENT':
			let newState = Object.assign({}, state);
			newState.counter++;
			return newState;
		default:
			break;		
	}
	return state;
}
