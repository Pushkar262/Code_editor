import React, { useState } from "react";
import "./CodeWriteArea.css"; // import css file

const CodeWriteArea = () => {
  const [isLocked, setIsLocked] = useState(false); // State for code editing lock status
  const handleLockButtonClick = () => {
    setIsLocked(!isLocked); // Toggle the code editing lock
  };

  const [text, setText] = useState(""); // State to store the code text
  const handleTextChange = (event) => {
    if (isLocked === false) {
      setText(event.target.value); // Update the code text only if it's not locked
    }
  };

  const handleCopy = () => {
    // Copy the code to the clipboard
    navigator.clipboard.writeText(text);
  };

  const [save, setSave] = useState([]); // State to store saved code snippets
  const saveText = () => {
    setSave((prev) => [...prev, text]); // Save the current code to the list of saved snippets
  };
  // Log the saved code snippets because of that is not define where the save snippets showand what the use of saved data
  console.log(save);

  return (
    <>
      <div className="code-area">
        <p className="from-label">Write your code here.</p>
        <textarea
          className="text-area"
          placeholder="Write some code here."
          cols="30"
          rows="20"
          value={text}
          onChange={handleTextChange}
        ></textarea>
      </div>

      <div className="btns">
        <button id="save-button" onClick={saveText}>
          Save
        </button>
        <button id="copy-button" onClick={handleCopy}>
          Copy
        </button>
        <button id="lock-button" onClick={handleLockButtonClick}>
          {isLocked ? "Unlock" : "Lock"}
        </button>
      </div>
    </>
  );
};

export default CodeWriteArea;
