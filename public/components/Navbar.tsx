'use client'

import { List, ListItem } from '@chakra-ui/react'


export function Navbar() {
  return(
    <nav className='p-6'>
      {/* add links */}
      <List p='5' display='flex' justifyContent='flex-end' gap='10'>
        <ListItem>Home</ListItem>
        <ListItem>About Me</ListItem>
        <ListItem>Tech Stack</ListItem>
        <ListItem>Projects</ListItem>
        <ListItem>Contact Me</ListItem>
      </List>
  </nav>
  )
}