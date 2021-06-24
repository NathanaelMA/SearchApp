import React, { Component } from 'react';
import "./Search.css"
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';


class Search extends Component {

    state = {}

    render() {
        return (
            <div className="searchItems">
                <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Search By</FormLabel>
                    <RadioGroup> 
                        {/* value={value} onChange={handleChange} */}
                        <FormControlLabel value="name" control={<Radio />} label="Name" />
                        <FormControlLabel value="city" control={<Radio />} label="City" />
                    </RadioGroup>
                </FormControl>
                </div>
                <div className="searchBar">
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
