import React from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';
import PropTypes from 'prop-types';

function ProductContainer(props) {
    return (
        <Product products={props.products}/>
    );
}
ProductContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
}
const mapStateToProps = state => {
    return {
      products : state.products
    }
}
export default connect(mapStateToProps, null)(ProductContainer);