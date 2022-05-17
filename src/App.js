import React,{useState,useEffect} from "react";
import Axios from "axios";
import './App.css';

function App() {

  const [listUsers,setListUsers] = useState([]);

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
          <td><button className="border-2 bg-blue-700 text-slate-100 border-blue-700 px-3 py-1 rounded-md text-1xl font-medium hover:bg-blue-500 transition duration-300">edit</button></td>
          <td><button className="border-2 bg-red-600 text-slate-100 border-red-600 px-3 py-1 rounded-md text-1xl font-medium hover:bg-red-600 transition duration-300" 
          onClick={()=>deleteUser(data._id)}>Delete</button></td>
        </tr>
      </tbody>
      
    )
  })

  return (
    <div className="Appcontainer bg-slate-300">
      <h1 className="text-5xl  p-3 text-center font-bold underline">Fitness Tracker App</h1>

      {/* <div className="formcontainer mt-8">
      <form className="formbox bg-white shadow-lg">

        <div className="forminput mx-auto ">
          <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Date</label>
          <input 
          className="" 
          type="date" 
          onChange={(event)=>{setDate(event.target.value)}}/>
        </div>

        <div className="forminput w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-blue-700">
          <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Hip</label>
          <input 
          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 bg-transparent dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          type="number" 
          placeholder="hip" 
          onChange={(event)=>{setHip(event.target.value)}}/>
        </div>

        <div className="forminput py-2">
          <input className="w-full border-none bg-transparent outline-none focus:outline-none"
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

        <button className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none" onClick={createUser}>Log progress</button>
        </form>
      </div> */}

<div class="w-1/2 items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
         <h2 class="w-full text-4xl font-medium leading-snug">Log your progress! :D </h2>
         <form class="w-full mt-3 space-y-6">
            <div>
               <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Date</label>
               <input type="date" 
               class="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               onChange={(event)=>{setDate(event.target.value)}}
               />
            </div>

            <div>
               <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Hip</label>
               <input type="number" class="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Hip"
               onChange={(event)=>{setHip(event.target.value)}}
               />
            </div>

            <div>
               <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Waist</label>
               <input type="number" class="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Waist"
               onChange={(event)=>{setWaist(event.target.value)}}
               />
            </div>
            
            <div>
               <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Umbilical</label>
               <input type="number" class="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Umbilical"
               onChange={(event)=>{setUmbilical(event.target.value)}}
               />
            </div>
            
            <div>
               <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Arms</label>
               <input type="number" class="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Arms"
               onChange={(event)=>{setArms(event.target.value)}}
               />
            </div>

            <div>
               <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Torax</label>
               <input type="number" class="block w-full px-3 py-3 mt-1 text-base 
               placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Torax"
               onChange={(event)=>{setTorax(event.target.value)}}
               />
            </div>            
            
            <div>
               <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Legs</label>
               <input type="number" class="block w-full px-3 py-3 mt-1 text-base 
               placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Legs"
               onChange={(event)=>{setLeg(event.target.value)}}
               />
            </div>

            <div>
               <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Weight</label>
               <input type="number" class="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Weight"
               onChange={(event)=>{setWeight(event.target.value)}}
               />
            </div>

            <div>
               <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Body fat</label>
               <input type="number" class="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Body fat"
               onChange={(event)=>{setBodyfat(event.target.value)}}
               />
            </div>

            <div>
               <button class="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 ease" 
               onClick={createUser}>Submit</button>
            </div>
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