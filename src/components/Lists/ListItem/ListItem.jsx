import React from "react";
import PropTypes from "prop-types";


const ListItem = ({id,name,getId}) => {
    return (
        <li className="list-group-item"
        style = {{cursor: "pointer"}}
        onClick = {() => getId(id,name)}>
            {name}
            </li>
    )
}
ListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    getId: PropTypes.func.isRequired,
  };
  
  export default ListItem;