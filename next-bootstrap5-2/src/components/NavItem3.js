//import { Link as ChakraLink, useColorModeValue, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
//import React from 'react'

function NavLink({ to, activeProps, children, _hover, ...props }) {
  const router = useRouter()
  const isActive = router.pathname === to
//  const color = useColorModeValue('black', 'selected')

  if (isActive) {
    return (
      <Link href={to} passHref>
        <a className='nav-link px-2 text-secondary' {...props} _hover={{ color: 'selected' }}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <Link href={to} passHref>
      <a className='nav-link px-2 text-secondary' {...props} _hover={{ color: 'white' }}>
        {children}
      </a>
    </Link>
  )
}

export default NavLink