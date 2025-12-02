export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 px-16">
      
        <div className="relative">
            <img className="absolute bottom-1 left-0 z-0 w-40" src="https://dev-vi-ka.github.io/Clock.png" alt="" />
            <h2 className="text-6xl font-bold -mt-12 text-left Z-10 relative pl-20">
          <span className="text-yellow-500">About</span> Me
        </h2>
        <p className="pl-20 z-10 relative">Crafting Digital Experiences</p>
        </div>
        

        <div className="flex flex-col md:flex-row items-center gap-10">
          

          {/* Text */}
          <div className="text-gray-700 leading-relaxed">
            <p>
              As a multifaceted individual deeply entrenched in the realms of technology, I thrive on the intersection of creativity and functionality. With a keen eye for detail and a passion for crafting seamless user experiences, I've ventured into various domains within the tech industry. As a UI/UX designer, I strive to breathe life into digital spaces, ensuring that every pixel serves a purpose and resonates with users on a profound level. Simultaneously, my journey as a digital marketer has honed my ability to leverage digital platforms to engage audiences and drive impactful results.
            </p>

            <p className="mt-4">
              oreover, my foray into frontend development has allowed me to translate my design visions into interactive and responsive web experiences. Beyond the conventional realms of design and development, I've delved into the fascinating world of automation and web scraping with Python, exploring innovative solutions to streamline processes and extract valuable insights from the vast expanse of the web. With each project, I embark on a journey of discovery, fueled by an insatiable curiosity and a relentless pursuit of excellence in the ever-evolving landscape of technology.
            </p>
          </div>
            {/* Image */}
          <img 
            src="https://dev-vi-ka.github.io/cuateabout.png" 
            alt="Profile"
            className=""
          />
        </div>

    </section>
  );
}
