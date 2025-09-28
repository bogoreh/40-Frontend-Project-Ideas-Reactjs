import React from 'react';
import { useChat } from '../../hooks/useChat';

const ContactList = () => {
  const { conversations, activeConversation, setActiveConversation, isUserOnline } = useChat();

  return (
    <div className="contact-list">
      <div className="contact-list-header">
        <h2>Conversations</h2>
      </div>
      <div className="contacts">
        {conversations.map(conversation => (
          <div
            key={conversation.id}
            className={`contact-item ${activeConversation?.id === conversation.id ? 'active' : ''}`}
            onClick={() => setActiveConversation(conversation)}
          >
            <div className="contact-info">
              <div className="contact-name">
                {conversation.participant.name}
              </div>
              <div className={`contact-status ${isUserOnline(conversation.participant.id) ? 'status-online' : 'status-offline'}`}>
                {isUserOnline(conversation.participant.id) ? 'Online' : 'Offline'}
              </div>
            </div>
            <div className="last-message">
              {conversation.lastMessage}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;