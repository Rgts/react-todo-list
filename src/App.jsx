import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState([5, 6]);
  const [userInput, setUserInput] = useState("New task");

  const [tasks, setTasks] = useState([]);
  const [isDone, setIsDone] = useState([]);

  return (
    <>
      <div style={{ textAlign: "center", margin: "60px" }}>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button
          onClick={() => {
            // Ajouter un compteur : recup l'ancien et rajouter un à la fin
            // et on l'initialise à 0
            setTasks([...tasks, userInput]);
            setIsDone([...isDone, false]);
          }}
        >
          {" "}
          Ajouter
        </button>
      </div>
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5vw",
            // justifyContent: "spaceEvenly",
          }}
        >
          {tasks.map((task, index) => {
            return (
              <div
                key={"buttonDone" + index}
                style={{ display: "flex", gap: "2vw", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  checked={isDone[index]}
                  key={"buttonDone" + index}
                  onChange={(event) => {
                    const newIsDone = [...isDone];
                    newIsDone[index] = event.target.checked;
                    setIsDone(newIsDone);
                  }}
                />

                <p
                  style={{
                    textDecoration: isDone[index] ? "line-through" : "none",
                  }}
                >
                  {task}
                </p>
                <button
                  key={"buttonDelete-" + index}
                  style={{ border: "none", background: "none" }}
                  onClick={() => {
                    const newTasks = [...tasks];
                    const newIsDone = [...isDone];

                    // At position index, remove 1 item:
                    newTasks.splice([index], 1);
                    setTasks(newTasks);
                    // At position index, remove 1 item:
                    newIsDone.splice([index], 1);
                    setIsDone(newIsDone);
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            );
          })}
        </div>
      </main>

      <footer>
        Made with <span className="bold">React</span> at{" "}
        <span className="bold">Le Reacteur</span> by{" "}
        <span className="bold">Renaud Gantois</span>
      </footer>
    </>
  );
}

export default App;
