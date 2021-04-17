import { INCREMENT, DECREMENT, CONTACTS } from "../Constants";

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }

}

export const contacts = (data) => {
    return {
        type: CONTACTS,
        payload: data
    }
}