
import './App.css';

import {default as MessageWindow} from './MessageWindow';
import {default as MessageForm} from './MessageForm';

import {useState} from 'react';


function ChatWindow() {
    const [currentMessages, updateMessages] = useState([{user: 'none', text: "How may I help you?"}]);

    return (
        <div className="ChatWindow">
        <MessageWindow messages={currentMessages} />
        <MessageForm userInputEvent={updateMessages} currentMessages={currentMessages} />
        </div>
    );
}

function App() {
    return (
        <div className="App">
        <header className="App-header">
        <p>
        Flatland ChatGPT Bot
        </p>
        </header>

        <main className="App-container">
        <ChatWindow />
        </main>
        </div>
    );
}

export default App;
