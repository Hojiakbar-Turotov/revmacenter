import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router/Router'

export default function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}
