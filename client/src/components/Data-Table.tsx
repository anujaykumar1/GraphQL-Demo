import React from 'react';

interface ResultProps {
    id:string;
    breed:string;
}
interface DataPropsInterface {
    data: ResultProps[]
}

const DataTable:React.FC<DataPropsInterface> = ({data}) =>{

    return <div>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
            </tr>
            </thead>
            <tbody>
                
                    {
                       data.map(d=>{
                        return  <tr>
                                    <td>{d.id}</td>
                                    <td>{d.breed}</td>
                                    
                                </tr>
                       })
                    }
                    
            </tbody>
        </table>
    </div>
}
export default DataTable;