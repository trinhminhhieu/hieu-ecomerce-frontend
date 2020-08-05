import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './auth';

const Login = ({ isAuthenticated , logout }) => (
        <div>
        <h1>homeeee page</h1>
        { isAuthenticated ? (
          <button onClick={() => logout()}>Logout</button> 
          ) : ( 
            <div>
            <Link to="/loginpage" >Đăng nhập</Link>
          </div>
           )}
        or
         <Link to="/register">
          <p >Đăng ký</p>
          </Link>
        
        </div>
      );
    

Login.propTypes = {
   isAuthenticated: PropTypes.bool.isRequired,
   logout: PropTypes.func.isRequired
};

 function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
    };
 }

export default connect(mapStateToProps, { logout: logout })(Login);