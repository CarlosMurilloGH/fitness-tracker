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
        Axios.get("https://mern-fitness-tracker-cm2022.herokuapp.com/getusers")
        .then((response)=>{
          setData(response.data);
        });
      },[])
    
      const createUser = ()=>{
         Axios.post("https://mern-fitness-tracker-cm2022.herokuapp.com/createUser",{date,hip,waist,umbilical,arms,torax,leg,weight,bodyfat})
         .then((response)=>{
          setData([...data,{date,hip,waist,umbilical,arms,torax,leg,weight,bodyfat}])
        })
      }

  return (
    <div className="block p-2 justify-center mx-auto bg-zinc-900 rounded-md">
         <h2 className="text-2xl font-medium leading-snug text-center text-zinc-50">Log your progress! :D </h2>
         <div>
         <form className="block justify-center mx-auto p-4 space-y-6 ">
            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-zinc-50 bg-zinc-900 ">Date</label>
               <input type="date" 
               className="block w-full p-3 mt-1 text-base placeholder-zinc-100 bg-zinc-900 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-700" 
               onChange={(event)=>{setDate(event.target.value)}}
               />
            </div>

            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-zinc-50 bg-zinc-900">Hip</label>
               <input type="number" className="block w-full px-3 py-3 mt-1 text-base placeholder-zinc-50 bg-zinc-900 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-700" 
               placeholder="Hip"
               onChange={(event)=>{setHip(event.target.value)}}
               />
            </div>

            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-zinc-50 bg-zinc-900">Waist</label>
               <input type="number" className=" w-full px-3 py-3 mt-1 text-base placeholder-zinc-50 bg-zinc-900 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-700" 
               placeholder="Waist"
               onChange={(event)=>{setWaist(event.target.value)}}
               />
            </div>
            
            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-zinc-50 bg-zinc-900">Umbilical</label>
               <input type="number" className=" w-full px-3 py-3 mt-1 text-base placeholder-zinc-50 bg-zinc-900 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-700" 
               placeholder="Umbilical"
               onChange={(event)=>{setUmbilical(event.target.value)}}
               />
            </div>
            
            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-zinc-50 bg-zinc-900">Arms</label>
               <input type="number" className=" w-full px-3 py-3 mt-1 text-base placeholder-zinc-50 bg-zinc-900 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-700" 
               placeholder="Arms"
               onChange={(event)=>{setArms(event.target.value)}}
               />
            </div>

            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-zinc-50 bg-zinc-900">Torax</label>
               <input type="number" className=" w-full px-3 py-3 mt-1 text-base 
               placeholder-zinc-50 bg-zinc-900 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-700" 
               placeholder="Torax"
               onChange={(event)=>{setTorax(event.target.value)}}
               />
            </div>            
            
            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-zinc-50 bg-zinc-900">Legs</label>
               <input type="number" className=" w-full px-3 py-3 mt-1 text-base 
               placeholder-zinc-50 bg-zinc-900 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-700" 
               placeholder="Legs"
               onChange={(event)=>{setLeg(event.target.value)}}
               />
            </div>

            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-zinc-50 bg-zinc-900">Weight</label>
               <input type="number" className=" w-full px-3 py-3 mt-1 text-base placeholder-zinc-50 bg-zinc-900 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-700" 
               placeholder="Weight"
               onChange={(event)=>{setWeight(event.target.value)}}
               />
            </div>

            <div>
               <label className="block px-2 ml-2 -mt-3 font-medium text-zinc-50 bg-zinc-900">Body fat</label>
               <input type="number" className=" w-full px-3 py-3 mt-1 text-base placeholder-zinc-50 bg-zinc-900 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-700" 
               placeholder="Body fat"
               onChange={(event)=>{setBodyfat(event.target.value)}}
               />
            </div>

               <button className="block w-full py-2 text-xl font-medium text-center text-white transition duration-200 bg-indigo-700 rounded-lg hover:bg-indigo-700 ease" 
               onClick={createUser}>Submit</button>
         </form>
         </div>
        </div>
  )
}

export default ProgressForm