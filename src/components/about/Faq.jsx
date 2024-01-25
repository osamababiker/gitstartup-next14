const accordionItems = [
  {
    id: 1,
    title: "Who We Are & What We're Doing?",
    content:
      "Git Startup is a dynamic marketing agency located in Abu Dhabi, specializing in helping innovative startups grow through comprehensive development and marketing services. With a focus on technical support, digital marketing, and creating vibrant social media presences, Git Startup aims to be the leading force in the startup ecosystem. Financial projections are positive, with robust revenue growth expected.",
  },
  {
    id: 2,
    title: "We Understand How Startups Work",
    content:
    "At Git Startup, we deeply understand the unique dynamics and challenges of startup environments. Our team, equipped with extensive experience in the tech industry, is attuned to the fast-paced and often unpredictable nature of startup growth. We recognize that agility, adaptability, and innovation are the cornerstones of a successful startup, and our services are tailored to enhance these qualities in your venture. By partnering with us, you gain not just technical expertise but a collaborative ally who is committed to nurturing your startup's potential, helping you navigate the technological landscape with ease, and laying a robust foundation for your business to thrive and scale.",
  },
  {
    id: 3,
    title: "More than Agency, We're Partner",
    content:
    "At Git Startup, we're not just an agency; we're your partners in the journey of innovation and growth. Our commitment goes beyond mere technical assistance. We immerse ourselves in the heart of your startup, understanding your vision, challenges, and goals. Our team of skilled professionals stands ready to support you in every step of the technical process, from initial brainstorming to the final stages of development and deployment. We don't just offer solutions; we build lasting relationships, ensuring your startup has the robust technical foundation it needs to thrive in today's competitive landscape. With Git Startup, you're gaining more than services; you're gaining a partner invested in your success.",
  },
  {
    id: 4,
    title: "What services can we offer?",
    content:
      "At Git Startups, we specialize in assisting startups with their technical needs, offering a comprehensive range of services to foster their growth and online presence. Our expertise encompasses web development, ensuring sleek, user-friendly websites; mobile app development, creating engaging and functional applications for both iOS and Android platforms; and WebGL and 3D modeling, bringing cutting-edge visual experiences to life. Additionally, we excel in social media management, helping brands establish a robust online presence; digital marketing, to effectively reach target audiences; content writing, crafting compelling narratives that resonate with readers; and Search Engine Optimization (SEO), optimizing online content for maximum visibility and reach. With our diverse suite of services, we are equipped to meet the multifaceted technical demands of modern startups.",
  },
  {
    id: 5,
    title: "Let's bring your Idea's to the world ",
    content:
      "Our team of experts is dedicated to transforming your vision into a digital reality, ensuring your ideas not only take flight but soar in the competitive marketplace. If you're ready to bring your ideas to the world with a reliable, skilled, and enthusiastic technical partner, reach out to us. Let's collaborate to make your entrepreneurial dreams a reality!",
  },
 
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-two md-mt-60" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 1 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 1 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
