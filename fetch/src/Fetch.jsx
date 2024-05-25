import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Fetch.css'; 

function Fetch() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
 
  return (
    <div>
{
  data?.map((time,key)=>{
    return <div className='container'   >
      <div className='cards' >
      <div key ={time.id}>
      <img src={time.image} />
        {time.title}
      </div> 
      </div>
    </div>

  })
}

    </div>
  );
}

export default Fetch;
