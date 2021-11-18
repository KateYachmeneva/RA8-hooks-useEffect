
import React from 'react';
import PropTypes from 'prop-types';
import Description from "./Description/Description";

const Details = ({userInfo}) => {
    if (!userInfo) {
      return null;
    }
    const descriptionLists = Object.entries(userInfo.details)
    .map(([key, value]) => (
      <Description
        key={value}
        desc={key}
        text={value}/>
    ))
    console.log(userInfo.details);
    return (
        <div className="card" style={{width: '18rem'}}>
          <img src={userInfo.avatar} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{userInfo.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            {descriptionLists}
          </ul>
    
        </div>
      );
    };
    
    Details.propTypes = {
      userInfo: PropTypes.object.isRequired
    }
    
    export default Details;