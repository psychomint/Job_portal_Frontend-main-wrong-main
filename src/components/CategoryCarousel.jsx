import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel";
import { Button } from './ui/button';

const category = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "DevOps Engineer",
    "Data Scientist",
    "Product Manager",
    "DevOps Engineer",
    "Data Scientist",
    "Product Manager",
    "DevOps Engineer",
    "Frontend Developer"
];

const CategoryCarousel = () => {
    return (
        <div className="dark:bg-gray-800 p-5">
            <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent className="flex-shrink">
                    {category.map((cat, index) => {
                        return (
                            <CarouselItem
                                key={index}
                                className="flex-shrink-0 w-full md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                            >
                                <Button
                                    variant="outline"
                                    className="rounded-full border-2 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
                                >
                                    {cat}
                                </Button>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
            </Carousel>
        </div>
    );
};

export default CategoryCarousel;
