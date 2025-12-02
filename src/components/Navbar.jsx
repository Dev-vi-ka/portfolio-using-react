export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 sticky top-0 shadow-sm z-50 bg-white">
      <div className="max-w-6xl mx-auto p-4 flex flex-cols justify-between items-center">
        <h1 className="text-xl font-bold yellow">WEB DEVELOPER</h1>

        <div className="space-x-6">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
        <button type="button" className="text-white bg-yellow-500 box-border border rounded border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Hire Me</button>
        
      </div>
    </nav>
  );
}
