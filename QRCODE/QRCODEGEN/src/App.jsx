import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import QRCode from "react-qr-code";
import "./App.css";

function App() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>Qr code generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter any value"
          value={input}
          name="qr"
        />
        <button onClick={handleGenerateQrCode}>generate</button>
      </div>
      <div>
        <QRCode id="qr" value={qrCode} size={200}>
          {" "}
        </QRCode>
      </div>
    </div>
  );
}

export default App;
