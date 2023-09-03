import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import forms_logo from "../../images/forms_logo.png"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TempDrawer from '../Drawer/TempDrawer.js';
const Header = () => {
  return (
    <div className='header'>

        <div className='header_info'>
            {/* <IconButton>
                <MenuIcon/>
            </IconButton> */}
            <TempDrawer/>
            <img src={forms_logo} alt="no image"></img>
            <p>Forms</p>
        </div>
        <div className='header_search'>
            <IconButton>
                <SearchOutlinedIcon/>
            </IconButton>
            <input type='text' name='search' placeholder='Search'/>
        </div>
        <div className='header_right'>
            <IconButton>
                <AppsOutlinedIcon/>
            </IconButton>

            <IconButton>
                <Avatar src = ""/>
            </IconButton>
        </div>
    </div>
  )
}

export default Header