import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Loading from './Loading';
import { Container, Row, Col } from 'react-bootstrap';

const ApiComponent = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setdata(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {

        setLoading(false);
      }
    };
    fetchData();
  }, []);




  return (<>
    {loading ? <Loading /> :
      <Container className="py-5">
        <h2 className="mb-4 fw-bold">Our Products</h2>
        <Row className="g-4">
          {data.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
               
              <ProductCard product={item} />
            </Col>
          ))}
        </Row>
      </Container>
    }

  </>);
};

export default ApiComponent;
