import { useState, useEffect } from "react";

// 'http://localhost:8000/blogs'
// npx json-server --watch data/db.json --port 8000

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [err, setErr] = useState(null)


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Could not fetch data for that resource!')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data);
                    setIsPending(false)
                    setErr(null)
                })
                .catch(err => {
                    setErr(err.message);
                    setIsPending(false);
                })
        }, 1000)
    }, [url]);

    return { data, isPending, err }
};

export default useFetch;