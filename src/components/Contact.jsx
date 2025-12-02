export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-16 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Image */}
      <img
        src="https://dev-vi-ka.github.io/cuate%20contact.jpg"
        alt="Contact"
        className="w-full md:w-1/2 rounded-lg"
      />

      {/* Content */}
      <div className="md:w-1/2">
        {/* Heading */}
        <h2 className="text-6xl font-bold text-left text-yellow-500">
          Get in Touch
        </h2>

        {/* Form */}
        <form className="max-w-md mt-10">

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:border-yellow-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:border-yellow-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
            >
              Your Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <textarea
              id="floating_message"
              rows="3"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:border-yellow-500 peer"
              placeholder=" "
              required
            ></textarea>
            <label
              htmlFor="floating_message"
              className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-yellow-500 hover:bg-yellow-600 transition font-medium rounded-lg text-sm px-6 py-3 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
