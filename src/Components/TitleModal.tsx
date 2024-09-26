import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAppDispatch } from "./hooks";
import { updateProduct } from "../Redux/Actions/ProductAction";

interface Product {
  id: number;
  title: string;
  category: string;
  availabilityStatus: string;
  price: number;
  rating: number;
  thumbnail: string;
  images:   string[];
}

interface TitleModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProduct: Product | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

const TitleModal = ({ showModal, setShowModal, selectedProduct, setSelectedProduct }: TitleModalProps) => {
  const handleCloseModal = () => setShowModal(false);

  const dispatch = useAppDispatch();


  const handleSaveChanges = () => {
    console.log(selectedProduct);

    if (selectedProduct) {
      // dispatch(updateProduct(selectedProduct));
    }
    
    handleCloseModal();
  };
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedProduct.title}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      title: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedProduct.category}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      category: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedProduct.price}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      price: Number(e.target.value),
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Availability Status</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedProduct.availabilityStatus}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      availabilityStatus: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TitleModal;
