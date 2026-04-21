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
        "Course Id",
        "Option"
                                ];
    }

    //const[tblData,settblData]=useState<CourseMaterialModel | null> (null)
    const [ material,setMaterial ] =useState<CourseMaterialModel []>([])
    useEffect(()=>{
        //console.log("Component Loaded....");
        const loadData=async()=>{
            const importedData=await getCourseMaterialData();
            console.log(importedData)
            setMaterial(importedData); 
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
        {material.map((mat,index)=>(
            <tr key={index}>
                <td>
                    {mat.materialId}
                </td>
                <td>
                    {mat.fileName}
                </td>
                <td>

                    <img src="data:image/png;base64,${mat.material}" alt="course material" style={{width:"80px",height:"auto"}}/>
                </td>
                <td>
                    {mat.materialType}
                </td>
                <td>
                    {mat.uploadAt}
                </td>
                <td>
                    {mat.courseId}
                </td>
                <td>
                    <button className="btn-warning" style={{marginRight:"10px"}}>upDate</button>
                </td>
            </tr>
        ))}
       
      </tbody>
    </Table></>
    );
    
}
