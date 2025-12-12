export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 px-6 md:py-20 md:px-16 flex flex-col md:flex-row items-center gap-10"
    >
      {/* IMAGE */}
      <img
        src="https://dev-vi-ka.github.io/cuate%20contact.jpg"
        alt="Contact"
        className="w-full md:w-1/2 rounded-lg object-cover"
      />

      {/* TEXT + FORM */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl sm:text-sm md:text-6xl font-bold text-yellow-500 mb-4">
          Get in Touch
        </h2>

        {/* FORM */}
        <form action="https://getform.io/f/bolqglqa" method="POST"
        className="max-w-md w-full space-y-5">
          {/* Name */}
          <div className="relative z-0 w-full group">
            <input name="name"
              type="text"
              required
              placeholder="Your Name"
              className="peer block py-2.5 w-full bg-transparent border-b-2 border-gray-400 focus:border-black outline-none"
            />
            
          </div>

          {/* Email */}
          <div className="relative z-0 w-full group">
            <input
              type="email" name="email"
              required
              placeholder="Email address"
              className="peer block py-2.5 w-full bg-transparent border-b-2 border-gray-400 focus:border-black outline-none"
            />
            
          </div>

          {/* Message */}
          <div className="relative z-0 w-full group">
            <textarea name="message"
              required
              placeholder="Your Message"
              className="peer block py-2.5 w-full bg-transparent border-b-2 border-gray-400 focus:border-black outline-none resize-none h-32"
            />
           
          </div>

          <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
