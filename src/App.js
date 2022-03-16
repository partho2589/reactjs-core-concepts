import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
     <Person name = "Pronto" job = "student"> </Person>
     <Person name = "Ruble" job = "student"> </Person>
     <Person name = 'Maruf Ali' job= "student"> </Person>
           <h1>Well come React.</h1>
     <Friend name = 'Rana' phone ="01721915"></Friend>
     <Friend name = 'saila' phone = '014541'></Friend>
     <Friend></Friend>
      
    </div>
  );
};
function Person (props){
  console.log(props)
  return (
    <div className="person">
      <h1>Name: {props.name}</h1>
      <p>Job: {props.job}</p>
    </div>
  )
};
function Friend (props){
  return (
    <div className='friend'>
      <h3>Name: {props.name}</h3>
      <p>Phone:{props.phone} </p>
    </div>
  )
}


export default App;
