import React from 'react'

function Modal({ experience, onClose }) {
  return (
    <div className="fixed inset-0  bg-black/60 h-screen backdrop-blur-sm flex items-center justify-center p-4  mx-auto ">
      <div className="overlay-content rounded-lg shadow-lg pb-10 pt-3 max-w-4xl p-4" style={{ background: experience.thumbnail }}>
        
        <button onClick={onClose} className="float-right text-gray-300 hover:text-white transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="mt-4 ml-2">
             
          <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
          <p className="text-gray-300 mb-4">{experience.company}</p>
          <div className="flex items-center text-gray-400 mb-4">
            <span className="mr-4">{experience.location}</span>
            <span>{experience.duration}</span>
          </div>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {experience.achievements.map((achievement, index) => (
              <li className='pb-4' key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Modal