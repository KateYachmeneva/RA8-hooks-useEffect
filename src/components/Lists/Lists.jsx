import React from 'react';
import PropTypes from 'prop-types';

import ListItem from "./ListItem/ListItem";

const Lists = ({lists, getId}) => {
    const liElements = lists.map(list => <ListItem key={list.id} id={list.id} name={list.name} getId={getId}/>)
    if (!lists.length) {
      return <p>Здесь пока ничего нет...</p>
    }

    return (
        <div className="card" style={{width: "18rem"}}>
          <ul className="list-group list-group-flush lists">
            {liElements}
          </ul>
        </div>
      );
    };
    
    Lists.propTypes = {
      lists: PropTypes.array.isRequired,
      getId: PropTypes.func.isRequired
    }
    
    export default Lists;