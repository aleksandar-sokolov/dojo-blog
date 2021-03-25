import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {


    const [blogs, setBlogs] = useState(null); 
    const [isPending, setIsPending] = useState(true)


    useEffect(() => {
        // npx json-server --watch data/db.json --port 8000
        fetch('http://localhost:8000/blogs')
        .then(res => res.json())
        .then(data => {
            setBlogs(data);
            setIsPending(false)
        })
    }, [])

    return (
        <div className="home">
            {isPending && <p>Loading data ...</p>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;