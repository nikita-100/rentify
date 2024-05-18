import React from 'react';

import Login from './components/Login';
import Register from './components/Register';
import SellerDashboard from './components/SellerDashboard';
import BuyerDashboard from './components/BuyerDashboard';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';

const PrivateRoute=({components: Component,...rest}) => (
  <Route
  {...rest}
  render={(props)=>
    localStorage.getItem('user') ? (
      <Component {...props} />

    ) : (
      <Redirect to="/login" />
    )

  }
  />
);

function App() {
  return (
   <Router>
    
      <h1>Rentify</h1>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/seller' component={SellerDashboard} />
        <PrivateRoute path='/buyer' component={BuyerDashboard} />
        <Redirect from="/" to="/login" />
      </Switch>
    
   </Router>
  );
}

export default App;
