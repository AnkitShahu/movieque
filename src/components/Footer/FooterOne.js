import Link from "next/link";
import Image from "next/image";

import logo from "@/../public/assets/images/logo.png";

export default function FooterOne() {
  return (
    <footer className="footer-area pt-80">
      <div className="container">
        {/* <!-- Footer Top --> */}
        <div className="row footer-top row-gap-lg-4 row-gap-5">
          <div className="col-md-6 col-xl-4">
            <div className="footer-widget widget-about">
              <Link href="#" className="thumb d-inline-block">
                <Image src={logo} alt="logo" width={100} />
              </Link>
              <div className="details">
                <p className="lh-1">Connected with us!</p>
                <ul className="social-media mt-3">
                  <li className="social-media--item">
                    <Link href="#" className="social-media--link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M13.2402 0.656738H15.6604L10.3731 6.69986L16.5932 14.9232H11.7229L7.90825 9.93578L3.54348 14.9232H1.12184L6.77721 8.45939L0.810173 0.656738H5.80416L9.25222 5.21542L13.2402 0.656738ZM12.3908 13.4746H13.7319L5.07547 2.02924H3.63639L12.3908 13.4746Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="social-media--item">
                    <Link href="#" className="social-media--link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="16"
                        viewBox="0 0 8 16"
                        fill="none"
                      >
                        <path
                          d="M5.33899 9.16479H7.21792L7.9695 6.20547H5.33899V4.72581C5.33899 3.96424 5.33899 3.24615 6.84214 3.24615H7.9695V0.760389C7.72471 0.728391 6.7993 0.656738 5.82217 0.656738C3.78203 0.656738 2.33269 1.88253 2.33269 4.13373V6.20547H0.0779705V9.16479H2.33269V15.4534H5.33899V9.16479Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="social-media--item">
                    <Link href="#" className="social-media--link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8.59916 0.656738C9.43179 0.658114 9.85373 0.662524 10.2183 0.673378L10.3619 0.678068C10.5278 0.683965 10.6915 0.691364 10.8888 0.700612C11.6761 0.736991 12.2131 0.861531 12.6848 1.04465C13.1724 1.2327 13.5843 1.48671 13.9955 1.89795C14.4061 2.30919 14.6602 2.72227 14.8489 3.20873C15.0313 3.67977 15.1559 4.21741 15.1929 5.00473C15.2017 5.20203 15.2088 5.36569 15.2147 5.53159L15.2193 5.67519C15.2301 6.03975 15.2351 6.46176 15.2366 7.29442L15.2372 7.84606C15.2373 7.91346 15.2373 7.98301 15.2373 8.05477L15.2372 8.26349L15.2368 8.8152C15.2354 9.64783 15.231 10.0699 15.2201 10.4344L15.2154 10.578C15.2095 10.7439 15.2022 10.9076 15.1929 11.1048C15.1565 11.8922 15.0313 12.4292 14.8489 12.9008C14.6608 13.3886 14.4061 13.8004 13.9955 14.2116C13.5843 14.6223 13.1706 14.8763 12.6848 15.0649C12.2131 15.2474 11.6761 15.372 10.8888 15.409C10.6915 15.4178 10.5278 15.4249 10.3619 15.4307L10.2183 15.4354C9.85373 15.4462 9.43179 15.4511 8.59916 15.4528L8.04745 15.4534C7.98005 15.4534 7.9105 15.4534 7.83874 15.4534H7.63002L7.07831 15.4528C6.24568 15.4515 5.82368 15.4471 5.45912 15.4362L5.31552 15.4315C5.14961 15.4256 4.98596 15.4182 4.78867 15.409C4.00133 15.3726 3.46494 15.2474 2.99267 15.0649C2.50559 14.8769 2.09312 14.6223 1.68189 14.2116C1.27065 13.8004 1.01725 13.3867 0.828588 12.9008C0.645474 12.4292 0.521548 11.8922 0.484555 11.1048C0.475766 10.9076 0.468596 10.7439 0.462788 10.578L0.458135 10.4344C0.447311 10.0699 0.442376 9.64783 0.440778 8.8152L0.440681 7.29442C0.442058 6.46176 0.44646 6.03975 0.457313 5.67519L0.462012 5.53159C0.467908 5.36569 0.475307 5.20203 0.484555 5.00473C0.520926 4.21679 0.645474 3.68039 0.828588 3.20873C1.01663 2.72166 1.27065 2.30919 1.68189 1.89795C2.09312 1.48671 2.50621 1.23331 2.99267 1.04465C3.46432 0.861531 4.00072 0.737605 4.78867 0.700612C4.98596 0.69183 5.14961 0.684661 5.31552 0.678853L5.45912 0.674199C5.82368 0.663367 6.24568 0.658433 7.07831 0.656834L8.59916 0.656738ZM7.83874 4.35551C5.79457 4.35551 4.13944 6.01244 4.13944 8.05477C4.13944 10.0989 5.79637 11.7541 7.83874 11.7541C9.88288 11.7541 11.538 10.0972 11.538 8.05477C11.538 6.01064 9.88103 4.35551 7.83874 4.35551ZM7.83874 5.83522C9.0646 5.83522 10.0583 6.82861 10.0583 8.05477C10.0583 9.28064 9.0649 10.2743 7.83874 10.2743C6.61287 10.2743 5.61915 9.28101 5.61915 8.05477C5.61915 6.8289 6.6125 5.83522 7.83874 5.83522ZM11.723 3.24572C11.213 3.24572 10.7982 3.65998 10.7982 4.16991C10.7982 4.67986 11.2124 5.09475 11.723 5.09475C12.2329 5.09475 12.6478 4.68051 12.6478 4.16991C12.6478 3.65998 12.2322 3.24509 11.723 3.24572Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="social-media--item">
                    <Link href="#" className="social-media--link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M9.17139 0.726594C5.51213 0.222225 2.04172 2.49525 1.04069 6.05197C0.0396634 9.60872 1.81483 13.359 5.19965 14.8384C5.15522 14.2701 5.19569 13.6984 5.31972 13.1421C5.4563 12.5216 6.27859 9.10053 6.27859 9.10053C6.11473 8.73365 6.03278 8.3354 6.03845 7.9336C6.03845 6.83496 6.67237 6.01527 7.46108 6.01527C7.74773 6.011 8.02211 6.13167 8.21274 6.34587C8.40338 6.56007 8.49148 6.84665 8.45405 7.13096C8.45405 7.79696 8.02618 8.80453 7.80366 9.74943C7.71385 10.1011 7.79648 10.4745 8.02625 10.7554C8.25602 11.0362 8.60563 11.1911 8.96796 11.1726C10.3718 11.1726 11.3136 9.37375 11.3136 7.25052C11.3136 5.62249 10.2352 4.40433 8.24862 4.40433C7.2882 4.3672 6.35454 4.72549 5.66534 5.39565C4.97614 6.06581 4.59167 6.98929 4.60157 7.95069C4.58042 8.47834 4.75058 8.99585 5.08072 9.40793C5.20772 9.50241 5.25672 9.66968 5.20079 9.81779C5.16665 9.95436 5.08072 10.2789 5.04657 10.3984C5.03218 10.4802 4.97986 10.5503 4.90556 10.5873C4.83127 10.6244 4.74381 10.624 4.66986 10.5863C3.64557 10.1764 3.163 9.04926 3.163 7.76285C3.163 5.65665 4.92707 3.13494 8.45524 3.13494C11.2635 3.13494 13.13 5.18988 13.13 7.38709C13.13 10.2789 11.5202 12.4534 9.1404 12.4534C8.41751 12.4763 7.73301 12.1286 7.32511 11.5312C7.32511 11.5312 6.89716 13.2446 6.8129 13.569C6.64092 14.1289 6.38702 14.6603 6.0595 15.1458C6.74203 15.3529 7.45176 15.4565 8.16503 15.4533C10.1271 15.4545 12.0092 14.6753 13.3963 13.2871C14.7834 11.8989 15.5616 10.0158 15.5593 8.05316C15.5572 4.35814 12.8307 1.23096 9.17139 0.726594Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="social-media--item">
                    <Link href="#" className="social-media--link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                      >
                        <path
                          d="M10.0452 5.27725V10.6445C10.0452 13.3004 7.81249 15.4534 5.0582 15.4534C2.30396 15.4534 0.0711975 13.3004 0.0711975 10.6445C0.0711975 7.98853 2.30396 5.83555 5.0582 5.83555C5.45433 5.83555 5.83963 5.88008 6.20905 5.96423V8.30422C5.86027 8.14442 5.47005 8.05504 5.0582 8.05504C3.57514 8.05504 2.37289 9.21436 2.37289 10.6445C2.37289 12.0745 3.57514 13.2339 5.0582 13.2339C6.54126 13.2339 7.74351 12.0745 7.74351 10.6445V0.656738H10.0452C10.0452 2.69972 11.7627 4.35589 13.8814 4.35589V6.57538C12.4298 6.57538 11.096 6.08952 10.0452 5.27725Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="social-media--item">
                    <Link href="#" className="social-media--link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="16"
                        viewBox="0 0 19 16"
                        fill="none"
                      >
                        <path
                          d="M9.51528 0.656738C9.98947 0.659457 11.1759 0.671406 12.4364 0.724002L12.8834 0.744302C14.1525 0.806895 15.4206 0.913825 16.0496 1.0965C16.8885 1.342 17.5479 2.05833 17.7707 2.96636C18.1256 4.40827 18.17 7.22255 18.1755 7.9036L18.1763 8.04473V8.05463C18.1763 8.05463 18.1763 8.05805 18.1763 8.06462L18.1755 8.20575C18.17 8.8868 18.1256 11.7011 17.7707 13.143C17.5448 14.0543 16.8854 14.7707 16.0496 15.0128C15.4206 15.1955 14.1525 15.3024 12.8834 15.365L12.4364 15.3853C11.1759 15.4379 9.98947 15.4498 9.51528 15.4526L9.30717 15.4534H9.29793C9.29793 15.4534 9.29483 15.4534 9.2887 15.4534L9.08077 15.4526C8.07716 15.4469 3.8809 15.3996 2.5463 15.0128C1.70737 14.7673 1.04799 14.051 0.825102 13.143C0.470261 11.7011 0.425904 8.8868 0.420364 8.20575V7.9036C0.425904 7.22255 0.470261 4.40827 0.825102 2.96636C1.05108 2.05497 1.71046 1.33864 2.5463 1.0965C3.8809 0.709667 8.07716 0.662491 9.08077 0.656738H9.51528ZM7.52227 4.81772V11.2916L12.8493 8.05463L7.52227 4.81772Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="footer-widget">
              <h4 className="widget-title text-uppercase lh-1">
                Browse categories
              </h4>
              <ul className="footer-widget--list d-inline-block">
                <li className="footer-widget--item">
                  <Link href="category" className="footer-widget--link">
                    Action
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href="category" className="footer-widget--link">
                    Comedy
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href="category" className="footer-widget--link">
                    Crime
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href="category" className="footer-widget--link">
                    Romance
                  </Link>
                </li>
              </ul>
              <ul className="footer-widget--list d-inline-block ms-5">
                <li className="footer-widget--item">
                  <Link href="category" className="footer-widget--link">
                    Family
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href="category" className="footer-widget--link">
                    Animation
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href="category" className="footer-widget--link">
                    Drama
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href="category" className="footer-widget--link">
                    Scientific
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="footer-widget">
              <h4 className="widget-title text-uppercase lh-1">Help</h4>
              <ul className="footer-widget--list">
                <li className="footer-widget--item">
                  <Link href="about" className="footer-widget--link">
                    About Us
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href="pricing" className="footer-widget--link">
                    Pricing Plan
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href="privacy-policy" className="footer-widget--link">
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href="pricing" className="footer-widget--link">
                    Account & Billing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="footer-widget widget-more">
              <h4 className="widget-title text-uppercase">
                Download the App for <br /> streaming.
              </h4>
              <div className="d-xl-flex d-lg-block d-flex align-items-center gap-3 position-relative z-1">
                <Link
                  href="#"
                  className="hl-btn btn-base small-btn fs-18 fw-normal text-uppercase flex-shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="22"
                    viewBox="0 0 17 22"
                    fill="none"
                  >
                    <path
                      d="M16.4408 7.22358C16.3198 7.31809 14.1836 8.52991 14.1836 11.2245C14.1836 14.3412 16.9019 15.4438 16.9832 15.4711C16.9707 15.5383 16.5514 16.9812 15.5501 18.4513C14.6572 19.745 13.7247 21.0367 12.3061 21.0367C10.8875 21.0367 10.5225 20.2071 8.88485 20.2071C7.28896 20.2071 6.72153 21.064 5.42395 21.064C4.12638 21.064 3.22099 19.8668 2.18001 18.3967C0.974225 16.6703 0 13.9884 0 11.4429C0 7.36009 2.63687 5.19478 5.23203 5.19478C6.61096 5.19478 7.76042 6.10627 8.62617 6.10627C9.45019 6.10627 10.7353 5.14017 12.304 5.14017C12.8986 5.14017 15.0348 5.19478 16.4408 7.22358ZM11.5593 3.4117C12.2081 2.63672 12.667 1.56141 12.667 0.486107C12.667 0.336992 12.6545 0.185777 12.6274 0.0639648C11.5718 0.103869 10.3159 0.771736 9.55867 1.65592C8.96412 2.33639 8.40921 3.4117 8.40921 4.50171C8.40921 4.66552 8.43633 4.82934 8.44885 4.88185C8.5156 4.89445 8.62408 4.90915 8.73256 4.90915C9.67967 4.90915 10.8708 4.27069 11.5593 3.4117Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Apps Store</span>
                </Link>
                <Link
                  href="#"
                  className="hl-btn trans-btn small-btn fs-18 fw-normal text-uppercase flex-shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="22"
                    viewBox="0 0 19 22"
                    fill="none"
                  >
                    <path
                      d="M0.500002 20.1165V20.1156L0.500002 1.01253C0.500002 1.01249 0.500002 1.01236 0.500002 1.01233C0.500066 0.910857 0.530615 0.810752 0.589244 0.724242C0.591074 0.721542 0.59293 0.718858 0.59481 0.71619L10.6741 10.564L0.594806 20.4127C0.592763 20.4099 0.59075 20.407 0.588767 20.404C0.530201 20.3178 0.49981 20.2178 0.500002 20.1165ZM6.11951 17.868L12.1357 11.9917L13.7395 13.5582L6.11951 17.868ZM13.5974 10.564L15.5924 8.61627L18.2277 10.1073C18.3124 10.1553 18.3812 10.2233 18.4285 10.3034C18.4756 10.3835 18.5 10.4733 18.5 10.564C18.5 10.6547 18.4756 10.7445 18.4285 10.8245L18.8591 11.0785L18.4285 10.8245C18.3813 10.9045 18.3125 10.9725 18.2279 11.0205C18.2279 11.0205 18.2278 11.0206 18.2277 11.0206L15.5914 12.5117L13.5974 10.564ZM6.11837 3.25886L13.7405 7.56871L12.1357 9.13624L6.11837 3.25886Z"
                      stroke="white"
                    />
                  </svg>
                  <span>Play Store</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Bottom --> */}
        <div className="row footer-bottom row-gap-3">
          <div className="col-sm-6 text-sm-start order-4 order-sm-0">
            <p className="mb-0">© Movique 2024, Designed Notuno Infotech</p>
          </div>
          <div className="col-sm-6 footer-widget text-sm-end">
            <ul className="footer-widget--list">
              <li className="footer-widget--item d-inline-block mb-0 me-4">
                <Link href="privacy-policy" className="footer-widget--link">
                  Privacy Policy
                </Link>
              </li>
              <li className="footer-widget--item d-inline-block">
                <Link href="/" className="footer-widget--link">
                  Site Maps
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}