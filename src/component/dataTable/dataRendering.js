import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./DataTable";

//retrieves data from API call, and sends as prop to DataTable to be rendered
export default function dataTable() {
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
    <div>
      <DataTable people={persons} />;
    </div>
  );
}
