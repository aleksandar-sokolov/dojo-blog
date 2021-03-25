import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data:blogs, isPending, err} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {err && <p>{err}</p>}
            {isPending && <p>Loading data ...</p>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;