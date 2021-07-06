const socket = io();
const msgText = document.querySelector('#msg')
const btnSend = document.querySelector('#btn-send')
const chatBox = document.querySelector('.chat-content')
const displayMsg = document.querySelector('.message')

let name;
do {
    name = prompt('what is your name?')
}while(!name);

document.querySelector('#your-name').textContent = name;
msgText.focus();

btnSend.addEventListener('click',()=>{
    sendMsg(msgText.value)
})

const sendMsg =message => {
    let msg ={
        user:name,
        message:message.trim()
    }

    socket.emit('sendMessage',msg)
}