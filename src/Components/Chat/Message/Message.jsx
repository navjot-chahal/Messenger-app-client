import "./Message.css"

function Message(props) {
    return (
        <div className = {props.ownMessage ? "message message__own" : "message" }>
            <div className = "message__body">
                <img className="message__img" src="./images/anonymous-avatar.jpeg" alt="" />
                <div className="message__text"><p>some very long message here just to fill the gap lol!</p></div>
            </div>

            <div className = "message__timestamp">
                {Date.now()}
            </div>
        </div>
    )
}

export default Message