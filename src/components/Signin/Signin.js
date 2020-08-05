import React from 'react';
import PropTypes from 'prop-types';
import {Button,  Form, Message} from 'semantic-ui-react';
import Validator from 'validator';
import ThongBaoLoi from "../Signin/ThongBaoLoi";


class Signin extends React.Component {
 
 state = {
   data: {
    email: "",
    password: ""
   },
    loading: false,
    errors: {}
 };

 onChange = e => 
 this.setState({
  data: {...this.state.data, [e.target.name]: e.target.value}
});

 onSubmit = () => {
   const errors = this.validate(this.state.data);
   this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
      .submit(this.state.data)
      .catch(err =>
       this.setState({ errors: err.response.data.errors, loading: false })
       );
   //promise
    }
 };
 validate = (data) => {
  const errors = {};
  if (!Validator.isEmail(data.email)) errors.email = "Email không hợp lệ";
  if(!data.password) errors.password = "Không để trống";
  return errors;
 };

  render() {
    const { data, errors, loading } = this.state;
    
    return (
   
              <Form onSubmit={this.onSubmit} loading={loading}>
              { errors.global && (
                <Message negative>
                <Message.Header>Đã xảy ra lỗi.Vui lòng thử lại</Message.Header>
                         <p>{errors.global}</p>
                </Message>
              )}
            <Form.Field error={!!errors.email}>
                <label htmlFor="email-address">Email* :</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  value={data.email}
                 onChange={this.onChange}
                />
                {errors.email && <ThongBaoLoi text={errors.email}/>}
              </Form.Field>
              <Form.Field error={!!errors.password}>
                <label htmlFor="password">Password* :</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={data.password}
                 onChange={this.onChange}
                 
                />
                {errors.password && <ThongBaoLoi text={errors.password}/>}
              </Form.Field>
            {/*Link to="/trang" */}
          {/*className=" pa2 mt3 b ph3 pv2 input-reset ba b--black bg-blue grow pointer f6 dib " */}
            <Button primary>
             Sign in
             </Button>
       </Form>
            
    );
  }
}

Signin.propTypes = {
  submit: PropTypes.func.isRequired
};

export default Signin;