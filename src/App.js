import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import CheckOut from "./Component/CheckOut";
import LogIn from "./Component/LogIn"
import "./App.css";
import {useStateValue} from "./StateProvider";
import {auth} from "../src/Component/Firebase"

function App() {

  const [{user}, dispatch] = useStateValue();
 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
     if(authUser){
       //user will login..
       dispatch({
         type:"SET_USER",
         user:authUser
       })
     }else{
      dispatch({
        type:"SET_USER",
        user:null
      })
     }
   })
   return () => {
     unsubscribe();
   }
 }, []);

 console.log("user is login", user);


  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Header />
          <CheckOut />
        </Route>
        <Route path="/login">
          <LogIn/>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
