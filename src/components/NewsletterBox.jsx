
function NewsletterBox() {

    const onsubmitHandler = (event) => {
        event.preventDefault();
 }

  return (
    <div className="text-center">
      <p className="text-semibold text-2xl text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        onSubmit={onsubmitHandler}
        className='="w-full sm:w-1/2 flex items-center gap-3 m-auto my-6 border pl-3'
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="border w-[28%] border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsletterBox