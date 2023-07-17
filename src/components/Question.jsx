

const Question = ({ id, question, answer }) => {
  return (
    <div>
      <div className="card w-75 mb-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {id}. {question}
          </h5>
          <p className="card-text">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
