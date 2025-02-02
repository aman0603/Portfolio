const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-8">
      <div className="container mx-auto px-4 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Aman Paswan. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a
            href="https://github.com/aman0603"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aman-paswan-0b06311bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            LinkedIn
          </a>
          <a href="mailto:aman@example.com" className="text-blue-500 hover:text-blue-600">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

