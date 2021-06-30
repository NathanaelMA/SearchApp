import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

//These imports to have a radio button
import React, { useState, useEffect } from "react";
import "./DataTable.css";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import DeleteIcon from "@material-ui/icons/Delete";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ImportExport } from "@material-ui/icons";
import SyncIcon from "@material-ui/icons/Sync";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

var revCity = false;
var revName = false;

export default function DataTable(props) {
  const classes = useStyles();

  const [persons, setPerson] = useState([]);

  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    componentDidMount();
  }, []);

  const componentDidMount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setPerson(res.data);
    });
  };

  return (
    <span>
      {/* resets data table */}
      <IconButton
        id="refresh"
        aria-label="refresh"
        onClick={function refresh() {
          axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => {
              setPerson(res.data);
            });
        }}
      >
        <SyncIcon />
      </IconButton>
      {/* code from search js begins here */}
      <div className="search-container">
        <div className="search-elements">
          {/* <div className="selectSearch">
            <FormControl component="fieldset">
              <FormLabel component="legend">Search By</FormLabel>
              <RadioGroup>
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
          </div> */}
          <div className="searchBar">
            <form className="search" noValidate autoComplete="off">
              <TextField
                id="search-field"
                label="Search User/City"
                placeholder="Jane Doe, Tokyo, etc"
                onChange={(e) => setUserInput(e.target.value)}
              />
            </form>
            <IconButton
              aria-label="search"
              onClick={() => handleText(userInput)}
            >
              <SearchIcon />
            </IconButton>
          </div>
        </div>
      </div>
      {/* code from search.js ends here */}
      <div className="data-table-container">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                  <IconButton id="sortName" onClick={() => sort("Name")}>
                    <ImportExport id="upArrowName" />
                  </IconButton>
                </TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone Number</TableCell>
                <TableCell align="right">
                  City
                  <IconButton id="sortCity" onClick={() => sort("City")}>
                    <ImportExport id="upArrowCity" />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {persons.map((person) => (
                <TableRow key={person.name}>
                  <TableCell component="th" scope="row">
                    {person.name}
                  </TableCell>
                  <TableCell align="right">{person.email}</TableCell>
                  <TableCell align="right">{person.phone}</TableCell>
                  <TableCell align="right">{person.address.city}</TableCell>
                  <IconButton id="delete" onClick={() => deletePerson(person)}>
                    <DeleteIcon />
                  </IconButton>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </span>
  );

  function deletePerson(person) {
    setPerson(persons.filter((item) => item !== person));
  }

  // search for name or city based on argument value
  function handleText(text) {
    const arr = [];
    persons.map((person) => {
      if (person.name.toLowerCase().includes(text.toLowerCase()))
        arr.push(person);
      else if (person.address.city.toLowerCase().includes(text.toLowerCase()))
        arr.push(person);
    });
    setPerson(arr);
  }

  function sort(criteria) {
    if (criteria === "Name") {
      if (!revName) {
        persons.sort((a, b) =>
          a.name > b.name
            ? 1
            : a.name === b.name
            ? a.address.city > b.address.city
              ? 1
              : a.address.city === b.address.city
              ? a.email > b.email
                ? 1
                : -1
              : -1
            : -1
        );
        revName = true;
      } else {
        persons.sort((a, b) =>
          b.name > a.name
            ? 1
            : b.name === a.name
            ? b.address.city > a.address.city
              ? 1
              : b.address.city === a.address.city
              ? b.email < a.email
                ? 1
                : -1
              : -1
            : -1
        );
        revName = false;
      }
    } else if (criteria === "City") {
      if (!revCity) {
        persons.sort((a, b) =>
          a.address.city > b.address.city
            ? 1
            : a.address.city === b.address.city
            ? a.name > b.name
              ? 1
              : a.name === b.name
              ? a.email > b.email
                ? 1
                : -1
              : -1
            : -1
        );
        revCity = true;
      } else {
        persons.sort((a, b) =>
          b.address.city > a.address.city
            ? 1
            : b.address.city === a.address.city
            ? b.name > a.name
              ? 1
              : b.name === a.name
              ? b.email < a.email
                ? 1
                : -1
              : -1
            : -1
        );
        revCity = false;
      }
    }
    setPerson(persons.filter((item) => item !== ""));
  }
}
