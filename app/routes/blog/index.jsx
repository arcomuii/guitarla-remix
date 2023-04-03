import { useLoaderData } from "@remix-run/react"
import { getPosts } from "~/models/posts.server"
import ListadoPosts from "~/components/Listado-posts"

export async function loader() {
    const posts = await getPosts()
    return posts.data
}

export function meta() {
    return (
        {
            title: 'Guitar LA - Blog de guitarras',
            meta: 'Nuestro Blog'
        }
    )
}

const Blog = () => {
    const posts = useLoaderData()
    return(
        <ListadoPosts posts={posts} />
    )
}

export default Blog
