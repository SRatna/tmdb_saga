/**
 * Created by sushanta on 2/5/18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logoutUser } from '../actions';
import { Container, Menu } from 'semantic-ui-react';

let Header = ({ onLogoutBtnClick }) => {
  return (
    <Menu fixed='top' inverted style={{padding: '4px', backgroundColor: 'rgb(42, 167, 202)'}}>
      <Container>
        <Menu.Item header>
          <Link to='/'>TheMovieDB</Link>
        </Menu.Item>
        <Menu.Item><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item><Link to='/about-us'>About Us</Link></Menu.Item>
        {/*<Menu.Menu position='right'>*/}
          {/*<Menu.Item name='logout' onClick={() => onLogoutBtnClick()} />*/}
        {/*</Menu.Menu>*/}
      </Container>
    </Menu>
  );
};
const mapDispatchToProps = {
  onLogoutBtnClick: logoutUser
};
export default withRouter(connect(null, mapDispatchToProps)(Header));