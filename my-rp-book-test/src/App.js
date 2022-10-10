import React, { useState } from 'react';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

// import './App.css';
import { StyledContainer } from './components/Styles';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// auth and redux
import AuthRoute from './components/AuthRoute';
import BasicRoute from './components/BasicRoute';
import {connect} from 'react-redux';

function App() {
  return (
    <Router>

      {checked &&
      <StyledContainer>
        <Switch>
          <BasicRoute path='/Signup'>
            <Signup />
            </BasicRoute>
            <BasicRoute path='/Login'>
            <Login />
          </BasicRoute>
          <AuthRoute path='/Dashboard'>
            <Dashboard />
          </AuthRoute>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </StyledContainer>
      }
    </Router>
  )
}
const mapStateToProps = ({session}) => ({
  checked: session.checked
})

export default connect(mapStateToProps)(App);

// function App() {
//   const adminUser = {
//     name: "",
//     username: "admin",
//     password: "admin123"
//   }

//   const [user, setUser] = useState({name: "", username: ""});
//   const [error, setError] = useState("");

//   const Login = details => {
//     console.log(details);

//     if (details.username == adminUser.username && details.password == adminUser.password){
//     console.log("Logged in");
//     setUser({
//       name: details.name,
//       username: details.username
//     });
//   } else {
//     console.log("Details do not match");
//     setError("Details do not match")
//   }
// }  

//   const Logout = () => {
//     setUser({ name:"", username: ""})
//   }

//   return (
//     <div className="App">
//      {(user.username != "") ? (
//       <div className="welcome">
//         <h2>Welcome, <span>{user.name}</span></h2>
//         <button onClick={Logout}>Logout</button>
//       </div>
//      ) : (
//       <LoginForm Login={Login} error={error} />
//      )} 
//     </div>
//   );
// }

// export default App;
