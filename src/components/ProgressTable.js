import React,{useState,useEffect} from 'react';
import Axios from 'axios';

function ProgressTable() {

    const [data,setData] = useState([]);

    useEffect(()=>{
      Axios.get("https://mern-fitness-tracker-cm2022.herokuapp.com/getusers").then((response)=>{
        setData(response.data);
      });
    },[])

    const arr=data.map((data)=>{
        return(
          <tbody>
            <tr key={data.date} className="border-2 border-blue-700">
              <td className="p-4 text-gray-600">{data.date}</td>
              <td className="p-4 text-gray-600">{data.hip}</td>
              <td className="p-4 text-gray-600">{data.waist}</td>
              <td className="p-4 text-gray-600">{data.umbilical}</td>
              <td className="p-4 text-gray-600">{data.arms}</td>
              <td className="p-4 text-gray-600">{data.torax}</td>
              <td className="p-4 text-gray-600">{data.leg}</td>
              <td className="p-4 text-gray-600">{data.weight}</td>
              <td className="p-4 text-gray-600">{data.bodyfat}%</td>
              <td><button className="border-2 bg-blue-700 text-slate-100 border-blue-700 px-3 py-1 rounded-md text-1xl hover:bg-blue-500 transition duration-300">edit</button></td>
              <td><button className="border-2 bg-red-600 text-slate-100 border-red-600 px-3 py-1 rounded-md text-1xl hover:bg-red-600 transition duration-300" 
              >Delete</button></td>
            </tr>
          </tbody>
          
        )
      })
  
  return (
    <div className="bg-white block justify-center mx-auto p-2 shadow-2xl rounded-md">
        <table className="text-slate text-sm justify-center mx-auto">
          <thead className="text-white border-2 border-blue-700 bg-blue-700">
            <tr>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Hip</th>
              <th className="p-4 text-left">Waist</th>
              <th className="p-4 text-left">Umbilical</th>
              <th className="p-4 text-left">Arms</th>
              <th className="p-4 text-left">Torax</th>
              <th className="p-4 text-left">Leg</th>
              <th className="p-4 text-left">Weight</th>
              <th className="p-4 text-left">Bodyfat</th>
              <th className="p-4 text-left">Edit</th>
              <th className="p-4 text-left">Delete</th>
            </tr>
          </thead>
          {arr}
        </table>
      </div>
  )
}

export default ProgressTable


