const INITIAL_STATE = {
    currentMessage: {
        content: "",
        date: "",
    },
    // cada mensaje es un item
    items: [
        {
            content: "Hi what",
            date: "4 de mayo"
        },
        {
            content: "I'm what",
            date: "4 de mayo"
        },
        {
            content: "Ok what",
            date: "4 de mayo"
        }
    ]
}
const messageReducer = (previousState = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SET_CURRENT_MESSAGE':
            return {
                ...previousState,
                currentMessage: {
                    content: action.payload,
                    date: "4 de mayo"
                }
            }
        default :
            return previousState;
    }
}

export default messageReducer;