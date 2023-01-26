import './App.css'
import { useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';


const App = () => {
  const [user, setUser] = useState('');
  // const [errors, setErrors] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // authenticating user on page load
    fetch('/me')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setUser(user);
        });
      }
    })
  },[]);

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // }

// !Not sure why I have to use full path on fetch
  // const fetchStations = () => {
  //   fetch('http://localhost:3000/stations', options)
  //     .then(res => res.json())
  //     .then(  //stationsData => console.log("Stations: ", stationsData)
  //       // stationsData => setStations(stationsData)
  //     );
  // } 

  // const fetchVehicles = () => {
  //   fetch('http://localhost:3000/vehicles', options)
  //     .then(res => res.json())
  //     .then(  //vehiclesData => console.log("Vehicles: ", vehiclesData)
  //       // vehiclesData => setVehicles(vehiclesData)
  //     )
  // }

  // const fetchEmployees = () => {
  //   fetch('http://localhost:3000/employees', options)
  //     .then(res => res.json())
  //     .then(  //employeesData => console.log("Employees: ", employeesData)
  //       // employeesData => setEmployees(employeesData)
  //     )
  // }

// console.log(stations)
console.log(user)


  return (
    // <AuthConsumer>
      <div className="App">
        <Nav user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/login' element={<Login user={user} setUser={setUser}/>} />
          <Route path='/logout' element={<Logout setUser={setUser}/>} />
        </Routes>
      </div>
    // </AuthConsumer>
  )
}

export default App
