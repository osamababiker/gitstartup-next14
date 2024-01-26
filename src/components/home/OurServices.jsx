import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
  const features = [
    {
      background: "#E7F1FF",
      title: ( 
        <>
          Web & Mobile Applications Development.
        </>
      ),
      description: "100% Reliable",
      icon: "/images/icon/app-development.png",
      width: "80",
      height: "80",
      delay: "100",
    },
    {
      background: "#FBF1FF",
      title: (
        <>
          Branding & Digital Marketing.
        </>
      ),
      width: "80",
      height: "80",
      description: "Claim Support",
      icon: "/images/icon/seo-report.png",
      delay: "200",
    },
    {
      background: "#EEFBFA",
      title: (
        <>
          24/7 Technical Support.
        </>
      ),
      width: "80",
      height: "80",
      description: "Consultation",
      icon: "/images/icon/technical-support.png",
      delay: "300",
    },
    {
      background: "#F3EEEC",
      title: (
        <>
          3D Modeling & WebGL Experiance.
        </>
      ),
      width: "80",
      height: "80",
      description: "Consultation",
      icon: "/images/icon/3d-model.png",
      delay: "300",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div
          className="col-lg-3 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <Link href="/about" className="d-block">
            <div
              className={`card-style-fifteen tran3s position-relative mt-35`}
            >
              <h4>{feature.title}</h4>
              <Image
                width={feature.width}
                height={feature.height}
                src={feature.icon}
                alt="icon"
                className="position-absolute"
              />
            </div>{" "}
            {/* /.card-style-fifteen */}
          </Link>
        </div>
      ))}
    </>
  );
};

export default OurServices;
