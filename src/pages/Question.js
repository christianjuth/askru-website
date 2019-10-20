import React, { useEffect, useState, Fragment } from 'react';
import {Card, CardContent, Typography, IconButton} from '@material-ui/core';
import {ArrowUpward, ArrowDownward} from '@material-ui/icons';
import { connect } from 'react-redux';

function Home(props) {

  const [question, setQuestion] = useState();

  useEffect(() => {
    global.axios.get('/questions/oneById', {
      params: {
        _id: props.match.params.id
      }
    })
    .then((result) => {
      setQuestion(result.data.question);
    })
  }, [props.match.params.id]);

  if(!question) return <div></div>;

  return (
    <Fragment>
      <Card elevation={0}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom="gutterBottom">
            {question.title}
          </Typography>
          <Typography color="textSecondary">
            {question.body}
          </Typography>
        </CardContent>
      </Card>
      {question.advice.map(a => (
        <Fragment>
          <br/>
          <Card elevation={0}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom="gutterBottom">
                {question.body}
              </Typography>
              <IconButton size="small">
                <ArrowUpward fontSize="inherit" />
              </IconButton>
              <IconButton size="small">
                <ArrowDownward fontSize="inherit" />
              </IconButton>
            </CardContent>
          </Card>
        </Fragment>
      ))}
    </Fragment>
  );
}

const mapStateToProps = state => {
  return ({
    searchResults: state.searchResults,
  });
};


export default connect(mapStateToProps)(Home);
