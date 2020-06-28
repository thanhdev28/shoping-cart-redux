import React from 'react'
import CartItem from './CartItem'

function Cart() {
    return (
        <section className="section">
              <div className="table-responsive">
                <table className="table product-table">
                  <thead>
                    <tr>
                      <th />
                      <th>Sản Phẩm</th>
                      <th>Giá</th>
                      <th>Số Lượng</th>
                      <th>Tổng Cộng</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <CartItem />
                    <tr>
                        <td colSpan={3} />
                        <td>
                        <h4>
                            <strong>Tổng Tiền</strong>
                        </h4>
                        </td>
                        <td>
                        <h4>
                            <strong>15$</strong>
                        </h4>
                        </td>
                        <td colSpan={3}>
                        <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                            <i className="fa fa-angle-right right" />
                        </button>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
    );
}
export default Cart;