import Link from 'next/link'
import styles from './Menu.module.scss'

const Menu = () => {
  return <>
    <ul className={styles.menu}>
      <li><Link href="/products/[category]" as="/products/Books"><a>Books</a></Link></li>
      <li><Link href="/products/[category]" as="/products/Toys"><a>Toys</a></Link></li>
      <li><Link href="/products/[category]" as="/products/Food"><a>Food</a></Link></li>
    </ul>
  </>
}

export default Menu