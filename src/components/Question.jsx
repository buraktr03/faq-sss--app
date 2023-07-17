import React, { useState } from "react";
import "../App.css";
import { arrowdown, arrowup } from "../helper/icons";

const Question = ({ id, question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card w-75 mb-4">
        <div className="card-body">
          <h4 className="card-title">
            {id}. {question}
            <span className="float-end" onClick={toggleAnswerVisibility}>
              {isAnswerVisible ? arrowup : arrowdown}
            </span>
          </h4>
          {isAnswerVisible && (
            <p className="card-text fs-5 text-light">{answer}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
