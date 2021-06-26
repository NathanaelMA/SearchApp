import React, { Component } from "react";
import "./Search.css";
import IconButton from "@material-ui/core/IconButton";

//Text Field and Search for Search Bar and Input Field
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

//These imports to have a radio button
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

//Sync icon to refresh pull data
import SyncIcon from "@material-ui/icons/Sync";

//get menu item from Material UI
import SortByMenu from "./SortByMenu";

class Search extends Component {
    state = {};

    render() {
        return (
            <div className="searchContainer">
                <div className="searchElements">
                    <div className="selectSearch">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Search By</FormLabel>
                            <RadioGroup>
                                {/*commented this out for future use of radio implementation}
                                {/* value={value} onChange={handleChange} */}
                                <FormControlLabel
                                    value="name"
                                    control={<Radio />}
                                    label="Name"
                                />
                                <FormControlLabel
                                    value="city"
                                    control={<Radio />}
                                    label="City"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="searchBar">
                        <form className="search" noValidate autoComplete="off">
                            <TextField
                                id="search-field"
                                label="Search User/City"
                                placeholder="Jane Doe, Tokyo, etc"
                            />
                        </form>
                        <IconButton aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="updateSearch">
                    <p id="refresh">refresh</p>
                    <IconButton aria-label="sync">
                        <SyncIcon />
                    </IconButton>
                </div>
                <div className="menu">
                    <SortByMenu />
                </div>
            </div>
        );
    }
}

export default Search;
