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
        <img 
          src="https://i.imgur.com/1Yyc4nh.png" 
          alt="unlockingCommunities" 
          className={styles.img}/>
        <div className={styles.form}>
          <h1 className={styles.h1}>Welcome!</h1>
          <p>{message}</p>
          <LoginForm
          handleSignupOrLogin={props.handleSignupOrLogin}
          updateMessage={updateMessage}
          />
      </div>
    </main>
  )
}

export default LoginPage
