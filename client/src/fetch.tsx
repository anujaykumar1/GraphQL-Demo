/**
 * This component will help to demonstrate simple fetch query
 */
import { gql, useQuery } from "@apollo/client";
import React, { useEffect }  from "react";
import DataTable from "./components/Data-Table";


const GET_LOCATIONS = gql`
query {
    dogs {
      id
      breed
    }
  }
`;
 function Fetch(){

    const {data,loading,error} = useQuery(GET_LOCATIONS);

    useEffect(()=>{
       console.log(loading,data)
        
        if(!loading){
            console.log(data)
        }
    },[loading,data])
    if(loading)
    return <h2>Loading...</h2>
    if(error)
    return <h2 style={{color:'red'}}> Something went wrong!</h2>


    return <div>
        <DataTable data={data.dogs}/>
    </div>
}
export default Fetch