import { useEffect } from "react"
import './Chat.css'

export function Chat(){

    // TITULO DA PAGINA
    // useEffect(() => {
    //     document.title = "Chat"
    // })
    // -------------------------------
    
    useEffect(() => {
        document.title = "Chat"
        const contacts = [
          { name: "João Santos", profilePic: "./src/assets/man_1.jpeg" },
          { name: "Alice Almeida", profilePic: "./src/assets/woman_1.jpeg" },
          { name: "Sandra Pereira", profilePic: "./src/assets/woman_2.jpeg" }
        ];
    
        const chatMessages = [
          { sender: "João Santos", message: "Olá!" },
          { sender: "Usuário", message: "Oi João!" },
          { sender: "João Santos", message: "O que você queria falar comigo?" },
          { sender: "Usuário", message: "Então... Quero fazer negócios" },
          { sender: "Usuário", message: "Topa comprar minhas sementes?" },
          { sender: "João Santos", message: "Claro!" },
        ];
    
        function displayContacts() {
          const contactList = document.getElementById("contact-list");
          contactList.innerHTML = "";
          contacts.forEach(contact => {
            const li = document.createElement("li");
            li.classList.add("contact-card");
            li.innerHTML = `
              <img src="${contact.profilePic}" alt="Profile Picture">
              <div class="info">
                <h4>${contact.name}</h4>
                <p><span class="status green"></span>Online</p>
              `;
            contactList.appendChild(li);
          });
        }
    
        function displayChatMessages() {
          const chatMessagesDiv = document.getElementById("chat-messages");
          chatMessagesDiv.innerHTML = "";
          chatMessages.forEach(msg => {
            const div = document.createElement("div");
            div.textContent = `${msg.sender}: ${msg.message}`;
            div.classList.add("message");
    
            if (msg.sender === "Usuário") {
              div.classList.add("sent");
            } else {
              div.classList.add("received");
            }
    
            chatMessagesDiv.appendChild(div);
          });
        }
    
        function sendMessage() {
          const messageInput = document.getElementById("message-input");
          const message = messageInput.value.trim();
          if (message !== "") {
            chatMessages.push({ sender: "Usuário", message });
            displayChatMessages();
            messageInput.value = "";
          }
        }
    
        document.getElementById("send-btn").addEventListener("click", sendMessage);
    
        displayContacts();
        displayChatMessages();
      }, []);

    return(
        <div>
    <div className="container">
    <div className="contacts">
      <input type="text" id="search" placeholder="Pesquisar contatos..."/>
      <ul id="contact-list">

      </ul>
    </div>
    <div className="chat">
    
      <div id="chat-messages">

      </div>
      <div className="message-input">
        <input type="text" id="message-input" placeholder="Escreva aqui..."/>
        <button id="send-btn">Enviar</button>
      </div>
    </div>
  </div>
        </div>
    ) 

}