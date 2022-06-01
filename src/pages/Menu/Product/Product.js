import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Product.scss';
import ProductCarousel from './components/ProductCarousel';
import ProductInfo from './components/ProductInfo';
import Top from '../../../components/Top/Top';

const Product = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const {
    id,
    name,
    description,
    servings,
    cookTime,
    prepTime,
    price,
    spice,
    image,
  } = product;

  useEffect(() => {
    fetch(`http://10.58.0.124:8000/products/${params.id}`)
      .then(response => {
        return response.json();
      })
      .then(data => setProduct(data.product_detail));
  }, [params.id]);

  return (
    <div className="product">
      {id && (
        <>
          <ProductCarousel key={id} name={name} image={image} />
          <ProductInfo
            name={name}
            description={description}
            servings={servings}
            cookTime={cookTime}
            prepTime={prepTime}
            spice={spice}
            price={price}
          />
        </>
      )}
      <Top />
    </div>
  );
};

export default Product;
