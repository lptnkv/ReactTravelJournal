import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main data={data}/>
    </div>
  );
}
