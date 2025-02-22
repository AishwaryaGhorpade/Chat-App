"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import { useUser } from '@clerk/nextjs';
import 'stream-chat-react/dist/css/v2/index.css';

// const apiKey = 'rdx86sadbwun';
//const userId = 'user_2sqG4jko5Zh2lpvGW576fcT5QoP';
// const userName = 'Aishwarya';
// const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGFyay1zaGFwZS0xIiwiZXhwIjoxNzM5MjA1MjE0fQ.7VNgmLvkDArUb10Xag8lAH76GNVw0WE12Xr2jjLTGIM';

function capitalize(str) {
        if (!str) return ""; // Handle empty string
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

const ChatForum = ({ clerkUser, slug }) => {
  const apiKey = 'rdx86sadbwun';
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

    const [channel, setChannel] = useState();
    const client = useCreateChatClient({
      apiKey,
      tokenOrProvider: userToken,
      userData: user,
    });
  
    useEffect(() => {
      if (!client) return;
  
      const channel = client.channel('messaging', slug, {
        image: 'https://getstream.io/random_png/?name=react',
        name: capitalize(slug) + ' Discussion',
        members: [userId],
      });
  
      setChannel(channel);
    }, [client]);
  
    if (!client) return <div>Setting up client & connection...</div>;
  
    return (
      <Chat client={client}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    );
}

export default ChatForum