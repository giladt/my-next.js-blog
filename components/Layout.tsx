import Link from 'next/link'
import Menu from './Menu'
import styles from './Layout.module.scss'

const Layout: React.FC = ({children}) => {
  return (
    <div className={styles.container}>
      <Menu />
      {children}
      <Link href="/about"><a>About</a></Link><br/>
      <Link href="/"><a>&larr; Back to home</a></Link>
    </div>
  )
}

export default Layout