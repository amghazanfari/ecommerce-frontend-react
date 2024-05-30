import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import apiInstance from "../../utils/axios";
import UserData from "../plugin/UserData";
import CartID from "../plugin/CartID";

function Cart() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);

  const userData = UserData();
  const cartID = CartID();

  const fetchCartData = (cartID, userID) => {
    const url = userID
      ? `cart-list/${cartID}/${userID}/`
      : `cart-list/${cartID}/`;

    apiInstance
      .get(url)
      .then((res) => {
        setCart(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCartTotal = (cartID, userID) => {
    const url = userID
      ? `cart-detail/${cartID}/${userID}/`
      : `cart-detail/${cartID}/`;

    apiInstance
      .get(url)
      .then((res) => {
        setCartTotal(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (cartID !== null || cartID !== undefined) {
      if (userData !== undefined) {
        fetchCartData(cartID, userData?.user_id);
        fetchCartTotal(cartID, userData?.user_id);
      } else {
        fetchCartData(cartID, null);
        fetchCartTotal(cartID, null);
      }
    }
  }, []);

  return (
    <div>
      <main className="mt-5">
        <div className="container">
          <main className="mb-6">
            <div className="container">
              <section className="">
                <div className="row gx-lg-5 mb-5">
                  <div className="col-lg-8 mb-4 mb-md-0">
                    <section className="mb-5">
                      {cart?.length !== 0 ? (
                        cart?.map((c) => (
                          <div key={c.id} className="row border-bottom mb-4">
                            <div className="col-md-2 mb-4 mb-md-0">
                              <div
                                className="bg-image ripple rounded-5 mb-4 overflow-hidden d-block"
                                data-ripple-color="light"
                              >
                                <Link to="">
                                  <img
                                    src={c.cart_product?.image}
                                    className="w-100"
                                    alt=""
                                    style={{
                                      height: "100px",
                                      objectFit: "cover",
                                      borderRadius: "10px",
                                    }}
                                  />
                                </Link>
                                <div className="hover-overlay">
                                  <div
                                    className="mask"
                                    style={{
                                      backgroundColor:
                                        "hsla(0, 0%, 98.4%, 0.2)",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-8 mb-4 mb-md-0">
                              <Link
                                to={`/detail/${c.cart_product?.slug}`}
                                className="fw-bold text-dark mb-4"
                              >
                                {c.cart_product.title}
                              </Link>
                              {c.size !== "No size" ? (
                                <p className="mb-0">
                                  <span className="text-muted me-2">RAM:</span>
                                  <span>{c.size}</span>
                                </p>
                              ) : (
                                <></>
                              )}
                              {c.color !== "No Color" ? (
                                <p className="mb-0">
                                  <span className="text-muted me-2">
                                    Color:
                                  </span>
                                  <span>{c.color}</span>
                                </p>
                              ) : (
                                <></>
                              )}
                              <p className="mb-0">
                                <span className="text-muted me-2">Price:</span>
                                <span>{c.price}$</span>
                              </p>
                              <p className="mb-0">
                                <span className="text-muted me-2">Vendor:</span>
                                <span>
                                  {c.cart_product?.product_vendor?.name}
                                </span>
                              </p>
                              <p className="mt-3">
                                <button className="btn btn-danger ">
                                  <small>
                                    <i className="fas fa-trash me-2" />
                                    Remove
                                  </small>
                                </button>
                              </p>
                            </div>
                            <div className="col-md-2 mb-4 mb-md-0">
                              <div className="d-flex justify-content-center align-items-center">
                                <div className="form-outline">
                                  <input
                                    type="number"
                                    className="form-control"
                                    value={c.qty}
                                    min={1}
                                  />
                                </div>
                                <button className="ms-2 btn btn-primary">
                                  <i className="fas fa-rotate-right"></i>
                                </button>
                              </div>
                              <h5 className="mb-2 mt-3 text-center">
                                <span className="align-middle">$100.00</span>
                              </h5>
                            </div>
                          </div>
                        ))
                      ) : (
                        <>
                          <h5>Your Cart Is Empty</h5>
                          <Link to="/">
                            {" "}
                            <i className="fas fa-shopping-cart"></i> Continue
                            Shopping
                          </Link>
                        </>
                      )}
                    </section>
                    <div>
                      <h5 className="mb-4 mt-4">Personal Information</h5>
                      {/* 2 column grid layout with text inputs for the first and last names */}
                      <div className="row mb-4">
                        <div className="col">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="full_name">
                              {" "}
                              <i className="fas fa-user"></i> Full Name
                            </label>
                            <input
                              type="text"
                              id=""
                              name="fullName"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row mb-4">
                        <div className="col">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form6Example1"
                            >
                              <i className="fas fa-envelope"></i> Email
                            </label>
                            <input
                              type="text"
                              id="form6Example1"
                              className="form-control"
                              name="email"
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form6Example1"
                            >
                              <i className="fas fa-phone"></i> Mobile
                            </label>
                            <input
                              type="text"
                              id="form6Example1"
                              className="form-control"
                              name="mobile"
                            />
                          </div>
                        </div>
                      </div>

                      <h5 className="mb-1 mt-4">Shipping address</h5>

                      <div className="row mb-4">
                        <div className="col-lg-6 mt-3">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form6Example1"
                            >
                              {" "}
                              Address
                            </label>
                            <input
                              type="text"
                              id="form6Example1"
                              className="form-control"
                              name="address"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 mt-3">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form6Example1"
                            >
                              {" "}
                              City
                            </label>
                            <input
                              type="text"
                              id="form6Example1"
                              className="form-control"
                              name="city"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 mt-3">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form6Example1"
                            >
                              {" "}
                              State
                            </label>
                            <input
                              type="text"
                              id="form6Example1"
                              className="form-control"
                              name="state"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 mt-3">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form6Example1"
                            >
                              {" "}
                              Country
                            </label>
                            <input
                              type="text"
                              id="form6Example1"
                              className="form-control"
                              name="country"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4 mb-md-0">
                    {/* Section: Summary */}
                    <section className="shadow-4 p-4 rounded-5 mb-4">
                      <h5 className="mb-3">Cart Summary</h5>
                      <div className="d-flex justify-content-between mb-3">
                        <span>Subtotal </span>
                        <span>{cartTotal?.sub_total}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Shipping </span>
                        <span>{cartTotal?.shipping}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Tax </span>
                        <span>{cartTotal?.tax}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Servive Fee </span>
                        <span>{cartTotal?.service_fee}</span>
                      </div>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between fw-bold mb-5">
                        <span>Total </span>
                        <span>{cartTotal?.total}</span>
                      </div>
                      <button className="btn btn-primary btn-rounded w-100">
                        Got to checkout
                      </button>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </main>
    </div>
  );
}

export default Cart;
