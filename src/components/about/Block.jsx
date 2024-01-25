import Image from "next/image"

const Block = () => {
  return (
    <>
      <div className="row align-items-end" data-aos="fade-up">
        <div className="col-md-5 col-sm-4">
          <Image
            src="/images/shape/shape_136.svg"
            alt="shape"
            className="lazy-img d-none d-sm-inline-block"
            width={100}
            height={100}
          />
        </div>
        <div className="col-md-7 col-sm-8 wow fadeInDown"> 
          <div className="block-wrapper block-one">
            <h3 style={{ color: "#7AABEE" }}>Web & Mobile Applications Development.</h3>
            <p>
              A team of creative and talented developers, dedicated to turning your ideas into action,
              enabling your customers to enjoy a seamless and powerful browsing experience in your web or mobile application.
            </p>
          </div>
          {/* /.block-wrapper */}
        </div>
      </div>
      {/* End .row */}

      <div className="row gx-xxl-5" data-aos="fade-down">
        <div className="col-sm-7 wow fadeInDown">
          <div className="block-wrapper block-two position-relative mt-50 sm-mt-30">
            <h3 style={{ color: "#F98F9B" }}>
              <span> Branding & Digital Marketing.</span>
            </h3>
            <p>
            Having a strong brand can lead to dramatic business growth. Our team will assist you in defining solid brand guidelines,
            developing a compelling social media strategy, and working with you on a daily basis to expand your online audience and convert them into loyal customers.
            </p>
            <Image
              src="/images/shape/shape_138.svg"
              alt="sahpe"
              className="lazy-img shapes shape-one"
              width={100}
              height={100}
            />
          </div>
          {/* /.block-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-sm-5 wow fadeInUp">
          <div className="block-wrapper block-three mt-50 sm-mt-30">
            <h3 style={{ color: "#4B426E" }}>
              <span>24/7 Technical Support.</span> 
            </h3>
            <p>
            "Focus 100% on your business and leave all the technical issues to us.
            With a team of experts who have spent decades resolving problems and assisting others, we can be at your service 24/7."
            </p>
          </div> 
          {/* /.block-wrapper */}
          <Image
            src="/images/shape/shape_137.svg"
            alt="shape"
            className="lazy-img mt-30 ms-auto me-auto d-none d-sm-inline-block"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default Block;
