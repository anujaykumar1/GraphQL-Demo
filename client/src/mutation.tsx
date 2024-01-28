import { gql, useMutation } from "@apollo/client";
import React from "react";

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;



const MutationForm = ()=>{
    let input:HTMLInputElement|null;

    const [addTodo,{loading,data}]=useMutation(ADD_TODO);
    return <>
        <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if(input?.value){
            addTodo({ variables: { type: input.value } });
           input.value = '';
          }
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
      <div>{loading && "Post in process"}</div>
      <div>{data && <>{data.addTodo.type}</>}</div>
    </div>
    </>
}

export default MutationForm;