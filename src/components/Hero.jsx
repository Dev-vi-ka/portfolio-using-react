export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center bg-gray-50 px-6 py-12 gap-10"
    >
      {/* TEXT */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Hi, I'm Devika
        </h1>

        <p className="mt-3 text-base sm:text-lg text-gray-700">
          Web Developer | Tech Enthusiast | Community Builder
        </p>

        <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          A first-year BCA student passionate about web design, development, and
          community building. This portfolio highlights my projects and the
          journey shaping me into a budding tech creator. Let’s connect and
          build something impactful together!
        </p>

        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 gap-4 sm:gap-0 justify-center lg:justify-start">
          <a
            href="https://www.linkedin.com/in/-devikaanil/"
            className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-medium"
          >
            Hire Me
          </a>
          <a
            href="/Devika Anil - Resume.pdf" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 border border-yellow-600 text-yellow-600 rounded-lg font-medium"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center">
        <img
          src="https://dev-vi-ka.github.io/cuate.png"
          alt="Hero Image"
          className="w-56 sm:w-72 md:w-96 lg:w-[28rem] object-contain"
        />
      </div>
    </section>
  );
}


