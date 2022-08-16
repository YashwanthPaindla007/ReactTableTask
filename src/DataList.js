import React, { useEffect, useState } from "react";
// import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from "react-bootstrap-table-next";

// import axios from 'axios';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

function DataList(){

    const [userList, setUserList] = useState([]);

    const column =[
        {datafield:'id', text:'Id'},
        {datafield:'name', text:'Name', sort:true},
        {datafield:'username', text:'Username', sort:true },
        {datafield:'email', text:'Email'}

    ]

    useEffect(()=> {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => setUserList(result));
      
  
    },[])

    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then((res) =>{
    //       console.log(res.data);
    //       setUserList(res.data);
       
    //     });
    //   },[]);
    return (<div>
        <BootstrapTable keyField='id' data={userList} columns={column} />





        {/* <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
            {
                userList && userList.length> 0 ?
                userList.map(usr =>
                    <tr>
                        <td>{usr.id}</td>
                        <td>{usr.name}</td>
                        <td>{usr.username}</td>
                        <td>{usr.email}</td>
                    </tr>
                    )
                    :'Loading'
            }
            
        </table> */}
    </div>)
}
 export default DataList;