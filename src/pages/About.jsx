import NewsletterBox from "../components/NewsletterBox";

function About() {
  return (
    <>
      <div className="text-center  pt-8 border-t text-2xl">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500 text-3xl">About</p>
          <p className="text-gray-800 text-3xl">Us</p>
          <span className="sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></span>
        </div>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] hover:transform hover:scale-110 transition-all ease-in-out duration-300 shadow-sm"
          src="	https://foreverbuy.in/assets/about_img-BAJyTXw9.png"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="text-gray-500">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="text-gray-600 mt-5 ">
            Since our inception, we&apos;ve worked tirelessly to curate a
            diverse selection of high-quality products that cater to every taste
            and preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <p className="text-gray-800 mt-5 font-semibold ">Our Mission</p>
          <p className="text-gray-600 mt-5 ">
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We&apos;re dedicated to providing a
            seamless shopping experience that exceeds expectations, from
            browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div
        className=" py-16
       text-gray-800 pt-8 border-t text-2xl"
      >
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-400">Why</p>
          <span className="text-gray-800">CHOOSE US</span>
          <span className="sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></span>
        </div>
      </div>

      <div className="flex md:flex-row text-sm mb-20 ">
        <div className="border  p-16">
          <b className="font-semibold">Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border  p-16">
          <b className="font-semibold">Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border  p-16">
          <b className="font-semibold">Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </>
  );
}

export default About;
