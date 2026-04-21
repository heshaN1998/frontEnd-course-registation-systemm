import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { CourseMaterialModel } from "../model/CourseMaterialModel";

interface CourseMaterialEditProp{
show:boolean;
selectedRaw:CourseMaterialModel|null
handleOnClose:()=>void
updateCourseMaterial:(formData:FormData)=>Promise<void>
handleOnUpdate : (updateMaterial:CourseMaterialModel)=>void
}
export const CourseMaterialEdit = ({show,
selectedRaw,
handleOnClose,
updateCourseMaterial,
handleOnUpdate}:CourseMaterialEditProp) => {
  
    //const [show, setShow] = useState(false);
    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);


  return (
    <>
      {/*<Button variant="primary">
        demo modal
      </Button>*/}

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Update Course Material</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleOnUpdate}>
            <Form.Group className="mb-3" controlId="formMaterialId">
              <Form.Label>Course Material ID</Form.Label>
              <Form.Control type="text" readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFileName">
              <Form.Label>File Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMaterialType">
              <Form.Label>Material Type</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMaterial">
              <Form.Label>Material</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCourseId">
              <Form.Label>Course ID</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Button variant="primary" type="submit" className="me-2">
              Update
            </Button>

            <Button variant="danger" type="reset">
              Clear
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};