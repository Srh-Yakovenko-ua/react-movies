import React from 'react';
import {FilterMovies} from './FilterMovies';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }


    onChangeStateSearch = (e) => this.setState({search: e.currentTarget.value})

    onKeyUpChangeSearch = (e) => {
        if (e.key === 'Enter') this.props.updateSearchMovies(this.state.search, this.state.type)
    }
    searchClickHandler = () => {
        this.props.updateSearchMovies(this.state.search, this.state.type)
    }
    handleFilterType = (type) => {
        this.setState(() => ({type: type}), () => {
            this.props.updateSearchMovies(this.state.search, type)
        })

    }


    render() {
        const {search} = this.state
        return (
            <div className="row">
                <div className="input-field ">
                    <input id="email_inline"
                           type="search"
                           className="validate"
                           placeholder={'search'}
                           value={search}
                           onChange={this.onChangeStateSearch}
                           onKeyUp={this.onKeyUpChangeSearch}
                    />
                    <button className=" waves-effect waves-light btn search-btn"
                            onClick={this.searchClickHandler}>search
                    </button>
                    <FilterMovies type={this.state.type} handleFilterType={this.handleFilterType}/>
                </div>
            </div>


        );
    }
}

export {Search}


