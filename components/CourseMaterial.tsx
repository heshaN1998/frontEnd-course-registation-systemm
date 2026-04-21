import Table from 'react-bootstrap/Table';
import { getCourseMaterialData } from '../service/CourseMaterialService';
import { useEffect, useState } from 'react';

export const CourseMaterial=()=>{
    const tblHeaders : string[]=[
        "Material ID",
        "File Name",
        "Material Type",
        "Material",
        "Upload At",
        "Course Id"];
    }

    const[tblData,settblData]=useState<CourseMaterialModel | null> (null)

    useEffect(()=>{
        //console.log("Component Loaded....");
        const loadData=async()=>{
            const importedData=await getCourseMaterialData();
            console.log(importedData)
            settblData(importedData)
        };
        loadData();
    },[])
    return(
        <>
        <Table striped bordered hover>
      <thead>
        <tr>
          {
          tblHeaders.map((headings,index)=>(
            <th key={index}>{headings}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td> 
        </tr>
       
      </tbody>
    </Table></>
    );
    
}
