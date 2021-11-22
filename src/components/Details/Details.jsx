import { useEffect,useState } from "react";
import createRequest from '../../api/createRequest';


function Details(props) {
  const [isLoading, setLoader] = useState(true);
  const [currentUser, setUser] = useState(null); 
 
  useEffect(() => {
      setLoader(true)
      createRequest(`${props.id}.json`)().then(data=>{
          setUser(data)
          setLoader(false)  
      });                
      return;
  },[props.id])
console.log(currentUser);
  return  (isLoading) ? 
                    (<div className='Loading'>Loading</div>) :
                    (
                    <div className="card" style={{width: '18rem'}}>
                    <img src={currentUser.avatar} className="card-img-top" alt={currentUser.name}/>
        <div className="card-body">
          <h5 className="card-title">{currentUser.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">City: {currentUser.details.city}</li>
          <li className="list-group-item">Company: {currentUser.details.company}</li>
          <li className="list-group-item">Position: {currentUser.details.position}</li>
        </ul>
      </div>
                  );
};
export default Details;