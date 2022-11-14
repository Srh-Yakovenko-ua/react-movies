import React from 'react';
import {Movies} from '../components/Movies';
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';


const API_KEY = '1fb2c4bd'

class Main extends React.Component {
    state = {
        movies: [],
        isLoading: true
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, isLoading: false}))
            .catch((err) => {
                console.log(err)
                this.setState({isLoading : false})
            })
    }


    updateSearchMovies = (search, type = 'all') => {
        this.setState({isLoading: true})
        if (search === '') {
            return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix${type !== 'all' ?
                `&type=${type}` : ''}`)
                .then(response => response.json())
                .then(data => this.setState({movies: data.Search, isLoading: false}))
        }

        return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all' ?
            `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, isLoading: false}))
    }


    render() {
        const {movies, isLoading} = this.state
        return (
            <main className="container content">
                <Search updateSearchMovies={this.updateSearchMovies}/>
                {isLoading ? <Preloader/> : <Movies movies={movies}/>}
            </main>
        );
    }
}

export {Main};