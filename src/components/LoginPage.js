import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login } from './auth';
import Signin from './Signin/Signin';
import styled from 'styled-components';

class LoginPage extends React.Component {
submit = data => 
this.props.login(data).then(() => this.props.history.push("/dashboard"));

   render() {
      return (
       <Natech>
       <div>
       <h1 >Dang nhap vao ho so</h1>
        <Signin submit={this.submit} />
        </div> 
        </Natech>
      );
    }
}
 LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
 };
const Natech = styled.div`
width: 600px;
height: 360px;
margin-top: 20px;
margin-left: 400px;

`;

export default connect(null, { login })(LoginPage);