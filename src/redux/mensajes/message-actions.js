export const setCurrentMessage = (message) => {
    return{
        type: "SET_CURRENT_MESSAGE",
        payload: message
    }
}