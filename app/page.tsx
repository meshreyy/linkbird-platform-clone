'use client'

import Header from '@/components/Header';
import Button from '@/components/Button';
import Container from '@/components/Container';
import { useState } from 'react';

export default function Home() {

  const handleClick = () => {
    alert("Button clicked!");
  };
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count => count + 1);
  }

  return (
    <>

      <Header></Header>
      <main className='p-4'>
        <p>Welcome to the linkbird leads and campaign platform.</p>
        <Container>
          <div>
            <Button text={count}
              onClick={handleCount}
              style={{ backgroundColor: "powderblue", color: "white", padding:"10px", fontSize:"40px"}}></Button>
          </div>
        </Container>
      </main>

    </>
  )
}

