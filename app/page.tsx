'use client'

import Header from '@/components/Header';
import Button from '@/components/Button';
import Container from '@/components/Container';
import { useState } from 'react';


export default function Home() {


  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count => count + 1);
  }

  return (
    
    <>

   
    </>
  )
}

