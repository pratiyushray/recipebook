import React from 'react'
import Search from './Search'

function OnlineTutorials() {
  return (
    <>
    <Search/>

    <div className="sm:flex sm:flex-col  md:flex-col md:inline-grid md:grid-cols-2 md:gap-5 lg:inline-grid lg:grid-cols-3 lg:gap-5 xl:inline-grid xl:grid-cols-3 xl:gap-5 2xl:inline-grid 2xl:grid-cols-4 2xl:gap-5">
      {/* First Div  */}
      <div className="container flex flex-col w-40 flex-wrap mt-10 ml-10 mr-40">
        <iframe src="https://www.youtube.com/embed/fo_If5EpwZs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br />
        <div className="card-body">
          <h5 className="card-title text-white font-bold">Crème Caramel</h5>
          <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button class="transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
   Explore More
</button>
        </div>
      </div>
        {/* Second Div  */}
        <div className="container flex flex-col w-40 flex-wrap mt-10 ml-10">
        <iframe src="https://www.youtube.com/embed/_wIEVElP8Cw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br />
        <div className="card-body">
          <h5 className="card-title text-white font-bold">Cheese Cake</h5>
          <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button class="transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
   Explore More
</button>
        </div>
      </div>
        {/* Third Div  */}
        <div className="container flex flex-col w-40 flex-wrap mt-10 ml-10">
        <iframe src="https://www.youtube.com/embed/DtfwHUiCLag" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br />
        <div className="card-body">
          <h5 className="card-title text-white font-bold">The Pizza Challenge</h5>
          <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button class="transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
   Explore More
</button>
        </div>
      </div>

        {/* Fourth Div  */}
        <div className="container flex flex-col w-40 flex-wrap mt-10 ml-10">
        <iframe src="https://www.youtube.com/embed/eFS8orlJpfg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br />
        <div className="card-body">
          <h5 className="card-title text-white font-bold">Canadian Burger</h5>
          <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button class="transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
   Explore More
</button>
        </div>
      </div>

        {/* Fifth Div  */}
        <div className="container flex flex-col w-40 flex-wrap mt-10 ml-10">
        <iframe src="https://www.youtube.com/embed/m46iXKv5HeU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br />
        <div className="card-body">
          <h5 className="card-title text-white font-bold">Maki Sushi Rolls</h5>
          <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button class="transition mt-4 px-3 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
   Explore More
</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default OnlineTutorials