import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import Payment from './Payment';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HPxrnJLmFo3I5OXhx4upv8LfxhXYnxdDHzz9gq1oVRGQRMeAwhYxtT9c9xGs4UqDQ1W0laKQubOGzcatjtBibwg00UstFbxXU');


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //solo correra cuando el componente cargue...
    auth.onAuthStateChanged(authUser => {
      console.log('El usuario es >>>', authUser);
      if (authUser) {
        //el usuario ingresó
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  return (
    //BEM
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
          <Header />
            <Orders />
          
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

          </Route>
          {/* Header */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
