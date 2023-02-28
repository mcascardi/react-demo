
function MessageWindow(props) {
    const {messages} = props;

    return (
            <div className="MessageWindow">
            {messages.length > 0 && messages.map(message => <div className={message.user}>{message.text}</div>)}
        </div>
    );
}

export default MessageWindow;
