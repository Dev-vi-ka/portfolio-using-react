export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 px-6 sm:px-10 lg:px-16">
      
      {/* HEADING + CLOCK */}
      <div className="relative mb-16">
        <img
          className="absolute bottom-0 left-0 w-28 sm:w-36 lg:w-44 opacity-80 pointer-events-none"
          src="https://dev-vi-ka.github.io/Clock.png"
          alt=""
        />

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold pl-14 sm:pl-20 relative z-10">
          <span className="text-yellow-500">About</span> Me
        </h2>

        <p className="pl-14 sm:pl-20 mt-2 text-gray-600 relative z-10">
          Crafting Digital Experiences
        </p>
      </div>

      {/* CONTENT ROW */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">

        {/* TEXT */}
        <div className="text-gray-700 leading-relaxed md:w-1/2">

          {/* Short text for small screens */}
          <p className="block lg:hidden">
            I’m a designer–developer hybrid who builds clean, functional, and 
            visually thoughtful digital experiences. My work blends UI/UX, 
            frontend engineering, and automation experiments.
          </p>

          {/* Full text for large screens */}
          <div className="hidden lg:block">
            <p>
              As a multifaceted individual deeply entrenched in the realms of technology,
              I thrive on the intersection of creativity and functionality. With a keen eye
              for detail and a passion for crafting seamless user experiences, I've
              ventured into various domains within the tech industry. As a UI/UX designer,
              I strive to breathe life into digital spaces, ensuring that every pixel serves
              a purpose and resonates with users.
            </p>

            <p className="mt-4">
              Moreover, my journey into frontend development allows me to translate design
              visions into interactive interfaces. Beyond design and development, I've
              explored automation and web scraping using Python—finding innovative ways to
              streamline processes and extract insights from the web. Every project fuels
              my curiosity and keeps me evolving in this fast-paced digital world.
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <img
          src="https://dev-vi-ka.github.io/cuateabout.png"
          alt="Profile"
          className="w-64 sm:w-72 lg:w-96 md:w-1/2 object-contain"
        />
      </div>
    </section>
  );
}
