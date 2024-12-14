import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="container mx-auto flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-xl w-full">
        <img className='text-center mb-5' src='' alt="logo image" />
        <h2 className="text-2xl font-bold mb-6 text-center text-violet-500">Contact Us</h2>
        <form> <div className="mb-4">
          <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="name"> Name</label>
          <input id="name" type="text" className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
        </div> <div className="mb-4">
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email"> Email</label>
            <input id="email" type="email" className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="message"> Message</label>
            <textarea id="message" className="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message" rows="5" >
            </textarea>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-violet-700 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" > Send </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact