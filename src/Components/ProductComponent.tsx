import { useSelector } from "react-redux";
import { RootState } from "../Redux/Reducer/rootReducer";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../Redux/Actions/ProductAction";
import { useAppDispatch } from "./hooks";
import { Card, Col, Row } from "react-bootstrap";
import "../Components/ProductComponent.css";
import Sidebar from "./Sidebar";
import LazyImage from "./LazyImage";
import ProductListPagination from "./Pagination";
import LearnerLoader from "./Loader";
import ProductTable from "./ProductTable";

const ProductComponent: React.FC = () => {
  const [skips, setSkips] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const productState = useSelector(
    (state: RootState) => state.product.productsArr
  );

  const { loading } = useSelector((state: RootState) => state.product);

  console.log(loading);

  const { products, skip, limit, total } = productState; // Destructure the properties

  console.log(productState);

  useEffect(() => {
    dispatch(fetchProducts(skips));
  }, [dispatch, skips]);

  useEffect(() => {
    if (loading === true) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [loading]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="container mt-4" style={{ flex: 1, marginLeft: "261px" }}>
        {/* {loading ? (
          <LearnerLoader />
        ) : (
          <>
            <h1 className="text-center">Product List</h1>
            <Row>
              {products?.map((product) => (
                <Col md={4} className="mb-4" key={product.id}>
                  <Card>
                    <LazyImage src={product.images[0]} alt={product.title} />
                    <Card.Body>
                      <Card.Title className="text-center">
                        {product.title}
                      </Card.Title>
                      <Card.Text className="text-center">
                        Price: ${product.price}{" "}
                        <span className="text-muted">
                          ({product.discountPercentage}% off)
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )} */}
        <ProductTable products={products} />

        <ProductListPagination
          setSkips={setSkips}
          total={total}
          limit={limit}
          skip={skip}
        />
      </div>
    </div>
  );
};

export default ProductComponent;
