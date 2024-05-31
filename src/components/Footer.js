import React,{useState,useEffect} from "react";
import { DATA_URL } from "../config";

const Footer = ()=>{
    
    const [useCuisines,setCuisines] =useState([]);
    const [useLessCuisines,setLessCuisines] = useState([]);
    const [usePlacesToEat,setPlacesToEat] = useState([]);
    const [useLessPlacesToEat,setLessPlacesToEat] = useState([]);
    useEffect(()=>{footerData()},[])

    
    const footerData =async ()=>{
        const response = await fetch(DATA_URL);
        const json_data = await response.json();
        console.log("array:")
        setCuisines(json_data.data.cards[7].card.card.brands);
        setLessCuisines(json_data.data.cards[7].card.card.brands.slice(0,11));
        setPlacesToEat(json_data.data.cards[6].card.card.brands);
        setLessPlacesToEat(json_data.data.cards[6].card.card.brands.slice(0,11));
    }

    

    return (useCuisines.length == 0)?(<></>):(
    <>
        <div className="my-4">
            <div className="mx-auto w-10/12 text-xl font-bold">Best Cuisines near me</div>
            <div className="flex flex-wrap mx-auto w-10/12">
                {
                    useLessCuisines.map((cuisine,index)=>{return <a href={cuisine.link} key={index}><div className="border p-2 m-2 w-56 rounded-lg truncate" >{cuisine.text}</div></a> })
                }
                {
                    (useCuisines == useLessCuisines)?
                    (<button className="border p-2 w-56 m-2 rounded-lg truncate" onClick={()=>{setLessCuisines(useCuisines.slice(0,11))}} >ShowLess</button>):
                    (<button className="border p-2 w-56 m-2 rounded-lg truncate" onClick={()=>{setLessCuisines(useCuisines)}} >ShowMore</button>)}
                
            </div>
        </div>
        <div className="mt-6">
            <div className="mx-auto w-10/12 text-xl font-bold">Best Places to Eat Across Cities</div>
            <div className="flex flex-wrap mx-auto w-10/12">
                {
                    useLessPlacesToEat.map((cuisine,index)=>{return <a href={cuisine.link} key={index}><div className="border p-2 m-2 w-56 rounded-lg truncate" >{cuisine.text}</div></a> })
                }
                {
                    (usePlacesToEat == useLessPlacesToEat)?
                    (<button className="border p-2 w-56 m-2 rounded-lg truncate" onClick={()=>{setLessPlacesToEat(usePlacesToEat.slice(0,11))}} >ShowLess</button>):
                    (<button className="border p-2 w-56 m-2 rounded-lg truncate" onClick={()=>{setLessPlacesToEat(usePlacesToEat)}} >ShowMore</button>)
                }
                
            </div>
        </div>
    </>
    )
}
export default Footer;