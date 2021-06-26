import Header from "./component/header";
import "./App.css";
import Search from "./component/searchContainer/Search.js";
import DataTable from "./component/dataTable/DataTable.js";

function App() {
    return (
        <div className="App">
            <Header />
            <Search />
            <DataTable />
        </div>
    );
}

export default App;
