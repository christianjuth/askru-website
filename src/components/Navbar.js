import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import { AppBar, Toolbar, Typography, InputBase, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { search } from '../redux/actions';
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  toolbar: {
    // borderBottomWidth: 1,
    // borderBottomStyle: 'solid',
    // borderColor: '#ccc'
  },
  grow: {
    flexGrow: 1
  },
  title: {
    fontWeight: 400
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.05),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.08)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7)
  }
}));

function Navbar(props) {
  const classes = useStyles();

  function onSearch(e) {
    if(props.history.location.pathname !== '/')
      props.history.push('/');
    props.dispatch(search({
      query: e.target.value
    }));
  }

  return (<div className={classes.grow}>
    <AppBar position="fixed" elevation={0} className={classes.toolbar}>
      <Grid container="container" direction="row" justify="center" alignItems="center">
        <Grid item="item" xs={12} md={8}>
          <Toolbar disableGutters={true}>
            <Link to='/' className='fake-link'>
              <Typography variant="h6" className={classes.title} noWrap="noWrap">
                Ask<b>RU</b>
              </Typography>
            </Link>
            <div className={classes.grow}/>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                placeholder="Search…"
                value={props.search}
                onChange={onSearch}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }} inputProps={{
                  'aria-label' : 'search'
                }}/>
            </div>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  </div>);
}

const mapStateToProps = state => {
  return ({
    search: state.search,
  });
};


export default connect(mapStateToProps)(withRouter(Navbar));
