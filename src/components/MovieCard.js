import React from 'react'

import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {BASE_URL_IMAGE} from '../config/api_config'

const getStyles = makeStyles ({
  
  root:{
    'display': 'flex',
    'alignItems': 'center',
    'margin': '1.5rem 0',
    'height': '26rem',
  },

  media: {
    'height': '100%',
    'width': '25%',
    'display': 'flex',
    'flexDirection': 'column'
  },

  content: {
    'width': '75%',
  },
  
  title: {
    'text-align': 'center',
    'padding-bottom': '0'
  },

  info: {
    'margin-bottom': '1rem',
    'text-align': 'center'
  },

});

const MovieCard = props => {
  const types = getStyles()
  const { key, title, release_date, popularity, overview, poster_path } = props

  return (
    <Card key={key} className={types.root}>
        <CardMedia className={types.media} image={`${BASE_URL_IMAGE}${poster_path}`}/>
        <CardContent className={types.content}>
          <CardHeader title={title} className={types.title}/>
          <Typography component="p" color='textSecondary' className={types.info}>
              Release Date: {release_date} | Popularity: {popularity}
          </Typography>
          <Typography component="p" color='textSecondary'>
              {overview}
          </Typography>
        </CardContent>
    </Card>
  )
}

export default MovieCard