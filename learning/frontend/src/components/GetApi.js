import React, { useState, useEffect } from 'react';
 
const GetApi= () => {
  const [userData, setUserData] = useState([]);
  const [deleted, setDeleted] = useState(false);
  



  useEffect(() => {
    
    const fetchData = async () => {
      try {
    
    const resp = await fetch('http://localhost:4000/api/getregister')
    const data = await resp.json();
    console.log(data.data);
    setUserData(data.data);
    
    }
    catch{
        console.log("error occured")
    }
   
    };

    fetchData();
    
  }, []);

  const handleDelete = async (id) => {
    //const id = "65aa64a24bfa90b2e136a6b8"; // Replace with the actual ID or use props to get it from the parent component
    try {
      const response = await fetch(`http://localhost:4000/api/deleteregister/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
       
      });

      if (response.ok) {
        // Successful deletion
        setDeleted(true);
      } else {
        // Handle error scenarios
        console.error('Error deleting data:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting data:', error.message);
    }
  }


 
  
   
  


  return (
    <div>
      <h2>User Data</h2>
    
        {userData.map((user,index)=> (
             <>
         
          <div className="card" style={{ width: "15rem" }}>
            <div className="card-body">
            <div class="row"> 
            <div class="col"> 
              <h5>{user.name}</h5>
              <p>{user.email}</p>
              <a>{user.age}</a>
             <button onClick={()=>handleDelete(user._id)}>Delete Data</button>
             {deleted && <p>Data deleted successfully!</p>}

        
            </div>
          </div>
          </div>
          </div>
          </>
          
        )) }
     
    </div>
  );
};

export default GetApi;
