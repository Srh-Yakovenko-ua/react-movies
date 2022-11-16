import React from 'react';

const FilterMovies = (props) => {
    const {
        type,
        handleFilterType
    } = props

    const onChangeHandleFilterType = (type) => {
        handleFilterType(type)
    }


    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <p>
                <label>
                    <input className="with-gap"
                           name="type"
                           type="radio"
                           onChange={onChangeHandleFilterType}
                           data-type={'all'}
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
                           onChange={onChangeHandleFilterType}
                           data-type={'movie'}
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
                           onChange={onChangeHandleFilterType}
                           data-type={'series'}
                           checked={type === 'series'}
                    />
                    <span>Series Only</span>
                </label>
            </p>

        </div>
    );

}


export {FilterMovies};