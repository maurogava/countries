import { FC } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from 'assets/logo.svg'

import styles from './Layout.module.scss'

const Layout: FC = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/" className={styles.logoLink}>
            <Logo className={styles.logo} />
            <span className={styles.logoText}>World</span>
          </Link>
        </div>
      </header>

      <div className={cn(styles.content, styles.container)}>{children}</div>
    </>
  )
}

export default Layout
