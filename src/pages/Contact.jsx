import NewsletterBox from "../components/NewsletterBox";

function Contact() {
  return (
    <>
      <div className="text-center  pt-8 border-t text-2xl">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500 text-3xl">Contact</p>
          <p className="text-gray-800 text-3xl">Us</p>
          <span className="sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></span>
        </div>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] hover:transform hover:scale-110 transition-all ease-in-out duration-300 shadow-sm"
          src="	https://foreverbuy.in/assets/contact_img-CyOum2vk.png"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="text-gray-700 text-xl font-semibold">Our Store</p>
          <p className="text-gray-500">
            14 ground Floor
            <br />
            Near Dream Homes, Mohali, India
          </p>
          <p className="text-gray-500">
            Tel: 8125498765
            <br />
            Email: loki123@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-700">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border w-[28%] border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore More
          </button>
        </div>
      </div>
      <NewsletterBox />
    </>
  );
}

export default Contact