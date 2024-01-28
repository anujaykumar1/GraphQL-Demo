/**
 * This component will help to demonstrate
 * 1) Fetch with variable (fetch by)
 * 2) Cache
 * 3) Poll
 * 4) refetch
 * 
 */

// import { useState } from "react";
// import DogPhoto from "./components/dog-photo";
// import Dogs from "./components/dogs";
import LazyDog from "./components/lazy-dog";


  const AdvanceFetch =() =>{
    // const [selectedBreed, onDogChanged]= useState("");

    // const onDogSelected = (e:React.ChangeEvent)=>{
    //     const {value}= (e.currentTarget as HTMLInputElement)
    //     console.log("OnDogSelected",value);
    //     onDogChanged(value)
    // }
    
    return <>
    {/* <Dogs onDogSelected={onDogSelected}/>
    
    <DogPhoto breed={selectedBreed}/> */}

    <LazyDog />
    </>
  }
  export default AdvanceFetch;