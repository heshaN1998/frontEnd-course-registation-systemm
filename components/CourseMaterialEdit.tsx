import { Button, Form, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { CourseMaterialModel } from "../model/CourseMaterialModel";

interface CourseMaterialEditProp {
  show: boolean;
  selectedRaw: CourseMaterialModel | null;
  handleOnClose: () => void;
  updateCourseMaterial: (formData: FormData) => Promise<void>;
  handleOnUpdate: (updateMaterial: CourseMaterialModel) => void;
}

export const CourseMaterialEdit = ({
  show,
  selectedRaw,
  handleOnClose,
  updateCourseMaterial,
  handleOnUpdate,
}: CourseMaterialEditProp) => {
  const [material, setMaterial] = useState<CourseMaterialModel>({
    materialId: "",
    fileName: "",
    materialType: "",
    material: "",
    uploadAt: "",
    courseId: "",
    Option: "",
  });

  useEffect(() => {
    if (selectedRaw) {
      setMaterial({ ...selectedRaw });
    }
  }, [selectedRaw]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMaterial((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMaterial((prev) => ({
        ...prev,
        material: file as unknown as string,
      }));
    }
  };

  const handleOnSaveUpdateData = async () => {
    const formData = new FormData();

    if (material.materialId) {
      formData.append("materialId", material.materialId);
    }

    formData.append("fileName", material.fileName);
    formData.append("materialType", material.materialType);
    formData.append("uploadAt", material.uploadAt);
    formData.append("courseId", material.courseId);

    if (material.material instanceof File) {
      formData.append("material", material.material);
    } else {
      formData.append("material", material.material);
    }

    try {
      await updateCourseMaterial(formData);
      handleOnUpdate(material);
      handleOnClose();
    } catch (er) {
      console.error(er);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleOnClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Course Material</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formMaterialId">
              <Form.Label>Course Material ID</Form.Label>
              <Form.Control
                type="text"
                readOnly
                name="materialId"
                value={material.materialId}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="fileName">
              <Form.Label>File Name</Form.Label>
              <Form.Control
                type="text"
                name="fileName"
                value={material.fileName}
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="materialType">
              <Form.Label>Material Type</Form.Label>
              <Form.Control
                type="text"
                name="materialType"
                value={material.materialType}
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMaterial">
              <Form.Label>Material</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="uploadAt">
              <Form.Label>Upload Time</Form.Label>
              <Form.Control
                type="text"
                name="uploadAt"
                value={material.uploadAt}
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="courseId">
              <Form.Label>Course ID</Form.Label>
              <Form.Control
                type="text"
                name="courseId"
                value={material.courseId}
                onChange={handleOnChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={handleOnSaveUpdateData}
              className="me-2"
            >
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