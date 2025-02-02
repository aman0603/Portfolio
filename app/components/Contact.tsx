"use client"

import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try{
      const response =await fetch("https://api.web3forms.com/submit",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "web3forms-api-key",
        },
        body: JSON.stringify({
          access_key:"d8d6d694-ecdb-40d6-a179-fb96c8ba421b",
          email: formData.email,
          name: formData.name,
          message: formData.message,
        }),
      })
    

    const result = await response.json()
    if(result.success){
      setSubmissionSuccess(true)
      setFormData({ name: "", email: "", message: "" })
    }else{
      setSubmissionSuccess(false)
    } 
  }
    catch(error){
      console.log("Error submitting the form:", error)
      setSubmissionSuccess(false)
    }
    finally{
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          I'm currently open for new opportunities. Whether you have a question or just want to say hi, feel free to
          reach out!
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="mailto:amanpaswan464@gmail.com"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
            amanpaswan464@gmail.com
          </a>
          <a
            href="https://github.com/aman0603"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub Profile
          </a>
          <a
            href="https://www.linkedin.com/in/aman-paswan-0b06311bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn Profile
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 text-white rounded-xl bg-blue-500  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
           {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {submissionSuccess && <p className="mt-4 text-green-500">Message sent successfully!</p>}
        {!submissionSuccess && submissionSuccess !== false && <p className="mt-4 text-red-500">Failed to send the message. Please try again.</p>}
      </div>
    </div>
  )
}

export default Contact

