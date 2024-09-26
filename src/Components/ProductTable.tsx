import React from "react";
import { Table } from "react-bootstrap";
import TitleModal from "./TitleModal";

interface Product {
  id: number;
  title: string;
  category: string;
  availabilityStatus: string;
  price: number;
  rating: number;
  thumbnail: string;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );

  const handleTitleClick = (product: Product) => {
    console.log(product);
    setSelectedProduct(product);

    setShowModal(true);
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Availability Status</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Thumbnail</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td
              style={{ cursor: "pointer" }}
              onClick={() => handleTitleClick(product)}
            >
              {product.title}
            </td>
            <td>{product.category}</td>
            <td>{product.availabilityStatus}</td>
            <td>{product.price}</td>
            <td>{product.rating}</td>
            <td>
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "50px", height: "50px" }}
              />
            </td>
          </tr>
        ))}
      </tbody>
      {/* <TitleModal showModal={showModal} setShowModal={setShowModal} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} /> */}
    </Table>
  );
};

export default ProductTable;
