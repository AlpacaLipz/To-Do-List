import React, { useState } from "react";

import Form from "./components/Form";
import DisplayTask from "./components/DisplayTask";
import './App.css';


function App() {
  const [quests, setQuests] = useState([]);

  const addNewQuest = (newQuest) => {
      setQuests([...quests, newQuest]);
  };

  const deleteQuest = (questToDelete, indexPeram) => {
    setQuests(quests.filter((quest, idx) => idx !== indexPeram));
  };

  return (
    <div className="App">
      <div>
      <h1>To Do List</h1>
      <Form addNewTask={addNewQuest}/>
      </div>
      <div>
      {quests.map((quest, idx) => (<DisplayTask quest={quest} index={idx} deleteQuest={deleteQuest} />))}
      </div>
    </div>
  );
};

export default App;
