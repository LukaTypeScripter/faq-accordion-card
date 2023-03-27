import { useState } from "react";

import "./App.css";
import arrowDown from "./images/icon-arrow-down.svg"
import arrowUp from "./images/Path 2.png"
import Data from "./Data";
import Questions from "./Questions";
function App() {

const [questions,setQuestions] = useState(Data)

  return (
    <div className="container">
      <div className="card">
        <h1 id="faq">FAQ</h1>
        <div className="first-faq">
            {questions.map((questions) => {
            return <Questions key={questions.id} {...questions}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
