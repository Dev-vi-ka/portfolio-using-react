export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div>
        <img src="https://dev-vi-ka.github.io/cuate.png" alt="Hero Image" className="w-1vh mx-auto mb-6" />
      </div>
      <div className="max-w-3xl text-left">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Devika</h1>
        <p className="mt-4 text-lg text-gray-600 ">
          Web Developer | Tech Enthusiast | Community Builder
        </p>
        <p className="">A first-year BCA student with a fervent passion for web design and development. This portfolio showcases my coding, web development, and design projects, offering a glimpse into my journey as a budding tech enthusiast.
Ready to explore? Let's connect and create something amazing together!</p>

        <div className="mt-6 space-x-4">
          <a href="#contact" className="px-6 py-3 bg-yellow-600 text-white rounded-lg">Hire Me</a>
          <a href="/resume.pdf" className="px-6 py-3 border border-yellow-600 text-yellow-600 rounded-lg">View Resume</a>
        </div>
      </div>
    </section>
  );
}
