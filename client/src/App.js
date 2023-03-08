import React from 'react';
import { useEffect, useState} from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import RegistrationForm from './components/RegistrationForm';
import UserProfile from './components/UserProfile';



const App = () => {
  const [user, setUser] = useState('');
  const [errors, setErrors] = useState([]);

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

  // const handleLogout = () => {
  //   fetch('/logout', {
  //     method: 'DELETE'
  //   })
  //     .then(setUser());
  // }

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
        <Header />
        <Nav user={user} setUser={setUser} />

        <Routes>
          <Route path='/' element={<Home user={user}/> } />
          <Route path='/login' element={<Login user={user} setUser={setUser}/>} />
          <Route path='/logout' element={<Logout setUser={setUser}/>} />
          <Route path='/register' element={<RegistrationForm user={user} setUser={setUser} errors={errors} setErrors={setErrors}/>} />
          <Route path='/users/:id' element={<UserProfile user={user}/>} />
          {/* <Route path='/users/:id/edit' element={<EditUserProfile />} /> */}
        </Routes>
      </div>
    // </AuthConsumer>
  )
}

export default App;