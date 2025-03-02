// Header.tsx
"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "../providers/theme-provider"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { headerStyles as styles } from "../../styles/styles"


interface ThemeContext {
  theme: "light" | "dark"
  toggleTheme: () => void
}

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme() as ThemeContext
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element).closest('.mobile-menu-container')) setIsOpen(false)
    }
    const handleEscape = (e: KeyboardEvent) => { if (isOpen && e.key === 'Escape') setIsOpen(false) }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)
  const navItems: string[] = ["about", "skills", "projects", "contact"]
  const liVariants: Variants = { 
    open: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }, 
    closed: { y: 20, opacity: 0 } 
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : styles.headerDefault}`}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.logo}>Portfolio</a>

        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <li key={item}>
              <a href={`#${item}`} className={styles.navLink}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <motion.button 
            onClick={toggleTheme} 
            className={styles.button} 
            whileTap={{ scale: 0.9 }} 
            whileHover={{ rotate: 15, scale: 1.1 }}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-700" />}
          </motion.button>

          <motion.button 
            onClick={toggleMenu} 
            className={`block md:hidden ${styles.button}`} 
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.mobileMenu} 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "100vh" }} 
            exit={{ opacity: 0, height: 0 }} 
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileHeader}>
              <a href="#home" className={styles.logo}>Portfolio</a>
              <motion.button onClick={toggleMenu} className={styles.button} whileTap={{ scale: 0.9 }}>
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <div className={styles.mobileNav}>
              <motion.ul 
                className={styles.mobileList} 
                initial="closed" 
                animate="open" 
                variants={{ 
                  open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }, 
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {navItems.map((item, i) => (
                  <motion.li key={item} variants={liVariants} className="w-full px-6">
                    <a 
                      href={`#${item}`} 
                      className={i === 3 ? styles.mobileContactLink : styles.mobileLink} 
                      onClick={toggleMenu}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div 
                className={styles.mobileFooter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  onClick={toggleMenu}
                  className={styles.closeButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5 mr-2" />
                  Close Menu
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header