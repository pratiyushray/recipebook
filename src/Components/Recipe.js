import React from 'react';
import './Recipe.css';
import Search from './Search';
import axios from "axios";


const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {from: '0', size: '20', tags: 'under_30_minutes'},
    headers: {
        'X-RapidAPI-Key': 'fd4e839c6cmsh1d82410c6fabaf8p1b4328jsn6c3f249c904a',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};

// const [datastore, useDatastore]=useState("");
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

function Recipe() {
  return (
    <>
    <Search/>

    <div className="container px-3 flex flex-row flex-wrap space-y-3 xl:space-x-20 xl:pb-10 sm:pb-10">
      {/* First Card Div  */}
      <div id="recipeCard" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 xl:mt-3 xl:ml-20">
          <a href="/">
              <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div className="p-5">
              <a href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="/" className="inline-flex items-center transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 text-white hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </div>

      {/* Second Card Div  */}
      <div id="recipeCard" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
              <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div className="p-5">
              <a href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="/" className="inline-flex items-center transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 text-white hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </div>

      {/* Third Card Div  */}
      <div id="recipeCard" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
              <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div className="p-5">
              <a href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="/" className="inline-flex items-center transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 text-white hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </div>

      {/* Fourth Card Div  */}
      <div id="recipeCard" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
              <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div className="p-5">
              <a href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="/" className="inline-flex items-center transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 text-white hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </div>

      {/* Fifth Card Div  */}
      <div id="recipeCard" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
              <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div className="p-5">
              <a href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="/" className="inline-flex items-center transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 text-white hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </div>

      {/* Sixth Card Div  */}
      <div id="recipeCard" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
              <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div className="p-5">
              <a href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="/" className="inline-flex items-center transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 text-white hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </div>

      {/* Seventh Card Div  */}
      <div id="recipeCard" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
              <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div className="p-5">
              <a href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="/" className="inline-flex items-center transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 text-white hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </div>

      {/* Eight Card Div  */}
      <div id="recipeCard" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
              <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div className="p-5">
              <a href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="/" className="inline-flex items-center transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 text-white hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </div>

      {/* Ninth Card Div  */}
      <div id="recipeCard" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
              <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div className="p-5">
              <a href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="/" className="inline-flex items-center transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 text-white hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </div>

      {/* Tenth Card Div  */}
      <div id="recipeCard" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
              <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div className="p-5">
              <a href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="/" className="inline-flex items-center transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 text-white hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </div>

    </div>
    </>
  )
}

export default Recipe