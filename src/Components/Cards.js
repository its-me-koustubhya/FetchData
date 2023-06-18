import React, { useEffect, useState } from 'react';
const Cards = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://dummyjson.com/users');
            const json = await response.json();
            setData(json.users);
          } 
          catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
        console.log(data);
  }, [])
  return (
    <div>
      {data ? (
        <ul style={{display:"flex",flexWrap:"wrap",columnGap:"20px",rowGap:"20px"}}>
          {data.map((item) => (
            <div class="card" style={{width: "18rem",border:"1px solid grey"}} key={item.id}>
            <img class="card-img-top" src={item.image} alt="Card cap" style={{width:"50%"}}/>
            <h2>{item.firstName} {item.lastName}</h2>
            <h3>Age: {item.age}</h3>
            <h3>Gender: {item.gender}</h3>
            <h3>Email: {item.email}</h3>
            <h3>Phone: {item.phone}</h3>
          </div>
          ))}
        </ul>
      ) :(
        <div>No data available</div>
        
      )}
    </div>
  )
}

export default Cards
