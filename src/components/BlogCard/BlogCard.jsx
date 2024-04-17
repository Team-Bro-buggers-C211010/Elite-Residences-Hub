const BlogCard = ({blog}) => {
    return (
        <div>
            <div data-aos="fade-up" data-aos-offset="150"
        data-aos-easing="ease-in-sine" className="card card-compact bg-base-100 shadow-xl h-full">
                <figure className="h-60"><img className="h-60 w-full object-cover object-center" src={blog.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="font-Lora card-title">{blog.title}</h2>
                    <h4><span className="text-[#71b100] font-semibold">{blog.date}</span> By <span className="font-semibold">{blog.author}</span></h4>
                    <hr className="border-[#71b100] border-dotted" />
                    <h3><span className="font-semibold">Category : </span>{blog.category}</h3>
                    <hr className="border-[#71b100] border-dotted" />
                    <h3>{blog.content}</h3>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;