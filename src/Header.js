import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  button: {
    color:'lightGreen',
  },
};

const SellLink = props => <Link to="/selling" {...props} />;
const ShowLink = props => <Link to="/showing" {...props} />;
const WillLink = props => <Link to="/willshow" {...props} />;

class Header extends Component{
  
  render(){
    const { classes } =this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar>
            <img src={logo} alt='logo' width='50px'/>
            <Button  className={classes.button} component={SellLink}>
              正在售票
            </Button>
            <Button  className={classes.button} component={ShowLink}>
              正在热映
            </Button>
            <Button  className={classes.button} component={WillLink}>
              即将上映
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
