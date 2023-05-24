import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import './styles.css';

export default function ProductIn() {
  return (
    <>


    <form>

    <div class="grid grid-cols-5 gap-4">

        <div className="col-span-5 bg-white-900 border border-gray-500 rounded-lg shadow-xl p-4"> 
            {" "} 
            <div className='flex'>
                <h3 className="flex-row mc-breadcrumb-title font-bold text-2xl">
                    product upload
                </h3>
            </div>
        </div>

        <div className="col-span-3 bg-white-900 border border-gray-500 rounded-lg shadow-xl p-4">
            <div className='flex'>
                <h3 className="flex-row mc-breadcrumb-title font-bold text-2xl">
                    product upload
                </h3>
            </div>

            <label htmlFor="vpcase" style={{ textAlign: 'left' }}>
                    TITLE
            </label>

          <input
            type="text"
            id="vpcase"
            
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded"
            required
          >
              
            </input>

            <label htmlFor="vpcase" style={{ textAlign: 'left' }}>
                    DESCRIPTION
            </label>

          <textarea
            type="text"
            id="vpcase"
            
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded"
            required
          >
              
        </textarea>


        <div className='grid grid-cols-2 gap-4'>

            <div className='col-span-1'>
            <label htmlFor="vpcase" style={{ textAlign: 'left' }}>
                    CATAGORY
            </label>

          <input
            type="text"
            id="vpcase"
            
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded"
            required
          >
              
            </input>

            </div>

            <div className='col-span-1'>
            <label htmlFor="vpcase" style={{ textAlign: 'left' }}>
                    BRAND
            </label>

          <input
            type="text"
            id="vpcase"
            
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded"
            required
          >
              
            </input>

            </div>


            <div className='col-span-1'>
            <label htmlFor="vpcase" style={{ textAlign: 'left' }}>
                    REGULAR PRICE
            </label>

          <input
            type="text"
            id="vpcase"
            
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded"
            required
          >
              
            </input>

            </div>

            <div className='col-span-1'>
            <label htmlFor="vpcase" style={{ textAlign: 'left' }}>
                    DISCOUNT PRICE
            </label>

          <input
            type="text"
            id="vpcase"
            
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded"
            required
          >
              
            </input>

            </div>




            <div className='col-span-1'>
            <label htmlFor="vpcase" style={{ textAlign: 'left' }}>
                    SHIPPING FEE
            </label>

          <input
            type="text"
            id="vpcase"
            
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded"
            required
          >
              
            </input>

            </div>

            <div className='col-span-1'>
            <label htmlFor="vpcase" style={{ textAlign: 'left' }}>
                    TAX RATE
            </label>

          <input
            type="text"
            id="vpcase"
            
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded"
            required
          >
              
            </input>

            </div>

            <div className='col-span-2'>
            <label htmlFor="vpcase" style={{ textAlign: 'left' }}>
                    TAGS
            </label>

          <textarea
            type="text"
            id="vpcase"
            
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded"
            required
          >
              
        </textarea>

            </div>



        </div>





        </div>


        

        <div className="col-span-2 bg-white-900 border border-gray-500 rounded-lg shadow-xl p-4">
            
            <div className='flex'>
                <h3 className="flex-row mc-breadcrumb-title font-bold text-2xl">
                    organization
                </h3>
            </div>

            
            

                           
                
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900"> add category
</label>
        <div className="mt-2 flex">
        <input 
            id="email" 
            name="email" 
            type="email" 
            autoComplete="email" 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button 
            type="button" 
            className="ml-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            ADD
        </button>
        </div>

        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900"> add brand</label>
        <div className="mt-2 flex">
        <input 
            id="email" 
            name="email" 
            type="email" 
            autoComplete="email" 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button 
            type="button" 
            className="ml-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            ADD
        </button>
        </div>



        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">  add color</label>
        <div className="mt-2 flex">
        <input 
            id="email" 
            name="email" 
            type="email" 
            autoComplete="email" 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button 
            type="button" 
            className="ml-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            ADD
        </button>
        </div>


        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900"> add size </label>
        <div className="mt-2 flex">
        <input 
            id="email" 
            name="email" 
            type="email" 
            autoComplete="email" 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button 
            type="button" 
            className="ml-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            ADD
        </button>
        </div>
                
                


            
            
        </div>


        </div>
    </form>

   
  </>
  )
}