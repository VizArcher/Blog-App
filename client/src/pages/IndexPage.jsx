import { useEffect } from "react";
import Post from "../Post";

export default function IndexPage() {
    useEffect(() => {
        fetch('http://localhost:4000/post').then(response => {
            response.json().then(posts => {
                console.log(posts)
            })
        })
    }, [])
    return (
        <>
            <Post />
            <Post />
            <Post />
        </>
    )
}  