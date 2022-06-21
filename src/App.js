
import { useState } from "react";
import FakeStore from "./components/fakeStore/FakeStore";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
function Welcome(props){
  return (
  <div className="title">
    <h2>{props.title}</h2>
  </div>
  )
}

// function Friends(props){
//   return (
//     <div className="descrip">
//       <h1>{props.name}</h1>
//       <p>{props.job}</p>
//       <p>{props.description}</p>
//   </div>
//   )
// }

// const singers = [
//   {name: 'Dr. Mahfuz', job: 'Singer'},
//   {name: 'Agun', job: 'Writer'},
//   {name: 'Eva Rahman', job: 'Wife'}
// ];

// function Counter(){
//   const [count, setCounter] = useState(33);
//   const increaseCount = () =>{
//     const newCount =  count + 1;
//     setCounter(newCount);
//   }

//   const decreaseCount = ()=>{
//     const deCount = count + 1;
//     setCounter(deCount);
//   }
   
//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

function App() {
  // const nayoks = ["Rubel", "Bapparaj", "Salman Shah", "Joshim", "Agun", "Shuvro Dev"];
  const [count, setCount] = useState(0);
  const setCartCount = () => {
    setCount(count + 1);
  }
  return (
    <div>
    <div className="container">
      <Header count={count} />
    <Welcome title="Welcome to React World" />
    {/* <Counter /> */}
    {
      // nayoks.map(nayok => <li>Name: {nayok}</li>)
    }
    {
      // nayoks.map(nayok => <Friends name={nayok} />)
    }
    {
      // singers.map(singer => <Friends name={singer.name} job={singer.job} /> )
    }
    {/* <Friends name={nayoks[0]} job="Actor" description="I am learning Javascript props. It is very easy and useful" />
    <Friends name={nayoks[1]} job="Sportsman" description="I am learning Javascript props. It is very easy and useful" />
    <Friends name={nayoks[2]} job="Businessman" description="I am learning Javascript props. It is very easy and useful" /> */}
    {/* <Apiusers /> */}
    <FakeStore setCartCount={setCartCount} />
    <Footer />
    </div>
    </div>
    );
  }
  
  export default App;
  