import Link from "next/link";

const Pricing = () => {
  const plans = [
    {
      icon: "/images/icon/icon_56.svg",
      plan: "Project Based",
      features: [
        "Senior Web / App Developer",
        "Senior Digital Marketing",
        "Senior Graphic Designer",
        "Limited Changes"
      ],
      price: "5,750 AED",
      className: "pr-column pr-one",
    },
    {
      icon: "/images/icon/icon_57.svg",
      plan: "Part Time",
      features: [
        "Senior Web / App Developer",
        "Senior Digital Marketing",
        "Senior Graphic Designer",
        "Ulimated Changes",
        "3 hours per day"
      ],
      price: "14,750 AED",
      className: "pr-column ",
    },
    {
      icon: "/images/icon/icon_58.svg",
      plan: "Full Time",
      features: [
        "Senior Web / App Developer",
        "Senior Digital Marketing",
        "Senior Graphic Designer",
        "Ulimated Changes",
        "Ulimated Technical Support",
        "Full day",
      ],
      price: "39,750 AED",
      className: "pr-column pr-two",
    },
  ];


  return (
    <div data-aos="fade-up">
      <div className="pricing-table-area-three mt-160 lg-mt-100 xs-mt-60 wow fadeInUp">
        <div className="tab-content">
          <div className="tab-pane show active" id="month">
            <div className="row gx-0 align-items-center">
              {plans.map((plan, index) => (
                <div className="col-lg-4 col-sm-6" key={index}>
                  <div className={`pr-column ${plan.className}`}>
                    <div className="plan tx-git-color">{plan.plan}</div>
                    <div className="pr-body">
                      <ul className="style-none text-start">
                        {plan.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pr-footer pt-45 lg-pt-30">
                      <div className="price tx-git-color mb-30">{plan.price}</div>
                      <Link href="#" 
                        data-bs-toggle="modal" 
                        data-bs-target="#contactModal" 
                        className="btn-twelve fw-500 tran3s"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* /.row */}
          </div>
          {/* /.tab-pane */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
