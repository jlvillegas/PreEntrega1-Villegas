import CartWidget from "./CartWidget"

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4" >
      <div className="max-w-4xl mx-auto flex items-center justify-between">
       <div className="" >
      <nav >
        <ul className=" flex space-x-4 hover:text-gray-300 text- ml-auto " >
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/acerca">Acerca de</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
      </div>
      <CartWidget className="w-6 h-6 mr-auto"/>
    
      </div>
      
      
    </header>
    
  )
}

export default Header