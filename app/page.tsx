'use client'

import Header from '@/components/Header';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';


export default function Home() {


  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count => count + 1);
  }

  return (
    
    <>

    <div style={{display:'flex', height:'100vh'}}>
      <Sidebar></Sidebar>
    <div style={{flex:1, display:'flex', flexDirection:'column'}}>
      <Header></Header>
    <main className='p-4' style={{flex:1, overflowY:'auto'}}>
      <p>Welcome to the linkbird leads and campaign platform</p>
      <Container>
        <div>
          <Button text={count}
          onClick={handleCount}
          style={{
            backgroundColor:'powderblue',
            padding:'20px',
            fontSize:'20px',
            color:'black',
            borderRadius:'10px'
          }}></Button>
        </div>
      </Container>
    </main>
    </div>

    </div>

    </>
  )
}

