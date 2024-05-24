import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import apiInstance from "../../utils/axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  });

  const handleResetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);

    apiInstance
      .get(`user/password-reset/${email}`)
      .then(() => {
        alert("an email has been sent to you");
      })
      .catch(() => {
        alert("email does not exist");
      });
    setIsLoading(true);
  };

  return (
    <section>
      <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
        <div className="container">
          {/* Section: Login form */}
          <section className="">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-5 col-md-8">
                <div className="card rounded-5">
                  <div className="card-body p-4">
                    <h3 className="text-center">Forgot Password</h3>
                    <br />

                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                      >
                        <div>
                          {/* Email input */}
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="Full Name">
                              Email Address
                            </label>
                            <input
                              type="text"
                              id="email"
                              name="email"
                              value={email}
                              className="form-control"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                          </div>

                          <div className="text-center">
                            <button
                              onClick={handleResetPassword}
                              className="btn btn-primary w-100"
                            >
                              Reset Password
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}

export default ForgotPassword;
