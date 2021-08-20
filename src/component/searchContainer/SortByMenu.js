// /* This file is only for the complex material UI implementation of the
// dropdown sortby function */

// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import LocationOnIcon from "@material-ui/icons/LocationOn";

// const StyledMenu = withStyles({
//   paper: {
//     border: "1px solid #d3d4d5",
//   },
// })((props) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "center",
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "center",
//     }}
//     {...props}
//   />
// ));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     "&:focus": {
//       backgroundColor: theme.palette.primary.main,
//       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);

// export default function SortByMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         aria-controls="sort-menu"
//         aria-haspopup="true"
//         variant="contained"
//         color="primary"
//         onClick={handleClick}
//       >
//         Sort By
//       </Button>
//       <StyledMenu
//         id="sort-by-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <StyledMenuItem>
//           <ListItemIcon>
//             <AccountCircleIcon fontSize="small" />
//           </ListItemIcon>
//           <ListItemText primary="Name" />
//         </StyledMenuItem>
//         <StyledMenuItem>
//           <ListItemIcon>
//             <LocationOnIcon fontSize="small" />
//           </ListItemIcon>
//           <ListItemText primary="City" />
//         </StyledMenuItem>
//       </StyledMenu>
//     </div>
//   );
// }
