import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Post } from '../types'

export default function Home3() {
  const [posts, setPosts] = useState<Post[]>()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`)
      const posts: Post[] = await res.json();
      setPosts(posts);
    }

    fetchPosts()
  }, [])

  return (
    <Layout>
      <Head>
        <title>My NEXT.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to my blog</h1>
        <h2>Latest Posts. {Date.now()}</h2>
        { !posts || !posts.length ? 
          <p>Loading...</p> : (
          <ul> 
            { posts.map((post) => (
              <li key={post.id}><h3>{post.title}</h3></li>
            ))}
          </ul>
        )}
      </main>
    </Layout>
  )
}
