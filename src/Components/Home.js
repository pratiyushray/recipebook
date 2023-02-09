import React from 'react';
import { signOut } from "firebase/auth";
import {auth} from "./firebase";
import { useNavigate } from "react-router-dom";
import blogImage from "../assets/blogImage.jpg";

function Home(props) {

    //Logout Functionality
    const navigate = useNavigate();
    const clickLogin = () => {
      if (props.name) {
        signOut(auth);
      } else {
        navigate("/login");
      }
    };

  
  return (
    <>
    <div className='2xl:flex 2xl:flex-row 2xl:items-center 2xl:justify-center flex flex-col items-center justify-center'>
      <br />
        <h2 className='text-white text-3xl  flex flex-row justify-center font-bold mt-3 2xl:mr-10'>{props.name?`Welcome, ${props.name}`:"Login Please"}</h2>
        <div className="buttons">
        <button className='transition mt-4 px-5 py-1 rounded-xl ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...' onClick={clickLogin}>
          {props.name ? "Log Out":"Login"}
        </button>
      </div>
      <div>
      </div>
    </div>
    <hr className='mt-5' />

    {/* Card View Blogs  */}

    <div className='container'>
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 text-white bg-white dark:bg-gray-900">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header class="mb-4 lg:mb-6 not-format">
                    <address class="flex items-center mb-6 not-italic">
                        <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                            <img class="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"/>
                            <div>
                                <a href="/" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                                <p class="text-base font-light text-gray-500 dark:text-gray-400">Professional Chef at Taj</p>
                                <p class="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2023</time></p>
                            </div>
                        </div>
                    </address>
                    <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Thai Yellow Coconut Curry with Mango</h1>
                </header>
                <p class="lead">This recipe is simple, requiring just 30 minutes and 1 pot, which makes it perfect for weeknight meals when you need something fast, delicious, and satisfying.
                The base of this curry is garlic, ginger, serrano or Thai pepper, and shallot. Next comes red curry paste and plenty of turmeric and lemon juice for that intense yellow curry flavor and color.
                <br />
                <br />
                Coconut milk adds creamy texture, coconut sugar sweetens the dish naturally, and red bell pepper, green peas, mango, and cashews are the delicious add-ins that make this dish insanely beautiful and filling.
                <br />
                <br />
                I think you guys are going to LOVE this curry! It’s:
                <br />
                <br />  
                Rich
                <br />
                Creamy
                <br />
                Flavorful
                <br />
                Vegetable-heavy
                <br />
                Naturally sweetened
                <br />
                Perfectly spicy
                <br />
                & Better than takeout (there I said it)
                <br />
                <br />

                This curry is fabulous when you’re craving Thai food that’s quick and hearty. And because it’s so satisfying and flavorful, I think it would be especially great for hosting as it’s sure to please even the heartiest eaters.
                </p>
                    <br />
                <figure><img src={blogImage} alt=""/>
                    <figcaption className='text-gray-400'>Digital art by Anonymous</figcaption>
                </figure>
                <br />
          <hr />
          </article>
          </div>
      </main>
    </div>
    </>
)
}

export default Home