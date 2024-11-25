

export default function Footer() {
  return (
      <footer className="bg-white shadow dark:bg-gray-900">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <a href="/"
                     className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                      <img src="/logo_Regionathon.png" className="h-12" alt="Regionathon Logo"/>
                  </a>
                  <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
                      href="/" className="hover:underline">UQBAR™</a>. Todos los derechos reservados.</span>
                  <a href="https://www.instagram.com/uqbarun/" target="_blank" rel="noopener noreferrer"
                     className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                      <img src="/logo_uqbar.png" className="h-16" alt="Regionathon Logo"/>
                  </a>
              </div>

          </div>
      </footer>


  );
}