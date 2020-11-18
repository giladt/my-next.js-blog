import { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/db'

export default function Home2(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <Layout>
      <Head>
        <title>My NEXT.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to my blog</h1>
        <h2>Latest Posts. {Date.now()}</h2>
        <ul>
          {props.posts.map(post => (
            <li key={post.id}><h3>{post.title}</h3></li>
          ))}
        </ul>
      </main>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const posts = await getAllPosts();
  return {props: {posts} };
}