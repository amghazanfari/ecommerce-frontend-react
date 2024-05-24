import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import apiInstance from "../../utils/axios";

function CreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const otp = searchParam.get("otp");
  const uidb64 = searchParam.get("uidb64");

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password does not match");
    } else {
      const formData = new FormData();

      formData.append("password", password);
      formData.append("otp", otp);
      formData.append("uidb64", uidb64);
      try {
        await apiInstance
          .post(`user/password-change/`, formData)
          .then((res) => {
            console.log(res.data);
            alert("password changed successfully");
            navigate("/login");
          });
      } catch (error) {
        alert("error happend");
      }
    }
  };
  return (
    <section>
      <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
        <div className="container">
          <section className="">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-5 col-md-8">
                <div className="card rounded-5">
                  <div className="card-body p-4">
                    <h3 className="text-center">Create New Password</h3>
                    <br />

                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                      >
                        <form onSubmit={handlePasswordSubmit}>
                          {/* Email input */}
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="Full Name">
                              Enter New Password
                            </label>
                            <input
                              type="password"
                              id="email"
                              required
                              value={password}
                              name="password"
                              className="form-control"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="Full Name">
                              Confirm New Password
                            </label>
                            <input
                              type="password"
                              id="email"
                              required
                              value={confirmPassword}
                              name="confirmPassword"
                              className="form-control"
                              onChange={(e) => {
                                setConfirmPassword(e.target.value);
                              }}
                            />
                            {/* {error !== null &&
                                                            <>
                                                                {error === true

                                                                    ? <p className='text-danger fw-bold mt-2'>Password Does Not Match</p>
                                                                    : <p className='text-success fw-bold mt-2'>Password Matched</p>
                                                                }
                                                            </>
                                                        } */}
                          </div>

                          <div className="text-center">
                            <button
                              type="submit"
                              className="btn btn-primary w-100"
                            >
                              Reset Password
                            </button>
                          </div>
                        </form>
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

export default CreatePassword;
