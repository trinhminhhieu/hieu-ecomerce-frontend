import React, { Component } from 'react';
import {Switch,Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Footer from './components/Footer';
import ChatWin from './components/ChatWin';
import Register from './components/Register/Register';
import LoginPage from './components/LoginPage';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserRoute from "./components/UserRoute";
import GuestRoute from "./components/GuestRoute";
import ThoitrangnuLink from "./components/ThoitrangnuLink";
import LaptopLink from "./components/LaptopLink";
import DetailsLaptop from "./components/DetailsLaptop";

class App extends Component {
 
  render() {
    return (
     
      <React.Fragment>
    {/*thanh menu*/}
        <Navbar/>
         <div>
           <Switch>
               <Route exact path="/" component={ProductList} />
               <Route exact  path="/details" component={Details} />
               <Route exact path="/detailslaptop" component={DetailsLaptop} />
                <Route exact  path="/cart" component={Cart} />
               <Route exact path="/login" component={Login} />
                <GuestRoute exact path="/loginpage" component={LoginPage} />
                <UserRoute exact path="/dashboard" component={Dashboard} />
                <Route exact  path="/register" component={Register} />
                <Route  path="/laptoplist" exact component={LaptopLink} />
                <Route  path="/thoitrangnu" exact component={ThoitrangnuLink} />
                 

                <Route exact component={Default} />
          
           </Switch>
      
     {/*phuong thuc gio thieu san pham*/}
          <Modal />
     {/*chan trang*/}
          <Footer />
          <ChatWin />
         </div>
      </React.Fragment>
    );
          
  }    
}

/*App.propTypes = {
      history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired,
      login: PropTypes.func.isRequired
};
*/
export default App;
