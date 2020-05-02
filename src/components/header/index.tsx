/** @jsx jsx */
import { jsx } from 'theme-ui'
// import './style.css'

const Header = () => {
  return (
    <header>
      <div className="header-area ">
        <div id="sticky-header" className="main-header-area">
          <div className="container-fluid p-0">
            <div className="row align-items-center no-gutters">
              <div className="col-xl-2 col-lg-2">
                <div className="logo-img">
                  <a href="index.html">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="main-menu  d-none d-lg-block text-center">
                  <nav>
                    <ul id="navigation">
                      <li><a className="active" href="index.html">home</a></li>
                      <li><a href="service.html">services</a></li>
                      <li><a href="Portfolio.html">Portfolio</a></li>
                      <li><a href="#">pages <i className="ti-angle-down"></i></a>
                        <ul className="submenu">
                          <li><a href="portfolio_details.html">Portfolio details</a></li>
                          <li><a href="about.html">about</a></li>
                          <li><a href="elements.html">elements</a></li>
                        </ul>
                      </li>
                      <li><a href="#">blog <i className="ti-angle-down"></i></a>
                        <ul className="submenu">
                          <li><a href="blog.html">blog</a></li>
                          <li><a href="single-blog.html">single-blog</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-2 d-none d-lg-block">
                <div className="log_chat_area d-flex align-items-end">
                  <a href="#" data-scroll-nav="0" className="say_hi">Say Hello</a>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
