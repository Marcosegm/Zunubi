import React, { useState } from 'react'
// import Logo from "../Assets/Logo.svg"
import List from '@mui/material/List'
import { HiOutlineBars3} from "react-icons/hi2"
import {
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material"

import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import { ShoppingCartRounded } from '@mui/icons-material/ShoppingCartRounded'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOption = [
        {
            text: "Home",
            icon: <HomeIcon/>
        },
        {
            text: "Sobre Nosotros",
            icon: <InfoIcon/>
        },
        {
            text: "Contacto",
            icon: <PhoneRoundedIcon/>
        },
        {
            text: "Cart",
            icon: <ShoppingCartRounded/>
        },

    ]
  return <nav>
    <div className='nav-logo-container'>
        {/* <img src={Logo} alt =""/> */}
        <p className='primary-heading'>Zunubi</p>
    </div>
    <div className='navbar-links-container'>
        <a href=''>Home</a>
        <a href=''>Sobre Nosotros</a>
        <a href=''>Contacto</a>
        <button className='primary-button'>Reserva ahora</button>   
    </div>
    <div className='navbar-menu-container'>
        <HiOutlineBars3 onclick={() => setOpenMenu(true)}/>
    </div>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
        <Box sx={{width:250}}
            role="presentation"
            onClick = {() => setOpenMenu(false)}
            onKeyDown = {() => setOpenMenu(false)}
        >
            <List>
                {menuOption.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icom}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
  </nav>
    
}

export {Navbar};