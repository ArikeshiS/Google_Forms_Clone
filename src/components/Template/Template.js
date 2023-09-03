import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { IconButton } from '@mui/material';
import "./Template.css";
import create_new_image from "../../images/create_new_form.png"
const Template = () => {
  return (
    
    <div className='template_section'>
        <div className='template_top'>
        
            <div className='template_left'>
                Start New Form
            </div>
            <div className='template_right'>
                <div className='gallery_button'>
                    Template gallery
                    <UnfoldMoreIcon fontSize='small'/>
                </div>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className='template_body'>
            <div className='card'>
                <img src={create_new_image} alt="no image" className='card_image'/>
                <span>Blank</span>
            </div>
        </div>
    </div>

  )
}

export default Template