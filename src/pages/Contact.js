import Herotext from "../components/Herotext";
const Contact = () => {
  const couses = [
    {
      title: "1 What are the different ways to manage a state in a React application?",
      desc: " On theroute, create a form that will have fields for product name, price, condition type(excellent, good, fair), mobile number, location (Chittagong, Dhaka, etc.), product category (every product should be under a category), description, price, Year of purchase and other relevant information. After submitting the form, a modal/toast with a message will pop up to inform the user. Please remember, they must be a seller to add a product (think about the verification process for the admin access). After adding the product, you will then be redirected to the My Products Page.",
      phn: "1800 123 4567",
    },
    {
      title: "2 How does prototypical inheritance work?",
      desc: "We take customer satisfaction seriously and strive to address any complaints in a timely and efficient manner",
      phn: "1800 123 4567",
    },
    {
      title: "3 What is a unit test? Why should we write unit tests?",
      desc: "Hassle-free returns and exchanges. We understand that sometimes products just don't work out. ",
      phn: "1800 123 4567",
    },
    {
      title: "4 React vs. Angular vs. Vue?",
      desc: "Our marketing team works collaboratively with businesses to help them grow and succeed",
      phn: "1800 123 4567",
    },
  ];
  return (
    <section>
      <div className="py-16 ">
        <h2 className="text-5xl text-gray-700 font-semibold text-center pb-5 ">
          Blogs
        </h2>
        <div className="flex-row w-[85%] mx-auto gap-5  py-10 px-0">
          {couses &&
            couses.map((cause) => {
              return (
                <div className="text-left bg-gray-50 rounded-lg flex flex-col gap-3 py-10 px-5">
                  <h3 className="text-gray-900 font-semibold text-2xl">
                    {cause.title}
                  </h3>
                  <p className="text-lg text-justify pl-8 pr-8 text-gray-700">{cause.desc}</p>
                  <a
                    href={`tel:${cause.phn}`}
                    className="text-sky-500 font-semibold text-xl"
                  >
                    {cause.phn}
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
