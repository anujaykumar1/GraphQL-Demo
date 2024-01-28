import { NetworkStatus, gql, useQuery } from "@apollo/client";
import React from "react";

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

interface DogPhotoPropsInterface {
    breed:string;
}

const DogPhoto:React.FC<DogPhotoPropsInterface>=({ breed })=> {

  const { loading, error, data,refetch,networkStatus } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    notifyOnNetworkStatusChange: true,
    pollInterval: 500
  });
  if (networkStatus === NetworkStatus.refetch) return <>'Refetching!'</>;

  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error}`</>;

  return (
    <div>
        <h3>To Demo Cache...</h3>
        {/* To Refresh cached data */}
        <button onClick={()=>refetch()}>Refresh</button>
        {data.dog.id?<img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />:"No Image Found"}

    </div>
  );
}

export default DogPhoto;