import { useState, useEffect } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState(
        [
            {title: 'sdfsdgfdg', body: 'dsafsdf,', author:'Gogo', id: 1},
            {title: 'dfgdfgb', body: 'fgdfgdfgbbngfbf,', author:'Todor', id: 2}
        ]
    )

    return ( 
        <div className="home">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;