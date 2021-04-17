import { INCREMENT, DECREMENT, CONTACTS } from "../Constants"

const initialState = {
    count: 0,
    contacts: "aslam"
}
const Reducer = (state = initialState, action) => {
    console.log("object");
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case CONTACTS:
            // let precont = [...state.contacts]
            return {
                ...state,
                contacts: action.payload
            }


        default:
            return state

    }
}
export default Reducer;

