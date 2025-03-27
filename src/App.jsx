import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 id="head">Hello, React!</h1>
      <UserCard name="Abhijeet Singh" age={26}/>
      <UserCard name="Olivia Wilson" age={31}/>
      <UserCard name="John Doe" age={25}/>
    </div>
  );
}

export default App;
