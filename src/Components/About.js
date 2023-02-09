import React from 'react';
import burger from '../assets/burgerIcon.png';

function About() {
  return (
    <>
    <div className='flex flex-col items-center mt-4'>
    <h1 class="mb-8 text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50"><span>Explore</span> <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-400 to-purple-500 lg:inline">Learn</span> <span>Build 🚀</span></h1>
    <hr className='mt-0'/>
    </div>
    <div className='text-white w-5/10 2xl:flex 2xl:flex-row 2xl:items-center pl-4 pr-4 pt-4 pb-4 bg-gray-900'>
    <div className='pl-10'>
        <h1 className='text-6xl font-bold'>About Us</h1>
        <hr />
        <br />
        <h2 className='text-4xl font-bold'>Namaste</h2>
        <br />
        <p className="font-medium">We are glad that you are here and thank you for stopping by on Dassana’s Veg Recipes – a blog which has pure vegetarian recipes, mostly Indian but some World Cuisine as well. There are many Eggless Baking Recipes as well.Most of the recipes are in step by step pictorial guide.
        <br />
         They are easy to understand and relate too. Some recipes have short videos with the stepwise photo guide.</p>
    <br />

    <h1 className='text-4xl font-bold'>More About The Blog</h1>
      <br />
      <p className="lead"> started vegrecipesofindia.com in February 2009 to keep a log (online journal) of my family recipes and the ones which I had developed back then along with the recipes I was trained in.
      <br />
      <br />
        Initially our brand name was “Veg Recipes of India” which we later changed in June 2020 to “Dassana’s Veg Recipes“. This brand change was made to broaden our vision of sharing vegetarian recipes from all over the world and not just specific to Indian cuisine.
        I have been sharing global recipes right from day one when I started with the blog. But we felt that since I was trained professionally in cooking, baking, confectionary and having experience of International as well as Indian cuisine, it was time to showcase that on the blog.
        <br />
        <br />
        You see I have done my graduation in Home Science and was trained both in mainstream Indian as well as International cuisines. I also have worked as an intern in a five star hotel.
        <br />
        <br />
        Whatever I know about cooking, baking and confectionery is thanks to my training in food science, food technology, nutrition & dietetics.
        <br />
        <br />
        Even before getting trained professionally, I already knew the basics of cooking as I learnt it from my elders right from the age of 10. Cooking is one art that is deeply instilled in me.</p>
    </div>

    <div >
      <img src={burger} alt="Burger icon" />
    </div>
    </div>
    </>
  )
}

export default About