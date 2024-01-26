import Link from "next/link";
import Header from "@/components/common/Header";
import OurServices from "@/components/home/OurServices";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonial";
import Partners from "@/components/home/Partners";
import Blog from "@/components/home/Blog";
import Social from "@/components/common/Social";
import { getPartners, getPosts } from "@/lib/data";
import Image from 'next/image'


export const metadata = {
  title: 'Git Startup | Home Page',
  description: 'Git Startup is a marketing agency located in Abu Dhabi, specializing in helping innovative startups grow through comprehensive development and marketing services, Git Startup aims to be the leading force in the startup ecosystem',
}


const Home = async () => {

  const partners = await getPartners()
  const posts = await getPosts()

  return (
    <>
      {/* <!--
        =============================================
        Theme Default Menu
        ==============================================
        --> */}
      <Header />


      {/*
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <Hero />
      {/* /.hero-banner-eleven */}


      {/* <!-- 
			=============================================
				Services Section Thirty Four
			============================================== 
			--> */}
      <div className="fancy-feature-thirtyFour mt-50">
        <div className="container">
          <div className="row gx-xxl-5">
            <OurServices />
          </div>
        </div>
      </div>
      {/* <!-- /.container --> */}
      {/* <!-- /.fancy-feature-thirtyFour --> */}


      {/*
			=====================================================
				Feedback Section Twelve
			=====================================================
			*/}
      <div
        className="feedback-section-twelve position-relative mt-110 sm-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-6 col-sm-8 m-auto">
              <div className="title-style-five text-center mb-80 lg-mb-60">
                <h2 className="main-title font-recoleta fw-500 tx-dark">
                  What’s our client Say About us.
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-11 m-auto">
              <div className="slider-wrapper">
                <div className="feedback_slider_nine">
                  <Testimonial testimonials={partners} />
                </div>
                {/* /.feedback_slider_nine */}
              </div>
              {/* /.slider-wrapper */}
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* End .container */}

        <Image
          src="/images/shape/shape_143.svg"
          alt="shape"
          className="shapes lazy-img shape-one"
          width={126}
          height={126}
        />
        <Image
          src="/images/shape/shape_144.svg"
          alt="shape"
          className="shapes lazy-img shape-two"
          width={126}
          height={126}
        />
      </div>
      {/* /.feedback-section-twelve */}

      {/*
			=============================================
				Partner Section Six
			============================================== 
			*/}
      <div className="partner-section-six mt-140 lg-mt-80" data-aso="fade-up" id="client">
        <div className="container">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <span className="lines" />
              <div className="title text-uppercase tx-dark text-center">
                Our Successful Clients
              </div>
              <span className="lines" />
            </div>
            {/* End d-flex */}
 
            <div className="partner_slider_one mt-65 lg-mt-40">
              <Partners partners={partners}/>
            </div>
            {/* End partner_slide */}
          </div>
        </div>
      </div>
      {/* /.partner-section-six */}


      {/*
			=====================================================
				Blog Section Five
			=====================================================
			*/}
      <div className="blog-section-five mt-190 lg-mt-120">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-xl-6">
                <div className="title-style-five text-center text-md-start mb-30 md-mb-10">
                  <h2 className="main-title font-recoleta fw-500 tx-dark">
                    Our Blog
                  </h2>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row gx-xxl-5">
              <Blog posts={ posts } numbOfPosts={ 3 } />
            </div>
            {/* End .row */}

            <div className="btn-holder text-center">
              <div className="btn-eighteen position-relative d-inline-block tx-dark sm-mt-60">
                <Link href="/blog" className="fw-500 tran3s">
                  Check our all articals <i className="fa-solid fa-angle-right" />
                </Link>
              </div>
            </div>
            {/* End btn-holder */}
          </div>
          {/* End position-relative */}
        </div>
      </div>
      {/* /.blog-section-five */}



      {/*
			=====================================================
				Fancy Short Banner Fourteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-fourteen mt-200 lg-mt-140 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="wrapper pb-90 lg-pb-40">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-9">
                <h2 className="title font-recoleta fw-normal tx-dark position-relative m0 text-center text-md-start sm-pb-30">
                  Any <span> Issue, Idea or Project</span> ? Let’s Chat.
                </h2>
              </div>
              <div className="col-lg-4 col-md-3">
                <a
                  href="#"
                  className="btn-twentyThree d-flex align-items-center justify-content-center m-auto me-md-0 ms-md-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                >
                  <Image 
                    src="/images/icon/icon_115.svg" 
                    alt="icon" 
                    width={60}
                    height={60}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-short-banner-fourteen */}

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-four position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-30 order-lg-0">
              <div className="logo d-flex justify-content-center justify-content-lg-start">
                <Link href="/">
                  <Image src="/images/logo/gitstartup-logo.jpeg" alt="Git Startup" width={77} height={77} />
                </Link>
              </div>
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-4 mb-30 d-flex justify-content-center justify-content-lg-end order-lg-3">
              <a
                href="mailto:info@gitstartup.com"
                className="mail d-flex align-items-center"
              >
                <span className="icon d-flex align-items-center justify-content-center rounded-circle">
                  <i className="far fa-envelope" />
                </span>{" "}
                <span>info@gitstartup.com</span>
              </a>
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-4 mb-30 order-lg-2">
              <Social />
            </div>
            {/* End .col-lg-4 */}
          </div>
        </div>
      </div>
      {/* /.footer-style-four */}
    </>
  );
};

export default Home;
