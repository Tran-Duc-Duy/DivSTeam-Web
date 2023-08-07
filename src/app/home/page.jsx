import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import { IoIosArrowForward } from 'react-icons/io';

const Home = () => {
    return (
        <div className=" h-screen bg-gradient-to-b from-[#F8F8F8] to-white relative" id="home">
            <div className=" text-7xl font-extrabold absolute mr-auto ml-auto left-0 right-0 lg:right-auto lg:left-32 top-[18rem] z-10">
                <AnimatedText text='LOREM' />
                <div className="mr-auto ml-auto left-0 right-0 lg:right-auto lg:left-0 text-base font-extralight absolute w-[30rem]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
            </div>
            <div className="flex justify-between py-2 px-6 mx-52 right-0 left-0 lg:mx-0 lg:right-auto lg:left-32 absolute cursor-pointer text-white lg:px-6 lg:py-2 rounded-lg bg-[#484848] hover:bg-[#606060] duration-200 top-[30rem] z-10">
                <button 
                    className=" pr-2 font-semibold"
                    onClick={console.log("btn clicked")}>
                    BUTTON
                </button>
                <IoIosArrowForward className=" m-auto h-full" />
            </div>

            <div className=" h-[30rem] w-[30rem] absolute left-48 top-1/4 ">
                <Image
                    src="/Ellipse.png"
                    alt="Ellipse"
                    width={400}
                    height={400}
                    className="" // just an example
                />
            </div>

            <div className="hidden lg:inline h-[44rem] w-[36rem] absolute right-20">
                <Image
                    src="/Home_pic.png"
                    alt="Home picture"
                    layout="fill" // required
                    objectFit="contain" // change to suit your needs
                    className=" h-full" // just an example
                />
            </div>
            
        </div>
    )
}
export default Home;