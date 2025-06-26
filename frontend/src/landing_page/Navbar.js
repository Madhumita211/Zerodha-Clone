// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <header style={{ backgroundColor: "#FFF", position: "sticky", top: "0px", zIndex: "1000" }}>
//       <nav
//         class="navbar navbar-expand-lg border-bottom" 
//       >
//         <div class="container py-2 px-4" style={{marginRight: "20px"}}>
//           <Link class="navbar-brand" to="/">
//             <img
//               src="media/images/logo.svg"
//               style={{ width: "22%" }}
//               alt="logo"
//             />
//           </Link>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <form class="d-flex" role="search">
//               <ul class="navbar-nav mb-lg-0">
//                 <li class="nav-item">
//                   <Link class="nav-link active" aria-current="page" to="/signup">
//                     Signup
//                   </Link>
//                 </li>
//                 <li class="nav-item">
//                   <Link class="nav-link active" to="/about">
//                     About
//                   </Link>
//                 </li>
//                 <li class="nav-item">
//                   <Link class="nav-link active" to="/products">
//                     Products
//                   </Link>
//                 </li>
//                 <li class="nav-item">
//                   <Link class="nav-link active" to="/pricing">
//                     Pricing
//                   </Link>
//                 </li>
//                 <li class="nav-item">
//                   <Link class="nav-link active" to="/support">
//                     Support
//                   </Link>
//                 </li>
//                 <li class="nav-item">
//                   <Link class="nav-link active" to="/menu">
//                     <i class="fa-solid fa-bars"></i>
//                   </Link>
//                 </li>
//               </ul>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

function Navbar() {
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) return;
      try {
        const { data } = await axios.post(
          "http://localhost:3002/api/auth", // ✅ Make sure this is correct
          {},
          { withCredentials: true }
        );
        if (data.status) {
          setUsername(data.user);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (err) {
        console.error(err);
        setIsLoggedIn(false);
      }
    };
    verifyUser();
  }, [cookies]);

  const handleLogout = () => {
    removeCookie("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header style={{ backgroundColor: "#FFF", position: "sticky", top: "0px", zIndex: "1000" }}>
      <nav className="navbar navbar-expand-lg border-bottom">
        <div className="container py-2 px-5">
          <Link className="navbar-brand" to="/">
            <img src="/media/images/logo.svg" style={{ width: "22%" }} alt="logo" />
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mb-lg-0 ms-auto">
             <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">Support</Link>
              </li>

              {/* USER MENU */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-user"></i> {isLoggedIn && <span className="ms-1">{username}</span>}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  {!isLoggedIn ? (
                    <li>
                      <Link className="dropdown-item" to="/login">Login</Link>
                    </li>
                  ) : (
                    <>
                      <li>
                        <a
                          className="dropdown-item"
                          href="http://localhost:3001" // ✅ Link to your dashboard app
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <button className="dropdown-item text-danger" onClick={handleLogout}>
                          Logout
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;