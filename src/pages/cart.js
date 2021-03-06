import { Link } from "gatsby";
import React, { useContext } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import CartContext from "../context/CartContext";

const CartItem = ({
  qty,
  price,
  img,
  title,
  handleDec,
  handleInc,
  handleRemove,
}) => {
  return (
    <>
      {/* <!-- .cart_single-product-block starts --> */}
      <div className="cart-product cart-item bg-white p-8 rounded-10 mb-5 overflow-hidden position-relative">
        {/* <!-- .product-block starts --> */}
        <div className="product-block mb-7 mb-md-0 pe-md-15 pe-lg-12 pe-xl-18">
          <div className="gr-flex-y-center pe-4 pe-xs-0">
            <div className="square-80 me-7 rounded-10 overflow-hidden">
              <img src={img} alt="" className="w-100" />
            </div>
            <h3 className="gr-text-8 fw-bold text-blackish-blue mb-0">
              {title}
            </h3>
          </div>
        </div>
        {/* <!-- .product-block ends --> */}
        {/* <!-- .product-price-block starts --> */}
        <div className="price-block  d-none d-lg-flex align-items-center">
          <h3 className="gr-text-8 fw-bold text-uppercase mb-0 text-blackish-blue">
            ${price}
          </h3>
        </div>
        {/* <!-- .product-price-block ends --> */}
        {/* <!-- .product-quantity-block starts --> */}
        <div className="quantity-block gr-flex-y-center ms-xs-23 ms-md-0">
          <div className="input--amount-control d-flex ">
            <button
              className="amount-dec-btn btn-reset circle-xs bg-gray-3"
              onClick={handleDec}
            >
              -
            </button>
            <span className="py-6 px-8 position-relative mx-2">
              <span className="form-control gr-abs-tl h-100 w-100 text-color-opacity py-0 bg-white ps-2 pe-2 text-center">
                {qty}
              </span>
            </span>
            <button
              className="amount-inc-btn btn-reset circle-xs bg-gray-3"
              onClick={handleInc}
            >
              +
            </button>
          </div>
        </div>
        {/* <!-- .product-quantity-block ends --> */}
        {/* <!-- .product-quantity-block starts --> */}
        <div className="total-block gr-flex-y-center ps-7 ps-xs-0">
          <div className="gr-flex-y-center justify-content-between w-100">
            <h3 className="gr-text-8 fw-bold text-uppercase mb-0 text-blackish-blue">
              ${price * qty}{" "}
            </h3>
            <a
              href="/#"
              onClick={(e) => {
                e.preventDefault();
                handleRemove();
              }}
            >
              <span className="icon icon-simple-remove cross-btn-positioning"></span>
            </a>
          </div>
        </div>
        {/* <!-- .product-quantity-block ends --> */}
      </div>
      {/* <!-- .cart_single-product-block ends --> */}
    </>
  );
};

const Cart = () => {
  const gCart = useContext(CartContext);
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}
      >
        <div className="inner-banner pt-29 pb-md-13 bg-default-2">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9">
                <div className="px-md-15 text-center">
                  <h2 className="title gr-text-2 mb-9 heading-color">Your cart</h2>
                  <p className="gr-text-8 mb-13 text-color-opacity">
                    {gCart.products.length} Items on your cart
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="bg-default-2 pb-17 pb-md-29 ">
          <Container>
            <div className="cart-details-main-block" id="dynamic-cart">
              <div className="cart-product text-left pb-5 d-none d-lg-flex align-items-center">
                <div className="product-block">
                  <h3 className="gr-text-12 fw-bold text-uppercase heading-color">
                    Product
                  </h3>
                </div>
                <div className="price-block">
                  <h3 className="gr-text-12 fw-bold text-uppercase heading-color">
                    Price
                  </h3>
                </div>
                <div className="quantity-block">
                  <h3 className="gr-text-12 fw-bold text-uppercase heading-color">
                    Quantity{" "}
                  </h3>
                </div>
                <div className="total-block ms-lg-n6">
                  <h3 className="gr-text-12 fw-bold text-uppercase heading-color">
                    Total{" "}
                  </h3>
                </div>
              </div>

              {gCart.products.map((product, index) => (
                <CartItem
                  key={index}
                  qty={product.qty}
                  price={product.price}
                  title={product.title}
                  img={product.img}
                  handleInc={() => gCart.incProdQty(product.id)}
                  handleDec={() => gCart.decProdQty(product.id)}
                  handleRemove={() => gCart.removeProduct(product.id)}
                />
              ))}
            </div>
            <div className="row justify-content-md-between pt-9">
              <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <Link to="/ecommerce">
                  <Button variant="light" className="btn-white border">
                  Continue Shopping
                  </Button>
                </Link>
              </div>
              <div className="col-sm-7 col-md-7 col-lg-5">
                <div className="bg-white px-7 py-8 rounded-10 ms-md-19 mt-9 mt-md-0">
                  <h3 className="gr-text-12 fw-bold text-uppercase text-blackish-blue pb-8">
                    Order Details
                  </h3>
                  <ul className="list-unstyled">
                    <li className="d-flex justify-content-between mb-5">
                      <div className="d-flex gr-text-9 gr-color-blackish-blue-opacity-7 text-color-opacity">
                        <span className="d-inline-flex  ps-7 pt-5 position-relative me-2 ">
                          <span className="border-0 p-0 w-100 h-100 gr-abs-tl text-color-opacity bg-white gr-text-9 focus-reset pointer-none gr-color-blackish-blue-opacity-7">
                            {gCart.products.length <= 9
                              ? `0${gCart.products.length}`
                              : gCart.products.length}
                          </span>
                        </span>
                        items
                      </div>
                      <span className="d-block gr-text-9 fw-bold text-blackish-blue">
                        $
                        {gCart.products.reduce(
                          (total, curr) => total + curr.qty * curr.price,
                          0
                        )}
                      </span>
                    </li>
                    <li className="d-flex justify-content-between mb-9">
                      <span className="d-block gr-text-9 gr-color-blackish-blue-opacity-7">
                        Delivery Fee
                      </span>
                      <span className="d-block gr-text-9 font-weight-mid text-green-shamrock">
                        FREE
                      </span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span className="d-block gr-text-7 fw-bold text-blackish-blue">
                        Total Price
                      </span>
                      <span className="d-block gr-text-7 fw-bold text-blackish-blue">
                        $
                        {gCart.products.reduce(
                          (total, curr) => total + curr.qty * curr.price,
                          0
                        )}
                      </span>
                    </li>
                  </ul>
                  <div className="px-1 pt-1">
                    <Link to="/checkout">
                    <Button className="gr-text-9 w-100 ">
                    Proceed to checkout
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default Cart;
