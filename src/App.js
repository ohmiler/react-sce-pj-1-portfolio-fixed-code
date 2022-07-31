import { useState, useEffect } from 'react';
import './App.css';
import Pages from './pages';

function App() {

  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/ohmiler')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, [])

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;