import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button  from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(() => ({

  dropdown: {
    'width': '20%',
    'margin-left': '.75rem',
    'margin-right': '.75rem',
    'textAlign': 'center'
  },

  wrapper: {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'margin': '4.5rem',
  },

  searchInput: {
    'width': '45%',    
  },  

}));

const SearchForm = props =>{
  const types = useStyles();
  
  return(
    <form className={types.wrapper} onSubmit={props.onSubmit}>
      <TextField 
        className={types.searchInput}
        margin='normal'
        name='title'
        type='search'
        variant='outlined'
        label="Search"
        onChange={e => props.onInputChange(e.target.value)}
      /> 

      <TextField
        className={types.dropdown}
        select
        margin='normal'
        label="Search Type"
        variant="outlined"
        defaultValue="multi"
        onChange={e => props.onCategoryChange(e.target.value)}
      >
        <MenuItem key='1' value='movie'>movie</MenuItem>
        <MenuItem key='2' value='multi'>multi</MenuItem>
        <MenuItem key='3' value='tv'>tv</MenuItem>
      </TextField>
      
      <Button 
        color='primary'
        type='submit'
        variant='contained'
      >
        SEARCH
      </Button>
    </form>
  )
}

export default SearchForm;