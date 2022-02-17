import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavLink({ to, activeProps, children, _hover, ...props }) {
  const router = useRouter()
  const isActive = router.pathname === to

  if (isActive) {
    return (
      <Link href={to} passHref>
        <a className='nav-link px-2 fw-bold text-primary active' _hover={{ color: 'selected' }}>
          {children}
        </a>
      </Link>
    )
  }
  
  return (
    <Link href={to} passHref>
      <a className='nav-link px-2 fw-normal text-white ' _hover={{ color: 'red' }}>
        {children}
      </a>
    </Link>
  )
}

export default NavLink