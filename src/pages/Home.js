import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import {Card, CardContent, Typography} from '@material-ui/core';
import { connect } from 'react-redux';

function Home(props) {
  return (<div>
    <Grid container="container" direction="row" justify="center" alignItems="center">
      <Grid item="item" xs={12} md={8}>
        {
          props.searchResults.map((r) => {
            return (
              <Fragment>
                <Card >
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom="gutterBottom">
                      {r.title}
                    </Typography>
                    <Typography color="textSecondary">
                      {r.body}
                    </Typography>
                  </CardContent>
                </Card>
                <br/>
              </Fragment>
            );
          })
        }
      </Grid>
    </Grid>
  </div>);
}

const mapStateToProps = state => {
  return ({
    searchResults: state.searchResults,
  });
};


export default connect(mapStateToProps)(Home);
