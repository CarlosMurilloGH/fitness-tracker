import React,{useState,useEffect} from 'react';
import Axios from 'axios';

function ProgressTable() {

    const [data,setData] = useState([]);

    useEffect(()=>{
      Axios.get("https://mern-fitness-tracker-cm2022.herokuapp.com/getusers").then((response)=>{
        setData(response.data);
      });
    },[])

    const deleteUser = (id)=>{
      Axios.delete(`https://mern-fitness-tracker-cm2022.herokuapp.com/deleteUser/${id}`)
      .then(()=>{
         setData(data.filter((data)=>{
          return data._id !== id;
         }))
      })
   }

    const arr=data.map((data)=>{
        return(
          <tbody key={data._id}>
            <tr className="border-2 border-indigo-700">
              <td className="p-4 text-zinc-50">{data.date}</td>
              <td className="p-4 text-zinc-50">{data.hip}</td>
              <td className="p-4 text-zinc-50">{data.waist}</td>
              <td className="p-4 text-zinc-50">{data.umbilical}</td>
              <td className="p-4 text-zinc-50">{data.arms}</td>
              <td className="p-4 text-zinc-50">{data.torax}</td>
              <td className="p-4 text-zinc-50">{data.leg}</td>
              <td className="p-4 text-zinc-50">{data.weight}</td>
              <td className="p-4 text-zinc-50">{data.bodyfat}%</td>
              <td><button className="border-2 bg-red-600 text-zinc-50 border-red-600 px-3 py-1 rounded-md text-1xl hover:bg-red-600 transition duration-300" 
              onClick={()=>{deleteUser(data._id)}}>Delete</button></td>
            </tr>
          </tbody>
          
        )
      })
  
  return (
    <div className="bg-zinc-900 block justify-center mx-auto p-3 rounded-md max-w-full overflow-x-auto">
        <table className="text-slate text-sm justify-center mx-auto table-auto">
          <thead className="text-white border-2 border-indigo-700 bg-indigo-700">
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
              <th className="p-4 text-left">Delete</th>
            </tr>
          </thead>
          {arr}
        </table>
      </div>
  )
}

export default ProgressTable


