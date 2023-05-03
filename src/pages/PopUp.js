import React, { useState } from 'react';
import Modal from 'react-modal';

const PopupForm = (prop) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>BOOK NOW</button>
      <Modal isOpen={isOpen} onRequestClose={handleCloseModal} className="flex items-center justify-center">
        
        
        <form className="bg-white rounded-lg shadow-lg p-6 w-300 h-300 relative">
        
      <div className="flex flex-col mt-4">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

            

            <div className="flex flex-row p-2">
            <span className="p-4 w-full">Product Name:</span>
            <text className="p-4 w-full">{prop.name}</text>
          
            </div>

            <div className="flex flex-row p-2">
            <span className="p-4 w-full">Product Price:</span>
            <text className="p-4 w-full">{prop.price}</text>
          
            </div>

            <div className="p-2">
            
            
          <input
            type="text"
            id="vpcase"
            placeholder='phone number'
            
            className="shadow-sm p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded"
            required
          >
            
            </input>
            </div>
            <div className="p-2">
            <input
            type="text"
            id="vpcase"
            placeholder='meeting location'
            className="shadow-sm p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded"
            required
          >
              
            </input>
            </div>




            <div className="flex flex-row-reverse">
            <button 
            type="button" 
            className="ml-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            SUBMIT
        </button>

            </div>
          
            
          </div>
          </div>
          </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};


  export default PopupForm;