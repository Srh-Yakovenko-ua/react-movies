import React, {useState} from 'react';
import {FilterMovies} from './FilterMovies';

const Search = (props) => {
    const {
        updateSearchMovies = Function.prototype
    } = props
    const [valueSearch, setValueSearch] = useState('')
    const [type, setType] = useState('all')


    const onChangeStateSearch = (e) => {
        const value = e.currentTarget.value
        setValueSearch(value)
    }

    const onKeyUpChangeSearch = (e) => {
        if (e.key === 'Enter') updateSearchMovies(valueSearch, type)
    }

    const searchClickHandler = () => updateSearchMovies(valueSearch, type)

    const handleFilterType = (e) => {
        const type = e.currentTarget.dataset.type
        setType(type)
        updateSearchMovies(valueSearch, type)
    }


    return (
        <div className="row">
            <div className="input-field ">
                <input id="email_inline"
                       type="search"
                       className="validate"
                       placeholder={'search'}
                       value={valueSearch}
                       onChange={onChangeStateSearch}
                       onKeyUp={onKeyUpChangeSearch}
                />
                <button className=" waves-effect waves-light btn search-btn"
                        onClick={searchClickHandler}>search
                </button>
                <FilterMovies type={type} handleFilterType={handleFilterType}/>
            </div>
        </div>


    );

}

export {Search}


