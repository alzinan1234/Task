import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Item from "./components/Item";
import Navbar from "./components/Navbar";
import OtherSection from "./components/OtherSection";
import Satting from "./components/Satting";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Item />
      <Satting />
      <OtherSection />
      <Card />
    </>
  );
}

export default App;
