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
    <div className="w-1/2 items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
         <h2 className="w-full text-4xl font-medium leading-snug">Log your progress! :D </h2>
         <form className="w-full mt-3 space-y-6">
            <div>
               <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Date</label>
               <input type="date" 
               class="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               onChange={(event)=>{setDate(event.target.value)}}
               />
            </div>

            <div>
               <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Hip</label>
               <input type="number" className="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Hip"
               onChange={(event)=>{setHip(event.target.value)}}
               />
            </div>

            <div>
               <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Waist</label>
               <input type="number" className="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Waist"
               onChange={(event)=>{setWaist(event.target.value)}}
               />
            </div>
            
            <div>
               <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Umbilical</label>
               <input type="number" className="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Umbilical"
               onChange={(event)=>{setUmbilical(event.target.value)}}
               />
            </div>
            
            <div>
               <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Arms</label>
               <input type="number" className="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Arms"
               onChange={(event)=>{setArms(event.target.value)}}
               />
            </div>

            <div>
               <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Torax</label>
               <input type="number" className="block w-full px-3 py-3 mt-1 text-base 
               placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Torax"
               onChange={(event)=>{setTorax(event.target.value)}}
               />
            </div>            
            
            <div>
               <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Legs</label>
               <input type="number" className="block w-full px-3 py-3 mt-1 text-base 
               placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Legs"
               onChange={(event)=>{setLeg(event.target.value)}}
               />
            </div>

            <div>
               <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Weight</label>
               <input type="number" className="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Weight"
               onChange={(event)=>{setWeight(event.target.value)}}
               />
            </div>

            <div>
               <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Body fat</label>
               <input type="number" className="block w-full px-3 py-3 mt-1 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" 
               placeholder="Body fat"
               onChange={(event)=>{setBodyfat(event.target.value)}}
               />
            </div>

            <div>
               <button className="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 ease" 
               onClick={createUser}>Submit</button>
            </div>
         </form>
        </div>
  )
}

export default ProgressForm