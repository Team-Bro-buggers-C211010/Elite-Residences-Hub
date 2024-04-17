import { useLoaderData } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const Blog = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const blogs = useLoaderData();
    return (
        <div className="mt-24 md:mt-28">
            <Helmet>
                <title> Elite Residences Hub | Blog </title>
            </Helmet>
            <h1 data-aos="fade-down-right" data-aos-duration="1500" className="mb-4 text-3xl md:text-5xl text-center font-semibold">Blog <span className="text-[#71b100]">Post</span></h1>
            <p data-aos="fade-down-left" data-aos-duration="1500" className="text-center container text-sm md:text-base mx-auto md:w-1/2 mt-7">Explore the latest insights, trends, and stories in luxury living with our captivating blog posts. From design inspirations to travel guides, stay informed and inspired as we delve into the world of elite living.</p>
            <div className="mt-8 px-1 md:px-0 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blog;