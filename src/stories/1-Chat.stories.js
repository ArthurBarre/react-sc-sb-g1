import React from "react";
import Chat from "../ui/molecules/Chat";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Chat Message",
  component: Chat,
  decorators: [withKnobs],
};

export const BaseChat = () => (
  <Chat
    username={text("UserName", "hlnlapookie")}
    message={text("Message", "Hello, this is the default version of myself")}
  />
);

export const ChatWithIcon = () => (
  <Chat
    icon
    username={text("UserName", "hlnlapookie")}
    message={text(
      "Message",
      "Hello, this is my version with an icon before my username"
    )}
  />
);

export const ChatWithHour = () => (
  <Chat
    hour="4:30"
    username={text("UserName", "hlnlapookie")}
    message={text("Message", "Hello, this is my timed version")}
  />
);

export const ChatWithMention = () => (
  <Chat
    username={text("UserName", "hlnlapookie")}
    message={text(
      "Message",
      "Hello, this is my version with an user mentioned in my message's content"
    )}
    mention={text("Mention", "tutur")}
  />
);

export const ChatWithHighlight = () => (
  <Chat
    highLight
    username={text("UserName", "hlnlapookie")}
    message={text(
      "Message",
      "Hello,  this is my version with highlight, used to make me more visible. Hello,  this is my version with highlight, used to make me more visible"
    )}
  />
);
export const ChatWithContrast = () => (
  <Chat
    contrast
    username={text("UserName", "hlnlapookie")}
    message={text(
      "Message",
      "Hello,  this is my version with highlight, used to make me more visible. Hello,  this is my version with highlight, used to make me more visible"
    )}
  />
);

export const ChatFull = () => (
  <Chat
    highLight
    hour="5:28"
    icon
    username={text("UserName", "hlnlapookie")}
    message={text(
      "Message",
      "Hello, this is my version with an user mentioned in my message content"
    )}
    mention={text("Mention", "tutur")}
  />
);
