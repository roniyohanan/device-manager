import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Devices() {
  const [devices, setDevices] = useState([]);

  const getAllData = async () => {
    try {
      const response = (await axios.get('http://localhost:3003/devices')).data;
      setDevices(response);
    } catch (e) {
      console.error(e);
    } 
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getAllData()
    }, 5000);
    return () => clearInterval(interval);
    }, [])

  return (
    <div>
      {devices.map((device)=>{
        return <div key={device.productId}>{device.productId}</div>
      })}
    </div>
  )
}