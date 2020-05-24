import React from "react";
import Chat from "./ui/molecules/Chat";

export default function App() {
  return (
    <div className="App">
      <Chat />
      <Chat message="of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and m" />
      <Chat icon hour="12h30" username="shatice" message="hello all" />
      <Chat hour="4:30" message="Hello" mention="helene" icon />
    </div>
  );
}
