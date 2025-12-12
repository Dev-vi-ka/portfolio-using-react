export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <h1 className="text-xl font-bold text-yellow-600">
          WEB DEVELOPER
        </h1>

        {/* NAV LINKS */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-yellow-600 duration-200">Home</a>
          <a href="#about" className="hover:text-yellow-600 duration-200">About</a>
          <a href="#contact" className="hover:text-yellow-600 duration-200">Contact</a>
        </div>

        {/* CTA BUTTON */}
        <a href="https://www.linkedin.com/in/-devikaanil/"><button 
          type="button"
          className="hidden md:block bg-yellow-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-yellow-600 duration-200"
        >
          Hire Me
        </button></a>
        
      </div>
    </nav>
  );
}
