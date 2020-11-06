import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const titleStyle = makeStyles((theme) => ({
  wrapper: {
    'width': '100%',
    'border': '4px solid black'
  },
  title: {
    'textAlign': 'center',
    'margin': '.75rem',
    'fontSize': '2.5rem'
  },
}));

const Header = () => {
  const types = titleStyle();

  return (
    <div className={types.wrapper}>
      <h1 className={types.title}>
        React Movies App
      </h1>
    </div>
  )
}

export default Header;