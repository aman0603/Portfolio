// styles.ts
export const headerStyles = {
    header: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm",
    headerScrolled: "py-2 bg-white/90 dark:bg-black/90 shadow-md",
    headerDefault: "py-4 bg-white/80 dark:bg-black/80",
    nav: "container mx-auto px-4 flex justify-between items-center",
    logo: "text-2xl font-bold transition-all duration-300 hover:text-blue-500",
    navLink: "hover:text-blue-500 transition-colors relative after:content-[''] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 after:bg-blue-500 after:transition-all hover:after:w-full",
    button: "p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors",
    mobileMenu: "fixed inset-0 z-40 bg-white dark:bg-gray-900 md:hidden flex flex-col mobile-menu-container",
    mobileHeader: "h-20 flex items-center justify-between px-4",
    mobileNav: "flex flex-col h-full",
    mobileList: "flex flex-col items-center justify-center flex-grow gap-6 text-xl py-8",
    mobileLink: "block py-4 w-full text-center text-2xl font-medium hover:text-blue-500 transition-all border-b border-gray-200 dark:border-gray-700",
    mobileContactLink: "block py-4 w-full text-center text-2xl font-medium hover:text-blue-500 transition-all",
    mobileFooter: "flex justify-center pb-8 mt-auto",
    closeButton: "flex items-center justify-center px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
  } as const;