
import './App.css';

const Person = (props) => {
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.LastName}</h2>
    <h2>Age: {props.Age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
     < Person
         name='John'
         LastName={'Doe'}
          Age={'25'}
          />

     < Person 
        name="Mary" 
         LastName={'Doe'} 
         Age={'25'}
         />

    </div>
  );
}

export default App;
