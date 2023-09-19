import navLinks from '../assets/nav-links'
import { NavLink } from "react-router-dom";

type TProps = {
  isSidebarOpen: Boolean
}

const Sidebar = ({isSidebarOpen}:TProps) => {
  return (
    <aside className={`${isSidebarOpen ? 'w-1/5' : 'w-0'} py-10 overflow-hidden bg-background-alt text-secondary-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all`}>
      <h3 className="uppercase font-bold text-center text-4xl tracking-wide">
        ecomvision
      </h3>
      <nav className="mt-12 flex flex-col items-center">
        {navLinks.map(({title, links}) => {
          return (
            <div className="mb-8 w-full">
              {title !== 'Home' &&  <h4 className="font-semibold px-16 text-2xl mb-3">{title}</h4>}
              {links.map(({text, Icon}) => {
                return (
                  <ul>
                    <li className='w-full' >
                      <NavLink to={text} className="flex gap-6 items-center px-16 py-4 capitalize">
                        <Icon/>
                        <span>{text}</span>
                      </NavLink>
                    </li>
                  </ul>
                )
              })}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
