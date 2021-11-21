import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import Description from "./Description/Description";
import Loader from "../Loader/Loader";



function Details (props) {
  const [isLoading, setLoader] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); 
   


useEffect(() => {
  console.log('high');
   setLoader(true);
   debugger;
  fetch(`${process.env.REACT_APP_BASE_URL}${props.id}.json`)
    .then((response) => response.json())
      .then((data) => {
           setCurrentUser(prevState => ({...prevState, ...data}));
           setLoader(false);
           console.log(data)}
      );
      return;      
}, [props.id]);



const descriptionLists = Object.entries(currentUser.details)
.map(([key, value]) => (
  <Description
    key={value}
    desc={key}
    text={value}/>
))
return                   (
                      <div className="card" style={{width: '18rem'}}>
                      <img src={currentUser.avatar} className="card-img-top" alt={currentUser.name}/>
          <div className="card-body">
            <h5 className="card-title">{currentUser.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            {descriptionLists}
          </ul>
    
        </div>
      );
    };
    
    Details.propTypes = {
    id: PropTypes.number.isRequired
    }
    
    export default Details;