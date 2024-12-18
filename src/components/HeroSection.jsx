import { Button } from './ui/button';

const HeroSection = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r p-4 from-[rgb(90,151,244)] to-[rgb(90,131,255)] text-white dark:from-[rgb(35,45,65)] dark:to-[rgb(65,75,95)] dark:text-gray-300">
                <div className="container mx-auto px-4 py-20 lg:py-32">
                    <div className="max-w-2xl animate-fadeIn">
                        <h1 className="text-3xl lg:text-6xl font-extrabold leading-tight">
                            Find Your <span className="text-[#F59E0B]">Dream Job</span>
                        </h1>
                        <p className="mt-6 text-base lg:text-xl text-gray-800 dark:text-gray-300">
                            Explore thousands of job opportunities that align with your career
                            goals and skills. Kickstart your journey with Workify today!
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-6 justify-start w-full max-w-4xl mx-auto">
                            {/* Get Started Button */}
                            <Button
                                variant="outline"
                                color="white"
                                size="lg"
                                className="w-full sm:w-auto px-6 py-3 font-semibold text-white border-2 border-white rounded-lg text-lg hover:bg-white hover:text-[#1D4ED8] transition duration-300 animate-slideIn"
                            >
                                Get Started
                            </Button>

                            {/* Learn More Button */}
                            <Button
                                variant="outline"
                                color="white"
                                size="lg"
                                className="w-full sm:w-auto px-6 py-3 font-semibold text-white border-2 border-white rounded-lg text-lg hover:bg-white hover:text-[#1D4ED8] transition duration-300 animate-slideIn"
                            >
                                Learn More
                            </Button>

                            {/* Explore Jobs Button */}
                            <Button
                                variant="outline"
                                color="white"
                                size="lg"
                                className="w-full sm:w-auto px-6 py-3 font-semibold text-white border-2 border-white rounded-lg text-lg hover:bg-white hover:text-[#1D4ED8] transition duration-300 animate-slideIn"
                            >
                                Explore Jobs
                            </Button>
                        </div>
                    </div>

                    {/* Animated Content */}
                    <div className="animate-slideIn opacity-0 mt-12" data-scroll-trigger>
                        <h3 className="text-lg font-medium">Find Your Dream Job</h3>
                        <p className="text-muted-foreground dark:text-gray-400">
                            Explore opportunities worldwide.
                        </p>
                    </div>
                </div>

                <div className="absolute right-0 bottom-0 animate-slideIn hidden sm:block">
                    <img
                        src="https://via.placeholder.com/400x300" // Replace with your image link
                        alt="Workify Hero"
                        className="w-full max-w-md lg:max-w-lg"
                    />
                </div>
            </section>
        </>
    );
};

export default HeroSection;
