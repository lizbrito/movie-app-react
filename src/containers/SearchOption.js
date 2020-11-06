import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Movies from '../components/Movies';

const useStyles = makeStyles((theme) => ({
  tabPanel:{
    'margin': '0',
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center' 
  }
}));

const SearchOption = (props) => {

  const options = useStyles();

  if(props.results === false) {
    return (
      <div className={options.tabPanel}>
        <h2> Please initiate a search </h2>
      </div>
    )
  }else if(props.movieName && props.results === false) {
    return (
      <div className={options.tabPanel}>
        <h2> Please enter a search </h2>
      </div>
    )
  }else if(props.results.length > 0) {
    return(
      <div className={options.tabPanel}>
        <Movies results={props.results} />
      </div>
    )
  }else if(props.results === true) {
    return (
      <div className={options.tabPanel}>
        <h2> Sorry, there were no results </h2>
      </div>
    )
  }
}

export default SearchOption;