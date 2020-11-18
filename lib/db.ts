import mysql from 'serverless-mysql'
import { Post } from '../types'

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
})

export default db

export const getAllPosts = async () => {
  const posts = await db.query<Post[]>('SELECT * FROM posts ORDER BY id DESC;')
  await db.end()
  return posts.map(({id,title,content}) => {return ({id,title,content})})
}