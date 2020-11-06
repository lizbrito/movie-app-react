import React from 'react';

import {makeStyles} from '@material-ui/core/styles'

import MovieCard from './MovieCard'

const getStyles = makeStyles(theme => ({

  root: {
    'margin': '2rem'
  }
}))

const Movies = props => {

  const types = getStyles()

  console.log(props.results)

  return (
    <div className="container">
      <div container className={types.root} spacing={5}>
        {
          props.results.map(
            movie => {
              const {id, title, name, release_date, popularity, overview, poster_path} = movie
              return (
                <div>
                  <MovieCard 
                    key={id}
                    id={id}
                    title={title || name}
                    release_date={release_date}
                    popularity={popularity}
                    overview={overview}
                    poster_path={poster_path}
                  />
                </div>
              )
            }
          )
        }
      </div>
    </div>
  )
}
export default Movies