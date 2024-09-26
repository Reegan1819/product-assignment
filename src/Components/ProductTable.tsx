import React from "react";
import { Table } from "react-bootstrap";
import TitleModal from "./TitleModal";
import { Product } from "../Redux/Types/ProductTypes";

interface ProductTableProps {
  products: Product[];
}

const styles = {
  table: {
    backgroundColor: "lightgray",
  },
};

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );

  const [localProducts, setLocalProducts] = React.useState<Product[]>(products);

  const handleTitleClick = (product: Product) => {
    console.log(product);
    setSelectedProduct(product);

    setShowModal(true);
  };
  return (
    <Table striped bordered hover>
      <thead className="thead-dark ">
        <tr>
          <th className="text-center" style={{ backgroundColor: "lightgray" }}>
            ID
          </th>
          <th className="text-center" style={{ backgroundColor: "lightgray" }}>
            Title
          </th>
          <th className="text-center" style={{ backgroundColor: "lightgray" }}>
            Category
          </th>
          <th className="text-center" style={{ backgroundColor: "lightgray" }}>
            Availability Status
          </th>
          <th className="text-center" style={{ backgroundColor: "lightgray" }}>
            Price
          </th>
          <th className="text-center" style={{ backgroundColor: "lightgray" }}>
            Rating
          </th>
          <th className="text-center" style={{ backgroundColor: "lightgray" }}>
            Thumbnail
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="text-center">{product.id}</td>
            <td
              style={{ cursor: "pointer" }}
              onClick={() => handleTitleClick(product)}
            >
              {product.title}
            </td>
            <td className="text-center">{product.category}</td>
            <td className="text-center">{product.availabilityStatus}</td>
            <td className="text-center">{product.price}</td>
            <td className="text-center">{product.rating}</td>
            <td className="text-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "50px", height: "50px" }}
              />
            </td>
          </tr>
        ))}
      </tbody>
      <TitleModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        products={localProducts}
        setProducts={setLocalProducts}
      />
    </Table>
  );
};

export default ProductTable;
