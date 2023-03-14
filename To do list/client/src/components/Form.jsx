import React, { useState } from "react";

const Form = (props) => {
  const [task, setTask] = useState("");

  const handleTask = (e) => {
    e.preventDefault();
    props.addNewTask({ task: task, isComplete: false });
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleTask}>
        <div>
          <label className="label">Tasks:</label>
          <input
            className="inputStyle"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button> Enter In Your Task </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
