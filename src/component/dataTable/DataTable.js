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
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DataTable() {
  const classes = useStyles();

  const [persons, setPerson] = useState([]);

  useEffect(() => {
    componentDidMount();
  }, []);

  const componentDidMount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setPerson(res.data);
    });
  };

  return (
    <div className="data-table-container">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">City</TableCell>
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
  );

  function deletePerson(person) {
    setPerson(persons.filter((item) => item !== person));
  }
}
