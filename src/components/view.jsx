
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const View = _ => {
    const [posts, setPosts] = useState([])

    const url = "https://mrcrudapp.herokuapp.com/api/getallposts"

    const postings = async () => {
        try{
            const res = await axios.get(url)
            setPosts(res.data.data)
        } catch (error) {
            console.log('error')
        }
    }

    useEffect( () =>  postings(), [])

    return (
        <>
        <h1>Posts</h1>
        { posts && posts.map((myPost) =>
            <ul key={myPost._id}>
                <li>{myPost.title} : {myPost.content}</li>
            </ul>
        )}
        </>
    )
}

export default View
