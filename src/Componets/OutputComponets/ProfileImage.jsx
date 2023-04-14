import { Card, CardMedia } from '@mui/material'
import React from 'react'

function ProfileImage() {
  return (
    <Card>
        <CardMedia
        component="img"
        height="300"
        sx={{borderRadius:'50%'}}
        image="Images/img31.jpg"
        alt="Paella dish"
      />
    </Card>
  )
}

export default ProfileImage