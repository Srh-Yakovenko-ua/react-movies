import React, {useEffect, useState} from 'react';
import {Movies} from '../components/Movies';
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';


const API_KEY = '1fb2c4bd'



export const Main = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, isSetLoading] = useState(false)


    const updateSearchMovies = (search, type = 'all') => {
        isSetLoading(true)
        if (search === '') {
            return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix${type !== 'all' ?
                `&type=${type}` : ''}`)
                .then(response => response.json())
                .then(data => {
                    setMovies(data.Search)
                    isSetLoading(false)
                })
        }

        return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all' ?
            `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
                isSetLoading(false)
            })
    }


    useEffect(() => {
        isSetLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
                isSetLoading(false)
            })
            .catch((err) => {
                console.log(err)
                isSetLoading(false)
            })
    }, [])

    return (
        <main className="container content">
            <Search updateSearchMovies={updateSearchMovies}/>
            {isLoading ? <Preloader/> : <Movies movies={movies}/>}
        </main>
    );
}


// class Main extends React.Component {
//     state = {
//         movies: [],
//         isLoading: true
//     }
//
//     componentDidMount() {
//         fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
//             .then(response => response.json())
//             .then(data => this.setState({movies: data.Search, isLoading: false}))
//             .catch((err) => {
//
//                 this.setState({isLoading : false})
//             })
//     }
//
//
//     updateSearchMovies = (search, type = 'all') => {
//         this.setState({isLoading: true})
//         if (search === '') {
//             return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix${type !== 'all' ?
//                 `&type=${type}` : ''}`)
//                 .then(response => response.json())
//                 .then(data => this.setState({movies: data.Search, isLoading: false}))
//         }
//
//         return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all' ?
//             `&type=${type}` : ''}`)
//             .then(response => response.json())
//             .then(data => this.setState({movies: data.Search, isLoading: false}))
//     }
//
//
//     render() {
//         const {movies, isLoading} = this.state
//         return (
//             <main className="container content">
//                 <Search updateSearchMovies={this.updateSearchMovies}/>
//                 {isLoading ? <Preloader/> : <Movies movies={movies}/>}
//             </main>
//         );
//     }
// }
//
// export {Main};