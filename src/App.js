import React,{useState,useEffect} from "react";
import Axios from "axios";
import './App.css';

function App() {

  const [listUsers,setListUsers] = useState([]);

  // const [name,setName]=useState("");
  // const [age,setAge]=useState(0);

  const [date,setDate]=useState("");
  const [hip,setHip]=useState(0);
  const [waist,setWaist]=useState(0);
  const [umbilical,setUmbilical]=useState(0);
  const [arms,setArms]=useState(0);
  const [torax,setTorax]=useState(0);
  const [leg,setLeg]=useState(0);
  const [weight,setWeight]=useState(0);
  const [bodyfat,setBodyfat]=useState(0);


  useEffect(()=>{
    Axios.get("http://localhost:3001/getusers").then((response)=>{
      setListUsers(response.data);
    });
  },[])

  const createUser = ()=>{
     Axios.post("http://localhost:3001/createUser",{date,hip,waist,umbilical,arms,torax,leg,weight,bodyfat}).then((response)=>{
      setListUsers([...listUsers,{date,hip,waist,umbilical,arms,torax,leg,weight,bodyfat}])
    })
  }

  const deleteUser=(id)=>{
    Axios.delete(`http://localhost:3001/deleteUser/${id}`)
  }

  const arr=listUsers.map((data)=>{
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
          <td><button className="border-2 bg-blue-600 text-slate-100 border-blue-600 px-3 py-1 rounded-md text-1xl font-medium hover:bg-blue-500 transition duration-300">edit</button></td>
          <td><button className="border-2 bg-red-600 text-slate-100 border-red-600 px-3 py-1 rounded-md text-1xl font-medium hover:bg-red-600 transition duration-300" 
          onClick={()=>deleteUser(data._id)}>Delete</button></td>
        </tr>
      </tbody>
      
    )
  })

  return (
    <div className="Appcontainer items-center justify-center min-h-screen bg-blue-200">
      <h1 className="text-5xl  p-3 text-center font-bold underline">Fitness Tracker App</h1>

      <div className="formcontainer items-center justify-center">
      <form className="formbox items-center justify-center">
        <div className="forminput py-2">
          <input 
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="date" 
          placeholder="date" 
          onChange={(event)=>{setDate(event.target.value)}}/>
        </div>
        <div className="forminput py-2">
          <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number" 
          placeholder="hip" 
          onChange={(event)=>{setHip(event.target.value)}}/>
        </div>
        <div className="forminput py-2">
          <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number" 
          placeholder="waist" 
          onChange={(event)=>{setWaist(event.target.value)}}/>
        </div>
        <div className="forminput py-2">
          <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number" 
          placeholder="umbilical" 
          onChange={(event)=>{setUmbilical(event.target.value)}}/>
        </div>
        <div className="forminput py-2">
          <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number" 
          placeholder="arms" 
          onChange={(event)=>{setArms(event.target.value)}}/>
        </div>
        <div className="forminput py-2">
          <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number" 
          placeholder="torax" 
          onChange={(event)=>{setTorax(event.target.value)}}/>
        </div>
        <div className="forminput py-2">
          <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number" 
          placeholder="leg" 
          onChange={(event)=>{setLeg(event.target.value)}}/>
        </div>
        <div className="forminput py-2">
          <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number" 
          placeholder="weight" 
          onChange={(event)=>{setWeight(event.target.value)}}/>
        </div>
        <div className="forminput py-2">
          <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number" 
          placeholder="bodyfat" 
          onChange={(event)=>{setBodyfat(event.target.value)}}/>
        </div>
        <button className="formbutton bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={createUser}>Log progress</button>
        </form>
      </div>

      <div className="usersDisplay">
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
      

    </div>
  );
}



export default App;