import { logout } from "../../utils/auth";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Logout() {
  useEffect(() => {
    logout();
  });
  return (
    <div>
      <section>
        <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
          <div className="container">
            {/* Section: Login form */}
            <section className="">
              <div className="row d-flex justify-content-center">
                <div className="col-xl-5 col-md-8">
                  <div className="card rounded-5">
                    <div className="card-body p-4">
                      <h3 className="text-center">شما خارج شدید</h3>
                      <br />
                      <Link className="btn btn-primary m-3" to={"/register/"}>
                        ثبت نام
                      </Link>
                      <Link className="btn btn-primary m-3" to={"/login/"}>
                        ورود
                      </Link>
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="pills-login"
                          role="tabpanel"
                          aria-labelledby="tab-login"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Logout;
