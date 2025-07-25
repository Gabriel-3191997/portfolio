import React from 'react'

class Nav extends React.Component{

	render(){

		return(

			<>
				

<nav class="bg-white border-gray-200 dark:bg-transparent">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        {/*<img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />*/}
        <span class="self-center text-2xl font-semibold uppercase ml-2 whitespace-nowrap dark:text-white">portfolio</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-none rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700 mr-2">
  <li>
    <a href="#" class="block py-2 px-3 text-white rounded-sm md:p-0 dark:text-white md:dark:text-white hover:text-blue-700" aria-current="page">Home</a>
  </li>
  <li>
    <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">About</a>
  </li>
  <li>
    <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">Services</a>
  </li>
  <li>
    <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">Blog</a>
  </li>
  <li>
    <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">Projects</a>
  </li>
  <li>
    <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500">Contact</a>
  </li>
</ul>

    </div>
  </div>
</nav>

			</>

			)
	}
}

export default Nav