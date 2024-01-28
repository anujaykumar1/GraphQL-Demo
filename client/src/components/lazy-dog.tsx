import { gql, useLazyQuery } from "@apollo/client";
import React from "react";
import DataTable from "./Data-Table";

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

const GET_DOG_PHOTO = gql`
 query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`

const LazyDog =()=>{
    const [getDogs,{loading,data}]=useLazyQuery(GET_DOGS,{
        fetchPolicy: 'network-only'
    });
    const [getDogPhoto,{loading:IsLoading,data:dogPhoto}]= useLazyQuery(GET_DOG_PHOTO)
    const fetchSelectedDog = (e) =>{
        getDogPhoto({variables:{breed:(e as React.ChangeEvent).target.value}})
    }
    return <>
  <button onClick={()=>getDogs()}>Fetch</button>
  {loading?"Loading...": data&&<DataTable data={data.dogs}/>}
 
  {data&&data.dogs&&<select name='dog' onChange={fetchSelectedDog}>
    {data.dogs.map((dog) => (
      <option key={dog.id} value={dog.breed}>
        {dog.breed}
      </option>
    ))}
  </select>}
  {IsLoading ?"Loading...":dogPhoto&&<img src={dogPhoto.dog.displayImage} style={{ height: 100, width: 100 }} /> }
  </>
}
export default LazyDog;