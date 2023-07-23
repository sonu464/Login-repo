import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import InvalidInput from "./components/InvalidInput/InvalidInput";
import ShowData from "./components/ShowData/ShowData";

function App() {
  const data = [{ name: "Sonu Saini", age: "22" }];
  const [userData, setUserData] = useState(data);

  const addUserHandler = (userInput) => {
    setUserData((prevData) => {
      return [...prevData, ...userInput];
    });
  };

  return (
    <>
      <Form onAddUser={addUserHandler} />
      <ShowData user={userData} />
    </>
  );
}

export default App;
