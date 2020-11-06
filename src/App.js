import React, {Component} from 'react';

import SearchForm from './components/SearchForm';
import Header from './components/Header';
import Container from './containers/Container';

import {searchMovies, getMovies, getTv} from './services/api';

class App extends Component{
  state = {
    movieName: '',
    results: false,
    movies: [],
    tv: [],
    searchCategory: 'multi',
    movieCategory: 'now_playing',
    tvCategory: 'airing_today',
    isLoading: false
  }

  componentDidMount() {
    this.fetchMovies()
    this.fetchTv()
  }

  // Search
  handleInputChange = movieName => {
    console.log(this.state.movieName)
    this.setState({
      movieName
    })
  }

  handleCategoryChange = searchCategory => {
    console.log(this.state.searchCategory)
    this.setState({
      searchCategory
    })
  }

  searchMovies = e => {
    const {movieName, searchCategory} = this.state
    e.preventDefault()

    searchMovies(movieName, searchCategory).then( 
      results => {
        console.log(results)
      this.setState({
        results
        // isLoading: false
      })
    },
    error => {
      alert('Error', `Something went wrong! I amn sorry, try aagain. ${error}`)
    }
    )
  }

  // Fetch movies
  fetchMovies = e => {
    const {movieCategory} = this.state

    getMovies(movieCategory).then( 
      movies => {
      this.setState({
        movies,
        isLoading: false
      })
    },
    error => {
      alert('Error', `Something went wrong! I amn sorry, try aagain. ${error}`)
    }
    )
  }

  handleMovieCategoryChange = movieCategory => {
    this.setState({
      movieCategory
    })
  }

  // Fetch tv shows
  fetchTv = e => {
    const {tvCategory} = this.state

    getTv(tvCategory).then( 
      tv => {
        this.setState({
          tv,
          isLoading: false
        })
      },
      error => {
        alert('Error', `Something went wrong! ${error}`)
      }
    )
  }

  handleTvCategoryChange = tvCategory => {
    this.setState({
      tvCategory
    })
  }

  render(){
    const style={
      'margin': '1rem',
      'display': 'flex',
      'justifyContent': 'center'
    }

    const contentWidth={
      'maxWidth': '1200px',
      'width': '100%'
    }

    return (
      <div className='wrapper' style={style}>
        <div className='fullContent' style={contentWidth}>
          <Header />
          <SearchForm 
            onInputChange={this.handleInputChange} 
            onCategoryChange={this.handleCategoryChange} 
            onSubmit={this.searchMovies}/>
          <Container
            movieName={this.state.movieName}
            results={this.state.results}
            movies={this.state.movies}
            tv={this.state.tv}
            movieCategory={this.state.movieCategory}
            tvCategory={this.state.tvCategory}
            isLoading={this.state.isLoading}
            onMovieCategoryChange={this.handleMovieCategoryChange} 
            onTvCategoryChange={this.handleTvCategoryChange} 
            fetchMovies={this.fetchMovies}
            fetchTv={this.fetchTv}
            />
          </div>
      </div>
    );
  }
}

export default App;
