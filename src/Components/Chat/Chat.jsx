import React, {useEffect, useState} from 'react'
import Message from "./Message/Message.jsx"
import { Button } from '@material-ui/core';
import "./Chat.css"

function Chat() {
    const [input, setInput] = useState(null)


    function handleSubmit() {
        console.log(input)
    }

    return (
        <>
            <div className = "chatBox" >
                <Message ownMessage={false}/>
                <Message ownMessage={true}/>
                <Message ownMessage={true}/>
                <Message ownMessage={false}/>
                <Message ownMessage={false}/>
            </div>

            <div className = "newChat" >
                <textarea 
                    className = "newChat__input"
                    onChange = {(e) => setInput(e.target.value)}
                    rows = "3" 
                    placeholder = "Write some message here..."
                    maxLength = "1000">
                </textarea>
                <Button 
                    onClick = {() => {handleSubmit()}}
                    className = "newChat__button"
                    variant="contained" 
                    color="primary">
                    Send
                </Button>
            </div>
        </>
    )
}

export default Chat