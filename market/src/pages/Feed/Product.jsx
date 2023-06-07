import React from 'react'
import styled from 'styled-components'

function Product() {
  return (
    <ProductStyle>
      <h2 className="a11y-hidden">Product</h2>
      <article>
        <div className="product-image">
          {/* <img src="" alt="" /> */}
          <div className="box"></div>
        </div>
        <strong>애월읍 노지 감귤</strong>
        <p>35,000원</p>
      </article>
    </ProductStyle>
  )
}

export default Product

const ProductStyle = styled.section`
  margin: 130px 0;
  font-size: 24px;
  line-height: 24px;

  article {
    width: 140px;
  }

  .product-image {
    background-color: #ddd;
    height: 90px;
    border-radius: 8px;
    margin-bottom: 6px;
  }

  strong {
    font-size: 14px;
    line-height: 18px;
    margin-botton: 4px;
  }

  p {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #f26e22;
  }
`
