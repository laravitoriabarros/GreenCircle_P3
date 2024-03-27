import { useEffect, useState } from "react";
import { db, auth } from "../../Firebase/config";
import { collection, addDoc, query, where, orderBy, onSnapshot } from "firebase/firestore";
import "./Chat.css";

export function Chat() {
  const [currentUser, setCurrentUser] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedContactName, setSelectedContactName] = useState("");

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user.email);
      } else {
        setCurrentUser(null);
      }
    });

    const unsubscribeContacts = onSnapshot(collection(db, "users"), (snapshot) => {
      const contactsData = snapshot.docs.map((doc) => doc.data().email);
      setContacts(contactsData);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeContacts();
    };
  }, []);

  useEffect(() => {
    if (selectedContact) {
      const q = query(collection(db, "messages"),
        orderBy("timestamp"),
        where("sender", "in", [currentUser, selectedContact]),
        where("receiver", "in", [currentUser, selectedContact]));

        const unsubscribeChat = onSnapshot(q, (snapshot) => {
          const messagesData = snapshot.docs.map((doc) => doc.data());
          console.log("ChatMessages:", messagesData); // Verifica se as mensagens estão sendo corretamente recuperadas
          setChatMessages(messagesData);
        });
        

      const usersRef = collection(db, "users");
      const qUser = query(usersRef, where("email", "==", selectedContact));
      const unsubscribeUser = onSnapshot(qUser, (snapshot) => {
        snapshot.forEach((doc) => {
          setSelectedContactName(doc.data().name);
        });
      });

      return () => {
        unsubscribeChat();
        unsubscribeUser();
      };
    }
  }, [currentUser, selectedContact]);

  const sendMessage = async () => {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();

    if (message !== "") {
      try {
        await addDoc(collection(db, "messages"), {
          sender: currentUser,
          receiver: selectedContact,
          message: message,
          timestamp: new Date(),
        });
        console.log("Mensagem enviada com sucesso!");
      } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
      }

      messageInput.value = "";
    }
  };

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div>
      <div className="container">
        <div className="contacts">
          <input type="text" id="search" placeholder="Pesquisar contatos..." />
          <ul id="contact-list">
            {contacts.map((contact) => (
              <li key={contact} className="contact-card" onClick={() => handleContactClick(contact)}>
                {contact}
              </li>
            ))}
          </ul>
        </div>
        <div className="chat">
          {selectedContact && (
            <div className="chat-header">
              <p>Você está conversando com: {selectedContactName}</p>
            </div>
          )}
          <div id="chat-messages">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === currentUser ? "sent" : "received"}`}>
                <div className={msg.sender === currentUser ? "sent-message" : "received-message"}>
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
          <div className="message-input">
            <input type="text" id="message-input" placeholder="Escreva aqui..." />
            <button id="send-btn" onClick={sendMessage}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
