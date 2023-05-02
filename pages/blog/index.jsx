import React from 'react';
import pots from 'public/posts.json'
import useSWR from 'swr'
import { useRouter } from 'next/router';

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    
    if(res.status !== 200){
        throw new Error(data.message)
    }
    return data;
}

export async function getStaticProps() {
    //SSA get from timeout
    console.log("ONS Inside static pros of blog ANLA");
    const posts = await timeout().then((ret)=>{
        console.log("return from timeout ",ret);
        return ret;
    })
    console.log("SSA Posts value ANLA ",posts);
    return posts;
    
}

function timeout(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var obj = {
                props: {
                    "posts": pots.posts
                }
            }
            resolve(obj);
        },5000);
    })
    
}

export default function Blog({ posts }) {
    const { data, error, isLoading, isValidating } = useSWR(`/api/staticdata`,fetcher);
    console.log("OSABNN ",data);
    var router = useRouter();
    return (
        <ul>
            {posts.map((post, index) => {
                return <li key={index}><button onClick={()=>router.push(`/blog/${post.ids}`)}>{post.title}</button></li>
            })}
        </ul>
    )
}