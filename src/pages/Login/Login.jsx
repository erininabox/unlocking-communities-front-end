import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <div className={styles.whole}>
        <img src="https://i.imgur.com/1Yyc4nh.png" alt="unlockingCommunities" style={{ width: '300px', height: '400px'}}/>
        <div className={styles.form}>
          <h1>Log In</h1>
          <p>{message}</p>
          <LoginForm
          handleSignupOrLogin={props.handleSignupOrLogin}
          updateMessage={updateMessage}
          />
        </div>
      </div>
    </main>
  )
}

export default LoginPage
