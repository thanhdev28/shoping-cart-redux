import React from 'react';
import Cart from './Cart';
import ProductItem from './ProductItem';
import Message from './Message';

function Product({ products }) {
    return (
        <div>
            <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <section className="section">
              <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
              <div className="row">
                {/* Product */}
                {
                  products.map((product, i) => 
                    <ProductItem key={i} product={product} />
                  )
                }
              </div>
            </section>
            {/* Message */}
            <Message />
            {/* Cart */}
            <Cart />
          </div>
        </main>
        </div>
    );
}

export default Product;