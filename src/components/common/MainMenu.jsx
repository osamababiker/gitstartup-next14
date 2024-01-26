import Link from "next/link";


const MainMenu = () => {
 
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo/logo.png" alt="" width={38.5} />
              </Link>
            </div>
          </li>
          {/* End li */}
          <li className="nav-item">
            <Link className="nav-link" href="/" role="button">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about" role="button">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about" role="button">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/courses" role="button">
              Our Clients
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/shop" role="button">
              Our Blog
            </Link>
          </li>


          {/* End li (pages) */}

          {/* End li (blog) */}

          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
       {/*  <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/" className="btn-twentyOne fw-500 tran3s">
              Contact us
            </Link>
          </div>
        </div> */}
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
