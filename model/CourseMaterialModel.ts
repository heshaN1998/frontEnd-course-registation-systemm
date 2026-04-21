export interface CourseMaterialModel{
    materialId:string;
    fileName:string;
    materialType:string;
    material:File | null;
    uploadAt:string;
    courseId:string;
    Option:string;
}