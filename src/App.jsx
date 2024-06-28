import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="app">
      <Navbar title="TextUtils" />
      <TextForm heading="Enter the Text" />
    </div>
  );
}

export default App;
