import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  const [count, setCount] = useState(0)

  console.log('--- [HomePage] Render ---')

  useEffect(() => {
    console.log('--- [HomePage] useEffect ---')
    setCount((state) => state + 1)
  }, [])

  return (
    <div>
      <main>
        <h1>{`State: ${count}`}</h1>
        <br />
        <button onClick={() => setCount((state) => state + 1)}>Add</button>
      </main>
    </div>
  )
}

export default HomePage
