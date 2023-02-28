import {useState} from 'react';


function MessageForm(props) {
    const {userInputEvent, currentMessages} = props;

    const [userInput, inputChange] = useState();

    // User input change event
    const onInputChange = (event) => {
        inputChange(event.target.value);
    };


    // Form submit handler event
    const onUserSubmit = (event) => {
        event.preventDefault();

        // Parse user input
        const newMessage = [{user: 'user', text: event.target[0].value}];

        // Append message to the messages in state
        userInputEvent(currentMessages.concat(newMessage));
        inputChange("");

        // Make send user message to ChatGPT API and retrieve response

        // Append the ChatGPT response messages to the messages in state
    };

    return (
            <form className="MessageForm" onSubmit={onUserSubmit}>
            <input type="text" name="user_message" onChange={onInputChange} value={userInput} />
            <input type="submit" />
            </form>
    );
}

export default MessageForm;
