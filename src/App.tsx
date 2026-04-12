import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Input } from './stories/Input'
import { Button } from './stories/Button'
import { Header } from './stories/Header'

function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [emailError, setEmailError] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    setIsLoggedIn(true);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Header 
        user={isLoggedIn ? { name: username } : undefined}
        onLogin={() => {}}
        onLogout={handleLogout}
        onCreateAccount={() => {}}
      />
      
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Component Showcase</h1>
          <p>
            Vite + React + TypeScript + Storybook
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ 
          background: '#f5f5f5', 
          padding: '30px', 
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          {!isLoggedIn ? (
            <>
              <h2>Sign In</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Input
                  label="Username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={setUsername}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={setEmail}
                  error={emailError}
                  required
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={setPassword}
                  required
                />
                <Button
                  primary
                  label="Sign In"
                  onClick={handleLogin}
                  size="medium"
                />
              </div>
            </>
          ) : (
            <>
              <h2>Welcome, {username}!</h2>
              <p>You are successfully logged in.</p>
              <Button
                label="Log Out"
                onClick={handleLogout}
                size="medium"
              />
            </>
          )}
        </div>
      </section>

      <div className="ticks"></div>

      <section style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
        <h2>Counter Component Test</h2>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
