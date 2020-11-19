import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/db'

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout>
      <Head>
        <title>My NEXT.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to my blog</h1>
        <h2>Latest Posts.</h2>
        <ul>
          {props.posts.map(post => (
            <li key={post.id}>
              <Link href="/post/[id]" as={`/post/${post.id}`}>
                <a>
                    {post.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <p>
          <Link href="/create-post">
            <a>Create a Post</a>
          </Link>
        </p>
      </main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {props: {posts} };
}
