import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {


    const [blogs, setBlogs] = useState(
        [
            { title: 'sdfsdgfdg', body: 'dsafsdf,', author: 'Gogo', id: 1 },
            { title: 'dfgdfgb', body: 'fgdfgdfgbbngfbf,', author: 'Todor', id: 2 }
        ]
    )

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;