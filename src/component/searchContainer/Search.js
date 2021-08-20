// import React, { useState } from "react";
// import "./Search.css";

// //Text Field and Search for Search Bar and Input Field
// import TextField from "@material-ui/core/TextField";
// import SearchIcon from "@material-ui/icons/Search";
// import IconButton from "@material-ui/core/IconButton";

// //These imports to have a radio button
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import Radio from "@material-ui/core/Radio";

// //get menu item from Material UI
// import SortByMenu from "./SortByMenu";

// export default function Search() {
//   const [userInput, setUserInput] = useState([]);

//   return (
//     <div className="search-container">
//       <div className="search-elements">
//         <div className="selectSearch">
//           <FormControl component="fieldset">
//             <FormLabel component="legend">Search By</FormLabel>
//             <RadioGroup>
//               {/*commented this out for future use of radio implementation}
//                                 {/* value={value} onChange={handleChange} */}
//               <FormControlLabel value="name" control={<Radio />} label="Name" />
//               <FormControlLabel value="city" control={<Radio />} label="City" />
//             </RadioGroup>
//           </FormControl>
//         </div>
//         <div className="searchBar">
//           <form className="search" noValidate autoComplete="off">
//             <TextField
//               id="search-field"
//               label="Search User/City"
//               placeholder="Jane Doe, Tokyo, etc"
//               onChange={(e) => setUserInput(e.target.value)}
//               onKeyDown={this.handleKeyDown}
//             />
//           </form>
//           <IconButton aria-label="search" onClick={() => handleText(userInput)}>
//             <SearchIcon />
//           </IconButton>
//         </div>
//       </div>
//       <div className="updateSearch">
//         <div className="sort-by">
//           <SortByMenu />
//         </div>
//       </div>
//     </div>
//   );

//   function handleText(text) {
//     return console.log(text);
//   }
// }
