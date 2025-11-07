import { ChevronDown, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import logo from "../img/logo.png"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [pathname, setPathname] = useState("/")

  useEffect(() => {
    setPathname(window.location.pathname)

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const services = [
    { name: "Software Development", href: "/services/software-development" },
    { name: "Web Design & Development", href: "/services/web-design" },
    { name: "Mobile Development", href: "/services/mobile-development" },
    { name: "Automation", href: "/services/automation" },
    { name: "Consulting", href: "/services/consulting" },
    // { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    // { name: "Cybersecurity", href: "/services/cybersecurity" },
  ]

  const linkBase = "text-gray-300 hover:text-blue-400 transition-colors font-medium"
  const isActive = (href: string) => (pathname === href ? "text-white" : "")

  return (
    <>
      {/* Optional spacer to ensure content never “jumps under” the fixed nav */}
      <div aria-hidden className="h-20 md:h-20" />

      <nav
        className={[
          "fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl top-4",
          "transition-[background-color,box-shadow,transform,opacity] duration-300 will-change-transform",
          isScrolled
            ? "bg-[#1a1a2e]/95 backdrop-blur-md shadow-xl rounded-md md:rounded-full scale-100 opacity-100"
            : "bg-[#1a1a2e]/90 backdrop-blur-sm shadow-xl rounded-md md:rounded-full scale-[0.995] opacity-95"
        ].join(" ")}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative w-32 h-3w-32">
               <img src={logo.src} alt="" />
              </div>
              {/* <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                MOTOWN TECH
              </span> */}
            </a>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className={`${linkBase} ${isActive("/")}`}>Home</a>
              <a href="/about" className={`${linkBase} ${isActive("/about")}`}>About</a>

              {/* Services */}
                <div className="relative group">
                    {/* Trigger */}
                    <a
                        href="/services"
                        className={`${linkBase} inline-flex items-center gap-1`}
                        aria-haspopup="menu"
                    >
                        Services
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </a>

                    {/* Hover bridge: keeps hover alive between button and menu */}
                    <span
                        aria-hidden
                        className="absolute left-0 right-0 top-full h-3
                                opacity-0 group-hover:opacity-100
                                pointer-events-none group-hover:pointer-events-auto"
                    />

                    {/* Menu */}
                    <div
                        role="menu"
                        className="absolute top-full left-0 mt-2 w-64 bg-[#1a1a2e] rounded-lg shadow-xl
                                border border-gray-800 py-2
                                opacity-0 translate-y-1
                                invisible pointer-events-none
                                transition-all duration-150
                                group-hover:opacity-100 group-hover:translate-y-0
                                group-hover:visible group-hover:pointer-events-auto
                                group-focus-within:opacity-100 group-focus-within:translate-y-0
                                group-focus-within:visible group-focus-within:pointer-events-auto"
                    >
                        {services.map((s) => (
                        <a
                            key={s.href}
                            href={s.href}
                            className={`block px-4 py-2 hover:text-blue-400 hover:bg-[#0a0a0f] transition-colors ${
                            pathname === s.href ? "text-white" : "text-gray-300"
                            }`}
                        >
                            {s.name}
                        </a>
                        ))}
                    </div>
                </div>


              <a href="/contact" className={`${linkBase} ${isActive("/contact")}`}>Contact</a>
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors font-medium">
                Get Started
              </a>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-800">
              <div className="flex flex-col gap-4">
                <a href="/" className={linkBase} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="/about" className={linkBase} onClick={() => setIsMobileMenuOpen(false)}>About</a>

                <div>
                  <button
                    onClick={() => setIsServicesOpen((v) => !v)}
                    className={`${linkBase} w-full inline-flex items-center gap-1`}
                    aria-expanded={isServicesOpen}
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {services.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          className="text-gray-400 hover:text-blue-400 hover:bg-[#0a0a0f] hover:shadow-md rounded-md transition-colors text-sm p-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {s.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a href="/contact" className={linkBase} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>

                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors font-medium text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
