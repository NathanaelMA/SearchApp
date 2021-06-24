import React, { Component } from 'react';
import "./Search.css"
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

class Search extends Component {

    state = {}

    render() {
        return (
            <div>
                <div className="searchSection">
                    <form className="search" noValidate autoComplete="off">
                        <TextField id="search-field" label="Search User/City" placeholder="Jane Doe"/>
                    </form>
                    <IconButton aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </div>
                
            </div>
        )

    }
    
}

export default Search;
