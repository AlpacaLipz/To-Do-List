import React, { useState } from "react";

const DisplayTask = ({ quest, index, deleteQuest }) => {
  const { task } = quest;
  const [t, setT] = useState(quest);

  const deleteAQuest = () => {
    deleteQuest(quest, index);
  };

  const isComplete = () => {
    setT({ task: task, isComplete: !t.isComplete });
  };
  return (
    <div>
      <div className="contain">
        <ul className="flex">
          <li className="task">Task: </li>
          <li className="taskTwo">
            <span
              className="strikethrough"
              style={{ textDecoration: t.isComplete ? "line-through" : "none" }}
            >
              {task}
            </span>
            <input
              type="checkbox"
              onChange={isComplete}
              checked={t.isComplete}
              className="strikethrough marginLefter"
            />
          </li>
          <button className="marginLeftist" onClick={deleteAQuest}>
            {" "}
            Delete
          </button>
        </ul>
      </div>
    </div>
  );
};
export default DisplayTask;
