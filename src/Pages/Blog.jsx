import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://careerdhrishti-backend.onrender.com/api/blog/");
        const data = await response.json();
        console.log("API Response:", data);
        
        if (data.blog && Array.isArray(data.blog)) {
          setBlogs(data.blog); 
        } else {
          console.error("Error: Expected an object with a blog array but got", data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-white pb-10 sm:pt-20 pt-2 dark:bg-dark lg:pb-20 lg:pt-[10px] sm:mx-[120px] mx-2">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="block text-5xl font-semibold text-primary">
                  Our Blogs
                </span>
                <div className="h-[1px] bg-primary mt-5"></div>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            {loading ? ( // Conditionally render loading spinner or message
              <div className="w-full text-center">
                <div className="text-primary text-xl font-semibold">Loading...</div>
              </div>
            ) : (
              blogs.map((blog) => (
                <BlogCard
                  key={blog._id}
                  date={blog.date}
                  CardTitle={blog.title}
                  CardDescription={blog.description}
                  image={blog.image}
                />
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 pb-10">
      <div className="mb-10 w-full">
        <div className="mb-8 overflow-hidden rounded">
          <img src={image} alt={CardTitle} className="w-full" />
        </div>
        <div>
          {date && (
            <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
              {date}
            </span>
          )}
          <h3>
            <a
              href="/#"
              className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-black sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-white bg-primary transition-transform transform-gpu hover:scale-110 p-3 rounded-sm">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};
