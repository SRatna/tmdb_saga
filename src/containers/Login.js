/**
 * Created by sushanta on 2/2/18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { Redirect, withRouter } from 'react-router-dom';
import { Button, Input, Grid, Header, Message, Segment } from 'semantic-ui-react'

let Login = ({isAuthenticated, onLoginBtnClick, loginError}) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  let username, password;
  let handleUserNameChange = (e) => {
    username = e.target.value;
  };
  let handlePasswordChange = (e) => {
    password = e.target.value;
  };
  return (
    <div className='login-form'>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
          </Header>
          <Segment raised={true}>
            <Input fluid size='large' icon='user' iconPosition='left' placeholder='UserName'
                   onChange={handleUserNameChange} /><br/>
            <Input size='large' fluid icon='lock' iconPosition='left' placeholder='Password' type='password'
                   onChange={handlePasswordChange} /><br/>
            <Button color='teal' fluid size='large' onClick={() => onLoginBtnClick(username, password)}>Login</Button>
          </Segment>
          {loginError &&
          <Message negative>
            {loginError}
          </Message>}
        </Grid.Column>
      </Grid>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    loginError: state.login.loginError
  }
};
const mapDispatchToProps = {
  onLoginBtnClick: loginUser
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));