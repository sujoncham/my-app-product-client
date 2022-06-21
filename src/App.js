import { useState } from "react";
import FakeStore from "./components/fakeStore/FakeStore";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {
  const [count, setCount] = useState(0);
  const setCartCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className="container">
        <Header count={count} />
        
        <FakeStore setCartCount={setCartCount} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
