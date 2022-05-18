import React,{useState,useEffect} from 'react';
import Axios from 'axios';

function ProgressForm() {

    const [data,setData] = useState([]);

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
          setData(response.data);
        });
      },[])
    
      const createUser = ()=>{
         Axios.post("http://localhost:3001/createUser",{date,hip,waist,umbilical,arms,torax,leg,weight,bodyfat}).then((response)=>{
          setData([...data,{date,hip,waist,umbilical,arms,torax,leg,weight,bodyfat}])
        })
      }

  return (
    <div className="block p-2 justify-center mx-auto bg-white shadow-2xl rounded-md">
         <h2 className="text-2xl font-medium leading-snug text-center">Log your progress! :D </h2>
         <div>
         <form className="block justify-center mx-auto p-4 space-y-6 ">
            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Date</label>
               <input type="date" 
               className="block w-full p-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600" 
               onChange={(event)=>{setDate(event.target.value)}}
               />
            </div>

            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Hip</label>
               <input type="number" className="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600" 
               placeholder="Hip"
               onChange={(event)=>{setHip(event.target.value)}}
               />
            </div>

            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Waist</label>
               <input type="number" className=" w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600" 
               placeholder="Waist"
               onChange={(event)=>{setWaist(event.target.value)}}
               />
            </div>
            
            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Umbilical</label>
               <input type="number" className=" w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600" 
               placeholder="Umbilical"
               onChange={(event)=>{setUmbilical(event.target.value)}}
               />
            </div>
            
            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Arms</label>
               <input type="number" className=" w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600" 
               placeholder="Arms"
               onChange={(event)=>{setArms(event.target.value)}}
               />
            </div>

            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Torax</label>
               <input type="number" className=" w-full px-3 py-3 mt-1 text-base 
               placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600" 
               placeholder="Torax"
               onChange={(event)=>{setTorax(event.target.value)}}
               />
            </div>            
            
            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Legs</label>
               <input type="number" className=" w-full px-3 py-3 mt-1 text-base 
               placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600" 
               placeholder="Legs"
               onChange={(event)=>{setLeg(event.target.value)}}
               />
            </div>

            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Weight</label>
               <input type="number" className=" w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600" 
               placeholder="Weight"
               onChange={(event)=>{setWeight(event.target.value)}}
               />
            </div>

            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Body fat</label>
               <input type="number" className=" w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600" 
               placeholder="Body fat"
               onChange={(event)=>{setBodyfat(event.target.value)}}
               />
            </div>

               <button className="block w-full py-2 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 ease" 
               onClick={createUser}>Submit</button>
         </form>
         </div>
        </div>
  )
}

export default ProgressForm