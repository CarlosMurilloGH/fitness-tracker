import React,{useState,useEffect} from 'react';
import Axios from 'axios';

function ProgressTable() {

    const [data,setData] = useState([]);

    useEffect(()=>{
      Axios.get("http://localhost:3001/getusers").then((response)=>{
        setData(response.data);
      });
    },[])

    const arr=data.map((data)=>{
        return(
          <tbody>
            <tr key={data.date} className="bg-stone-900">
              <td className="p-4 text-slate-100 font-semibold">{data.date}</td>
              <td className="p-4 text-slate-100 font-semibold">{data.hip}</td>
              <td className="p-4 text-slate-100 font-semibold">{data.waist}</td>
              <td className="p-4 text-slate-100 font-semibold">{data.umbilical}</td>
              <td className="p-4 text-slate-100 font-semibold">{data.arms}</td>
              <td className="p-4 text-slate-100 font-semibold">{data.torax}</td>
              <td className="p-4 text-slate-100 font-semibold">{data.leg}</td>
              <td className="p-4 text-slate-100 font-semibold">{data.weight}</td>
              <td className="p-4 text-slate-100 font-semibold">{data.bodyfat}%</td>
              <td><button className="border-2 bg-blue-700 text-slate-100 border-blue-700 px-3 py-1 rounded-md text-1xl font-medium hover:bg-blue-500 transition duration-300">edit</button></td>
              <td><button className="border-2 bg-red-600 text-slate-100 border-red-600 px-3 py-1 rounded-md text-1xl font-medium hover:bg-red-600 transition duration-300" 
              >Delete</button></td>
            </tr>
          </tbody>
          
        )
      })
  
  return (
    <div className="usersDisplay w-1/2">
        <table className="table text-slate border-separate text-sm justify-center m-auto">
          <thead className="bg-stone-900 text-slate-100">
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


