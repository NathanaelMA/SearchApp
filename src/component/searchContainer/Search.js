import React, { Component } from 'react';

class Search extends Component {

    state = {}

    render() {
        return (
            <div>
                <h1 className="title">Welcome to the user search platform</h1>
                <input name="text" type="text" placeholder="Search" />
                <button>Search</button>
            </div>
        )

    }
    
}

export default Search;
