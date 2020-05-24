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
    icon
    hour="12h30"
    username={text("UserName", "shatice")}
    message={text("Message", "Mais ou et donc or ni car")}
  />
);

export const LongChatMessage = () => (
  <Chat message={text("Message", "Quiquequoidontoùmaisouetdoncornicar")} />
);

export const ChatWithIcon = () => (
  <Chat icon message={text("Message", "This is a message with icon")} />
);

export const ChatWithHour = () => (
  <Chat hour="4:30" message={text("Message", "This is a message with icon")} />
);

export const ChatWithMention = () => (
  <Chat mention="tutur" message={text("Message", "Salut")} />
);

export const ChatFull = () => (
  <Chat
    icon
    hour="4:30"
    mention="tutur"
    username="shatice"
    message={text("Message", "Chat with icon, hour, and message")}
  />
);
