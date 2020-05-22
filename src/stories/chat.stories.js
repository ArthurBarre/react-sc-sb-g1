import React from "react";
import Chat from "../ui/molecules/Chat";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Chat",
  component: Chat,
  decorators: [withKnobs],
};

export const BaseChat = () => (
  <Chat username="sawa" message={text("Label", "Designer")} />
);

export const LongChatMessage = () => (
  <Chat
    message={text(
      "Label",
      "This is a long message,This is a long messageThis is a long messagev"
    )}
  />
);
export const ChatWithIcon = () => (
  <Chat icon={null} message={text("Label", "This is a message with icon")} />
);

export const ChatWithHour = () => (
  <Chat hour="12:30" message={text("Label", "This is a message with icon")} />
);

export const ChatWithMention = () => (
  <Chat mention="tutur" message={text("Label", "@lnLaSorciere")} />
);

export const ChatFull = () => (
  <Chat
    icon={null}
    hour="12H30"
    mention="tutur"
    username="sawa"
    message={text("Label", "Chat with icon, hour, and message")}
  />
);
