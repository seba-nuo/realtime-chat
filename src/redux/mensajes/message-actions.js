let messageID = 0;
export const addMessage = (message, date) => ({
        type: "ADD_MESSAGE",
        payload: {
            id: ++messageID,
            content: message,
            date: date,
        }
    })
