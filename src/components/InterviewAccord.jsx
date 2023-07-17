import questions from "../helper/data.js";
import Question from "./Question.jsx";

const InterviewAccord = () => {
  return (
    <div>
      {questions.map((item) => (
        <Question {...item}  key={item.id}/>
      ))}
    </div>
  );
};

export default InterviewAccord;
