import path from 'path';
import {readFile} from 'fs/promises';

export default async function handler(req,res){
    const jsonDirectory = path.join(process.cwd(), 'public');
    const posts = await readFile(jsonDirectory + '/posts.json', 'utf8');
    return posts ? res.status(200).json(posts) : res.status(404).json({message: `posts not found`})
}

export async function singlePost(id){
    // const posts = await handler();
    // const post = posts.filter((post)=>{
    //     return post.id == id
    // })
    // return post[0];
    return {}
}