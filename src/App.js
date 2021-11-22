import {useState,useEffect} from 'react';
import './App.css'
import Lists from "./components/Lists/Lists";
import Details from "./components/Details/Details";
import Loader from "./components/Loader/Loader";
import createRequest from './api/createRequest';

function App() {
  const [lists, setLists] = useState([]);
  const [loader, setLoader] = useState(false);
  const [currentUser,setCurrentUser] = useState(null);
 

useEffect(() => {
    setLoader(true);
    createRequest('users.json')()
    .then((data) => setLists(data))
         setLoader(false);
    
}, []);

const getIdHandler = (id,name) => {
  const user = {name: name, id: id};
  console.log(user.id);
  setCurrentUser(user);
};
  return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-4">
                  {<Lists lists={lists} getId={getIdHandler}/>}
        </div>
        <div className="col-8">
               {!Loader && <Loader/>}
               {currentUser && <Details {...currentUser}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
