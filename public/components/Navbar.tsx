'use client'

import { List, ListItem, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
export function Navbar() {
  const links = ['Home', 'About Me', 'Tech Stack', 'Projects', 'Contact Me']
  return(
    <Box as='nav' bg='' z-index='10'>
      {/* add links */}
      <List p='5' display='flex' justifyContent='flex-end' gap='10'>
        {links.map((link) => (
          <ListItem key={link}><Link _hover={{color: 'yellow.300'}}  as={NextLink} href='#'>{link}</Link></ListItem>
        ))}
      </List>
  </Box>
  )
}