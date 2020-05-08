const INITIAL_STATE = {
    currentMessage: {
        id: 0,
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
        case 'ADD_MESSAGE':
            const { id, content, date } = action.payload;
            return {
                ...previousState,
                items: [
                    ...previousState.items,
                    {
                        id: id,
                        content: content,
                        date: date
                    }]
                }
        default :
            return previousState;
    }
}

export default messageReducer;