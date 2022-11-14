import React from 'react';

class FilterMovies extends React.Component {


    handleFilterType = (type) => {
        this.props.handleFilterType(type)
    }

    render() {
        const {type} = this.props

        return (
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <p>
                    <label>
                        <input className="with-gap"
                               name="type"
                               type="radio"
                               onChange={() => this.handleFilterType('all')}
                               checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input className="with-gap"
                               name="type"
                               type="radio"
                               onChange={() => this.handleFilterType('movie')}
                               checked={type === 'movie'}
                        />
                        <span>Movies Only</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input className="with-gap"
                               name="type"
                               type="radio"
                               onChange={() => this.handleFilterType('series')}
                               checked={type === 'series'}
                        />
                        <span>Series Only</span>
                    </label>
                </p>

            </div>
        );
    }
}

export {FilterMovies};