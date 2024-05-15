import vid1 from "../assets/video1.mp4";
import vid2 from "../assets/video2.mp4";

console.log(vid1, vid2);
const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                VirtualR build tools
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">{" "}for developers</span>

            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque deleniti harum aliquid reiciendis reprehenderit quo nisi numquam fugiat expedita vel optio, facere, aspernatur corporis nemo unde dolore dolorem nostrum aut.</p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">Start for Free</a>
                <a href="#" className="py-3 px-4 mx-3 rounded-md border">Documentation</a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={vid1} type="video/mp4" />
                    Your browser does not support video tag
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={vid2} type="video/mp4" />
                    Your browser does not support video tag
                </video>
            </div>
        </div>

    )
};

export default HeroSection;
