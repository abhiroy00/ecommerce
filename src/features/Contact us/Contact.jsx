import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-10">
    <div className="container mx-auto flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-xl w-full">
      <h1 className='text-[4vh] lg:text-5xl text-amber-400 text-center mb-4'><span className="text-white">Quick</span>Buy</h1>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Us</h2>
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
            <button type="submit" className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" > Send </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact