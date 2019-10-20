import React, { Fragment } from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

function Home(props) {
  return (<Fragment>
    {props.searchResults.map((r) => (
      <Link className='fake-link' to={`/question/${r._id}`}>
        <Card elevation={0}>
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
      </Link>
    ))}
  </Fragment>);
}

const mapStateToProps = state => {
  return ({
    searchResults: state.searchResults,
  });
};


export default connect(mapStateToProps)(Home);
