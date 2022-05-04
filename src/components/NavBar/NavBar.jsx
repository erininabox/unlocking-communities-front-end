import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul className={styles.ul}>
            {/* <li><Link to="/profiles">Profiles</Link></li> */}
            <li className={styles.logout}>
              <button className={styles.btn}>
                <Link to="" onClick={handleLogout} style={{ textDecoration: 'none'}}>
                  LOG OUT
                </Link>
              </button>
              </li>
            {/* <li><Link to="/changePassword">Change Password</Link></li> */}
          </ul>
        </nav>
        :
        <nav>
          <ul>
            <li className={styles.logout}>
              <button className={styles.btn}>
                <Link to="/login" style={{ textDecoration: 'none', color: 'black'}}>Log In</Link>
              </button>
            </li>
            <li className={styles.logout}>
              <button className={styles.btn}>
                <Link to="/signup" style={{ textDecoration: 'none', color: 'black'}}>Sign Up</Link>
              </button>
            </li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
