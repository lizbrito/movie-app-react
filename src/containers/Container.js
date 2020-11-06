import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MoviesContainer from './MoviesContainer';
import SearchOption from './SearchOption';
import TVContainer from './TVContainer';


function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({

  wrapper: {
    'border': '1px solid black',
    'width': '100%'   
  },

  tabPanel:{
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'padding': '30px 0'
  }
}));

const Container = props => {

  const types = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={types.wrapper}>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary" textColor="primary" variant="fullWidth">
          <Tab label="MOVIES" {...a11yProps(0)} onClick={props.fetchMovies}/>
          <Tab label="SEARCH RESULTS" {...a11yProps(1)} />
          <Tab label="TV SHOWS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} className={types.tabPanel}>
        <MoviesContainer 
          movieCategory={props.movieCategory} 
          onMovieCategoryChange={props.onMovieCategoryChange} 
          fetchMovies={props.fetchMovies} 
          movies={props.movies} />
      </TabPanel>

      <TabPanel value={value} index={1} className={types.TabPanel}>
        <SearchOption 
          movieName={props.movieName}
          results={props.results} />
      </TabPanel>

      <TabPanel value={value} index={2} className={types.TabPanel}>
        <TVContainer 
          tvCategory={props.tvCategory} 
          onTvCategoryChange={props.onTvCategoryChange} 
          fetchTv={props.fetchTv} 
          tv={props.tv}/>
      </TabPanel>
    </div>
  );
}

export default Container