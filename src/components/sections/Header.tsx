export default function Header() {
  return (
    <header className="fixed w-full bg-purple-900/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">WEALTH ACCELERATOR</div>
        <div className="flex gap-4">
          <a 
            href="https://t.me/+9Jq-Eb18NuQ1MDI8" 
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-2 rounded-full font-semibold hover:opacity-90 transition text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join  
          </a>
        </div>
      </nav>
    </header>
  );
}