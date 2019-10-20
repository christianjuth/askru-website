import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, Typography, Input,Button} from '@material-ui/core';
import { connect } from 'react-redux';
import { authenticate } from '../redux/actions';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontWeight: 400,
    textAlign: 'center'
  },

  fullWidth: {
    width: '100%'
  },

  card: {
    height: 300,
    width: 400,
    display: 'flex',
    alignItems: 'center'
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    width: '100%',
    justifyContent: 'space-between'
  }
}));

function Home(props) {
  const classes = useStyles();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    props.dispatch(authenticate({
      userName,
      password
    }));
  }

  useEffect(() => {
    login();
  }, []);

  return (
    <div className={classes.container}>
      <Card elevation={0} className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h4" className={classes.title} noWrap="noWrap">
            Ask<b>RU</b>
          </Typography>
          <Input
            className={classes.fullWidth}
            placeholder='username'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            className={classes.fullWidth}
            placeholder='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color='primary' onClick={login} className={classes.button}>
            Default
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    searchResults: state.searchResults,
  });
};


export default connect(mapStateToProps)(Home);
