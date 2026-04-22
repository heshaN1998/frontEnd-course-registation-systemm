import Table from 'react-bootstrap/Table';
import { getCourseMaterialData,updateCourseMaterialData } from '../../service/CourseMaterialService';
import { useEffect, useState } from 'react';
import { CourseMaterialModel } from '../../model/CourseMaterialModel';
import { CourseMaterialEdit } from './CourseMaterialEdit';

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
    

    //const[tblData,settblData]=useState<CourseMaterialModel | null> (null)
    
const [ material,setMaterial ] =useState<CourseMaterialModel []>([])
const [showEditForm,setShowEditForm] =useState(false);   
const [selectedRow,setSelectedRow]=useState <CourseMaterialModel | null> (null);
    useEffect(()=>{
        //console.log("Component Loaded....");
        const loadData=async()=>{
            const importedData=await getCourseMaterialData();
            console.log(importedData)
            setMaterial(importedData)
        };
        loadData();
    },[])

    const handleOnEdit=(mat:CourseMaterialModel)=>{
        setShowEditForm(true)
        setSelectedRow(mat)
    }
    //after editing
    const handleOnUpdate=()=>{

    }
    
    return(
        <>
        <Table striped bordered hover>
      <thead>
        <tr>
          
          {tblHeaders.map((headings,index)=>(
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
                    {mat.materialType}
                </td>
                <td>

                    <img src={`data:image/png;base64,${mat.material}`} alt="course material" style={{width:"80px",height:"auto"}}/>
                </td>
                
                <td>
                    {mat.uploadAt}
                </td>
                <td>
                    {mat.courseId}
                </td>
                <td>
                    <button className="btn-warning" onClick={()=>handleOnEdit(mat)} style={{marginRight:"10px"}}>upDate</button>
                </td>
            </tr>
        ))}
       
      </tbody>
    </Table>
    {/*ss*/}
    <CourseMaterialEdit
    show={showEditForm}
    selectedRaw={selectedRow}
    handleOnClose={()=>setShowEditForm(false)}
    updateCourseMaterial={updateCourseMaterialData}
    handleOnUpdate={}
    />
        </>
    );
    
}

