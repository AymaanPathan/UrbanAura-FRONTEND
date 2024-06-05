import { Link } from "react-router-dom"
import { useState } from "react"
function User() {
  return (
    <div className="flex items-center gap-6">
        <Link to={'/register'}>Create Account</Link>
        <Link to={'/login'}>Login</Link>
        <Link></Link>
    </div>
  )
}

export default User