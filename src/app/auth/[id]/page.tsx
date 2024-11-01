import React from 'react'

const page = async ({ params }: { params: Promise<any> }) => {
  const { id } = await params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.username}</p>
    </div>
  )
}

export default page

