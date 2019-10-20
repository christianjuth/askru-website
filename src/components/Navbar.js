import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, InputBase, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { search } from '../redux/actions';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
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
    props.dispatch(search({
      query: e.target.value
    }));
  }

  return (<div className={classes.grow}>
    <AppBar position="fixed">
      <Grid container="container" direction="row" justify="center" alignItems="center">
        <Grid item="item" xs={12} md={8}>
          <Toolbar disableGutters={true}>
            <Typography variant="h6" noWrap="noWrap">
              AskRU
            </Typography>
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


export default connect(mapStateToProps)(Navbar);
