import React, { useReducer } from "react";
import data from "public/posts.json"
import { useRouter } from "next/router";
// import handler from "../api/staticdata";
// import {singlePost} from "../api/staticdata";

export async function getServerSidePaths(){
    const res = data;
    console.log("ONS inside server side paths AHAA ");
    const paths = res.posts.map((post)=>{
       return {params: {id: String(post.ids)}}
    });
    return {paths, fallback: false}
}

export async function getServerSideProps({params}){
    // const post = singlePost(params.id);
    console.log("SSA inside server side Props ANLA ",params);
    const post = data.posts.filter((post)=>{
        return post.ids == params.id
    })
    return {
        props:  {"post":post[0]}
    }
}

export default function Post({ post }){
    const router = useRouter();
    return (
        <>
            <button onClick={()=>router.push(`/blog`)}>GO Back</button>
            <div>{post.title}</div>
            <div>{post.content}</div>
        </>
    )
}