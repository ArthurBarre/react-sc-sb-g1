import React from "react";
import Chat from "./ui/molecules/Chat";

export default function App() {
  return (
    <div className="App">
      <Chat />
      <Chat hour="12:30" />
      <Chat hour="4:30" icon />
    </div>
  );
}
