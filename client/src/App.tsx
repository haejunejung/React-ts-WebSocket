import React, { useEffect } from "react";

function App() {
  const ws: any = new WebSocket("ws://localhost:8000");
  useEffect(() => {
    ws.onopen = () => {
      console.log("Connected!");
    };

    ws.onmessage = (evt: MessageEvent) => {
      console.log(evt);
      console.log(evt.data);
    };
  });

  const handleSendMessage = () => {
    ws.send("Hello, this is client Message!");
  };

  return (
    <div>
      <button onClick={handleSendMessage}>Message 보내기</button>
    </div>
  );
}

export default App;
