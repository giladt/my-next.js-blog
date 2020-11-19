import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Layout from '../components/Layout'

interface Values {
  title: string
  content: string
}

const CreatePost = () => {
  const { register, handleSubmit} = useForm<Values>()
  const router = useRouter()
  return (
    <Layout>
      <form onSubmit={ handleSubmit(async (values)=>{
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(values),
        })
        router.push('/')
      })}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" ref={register}/>
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea name="content" ref={register}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
}

export default CreatePost