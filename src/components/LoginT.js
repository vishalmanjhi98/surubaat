import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AttractionsIcon from '@mui/icons-material/Attractions'
import MuseumIcon from '@mui/icons-material/Museum'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded'
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded'
import './LoginT.css'

const LoginT = () => {
  return (
    <div className="LoginT">
      <div className="LoginT__in" style={{ fontSize: '10px' }}>
        <h2 style={{ paddingRight: '18px', paddingLeft: '8px' }}>
          New Customer
        </h2>
        <h2 style={{ color: '#c7003d' }}>Signup</h2>
      </div>
      <hr></hr>
      <div className="LoginT__in">
        <AccountCircleIcon />
        <p>My Profile</p>
      </div>
      <hr></hr>
      <div className="LoginT__in">
        <AttractionsIcon />
        <p>Snapdeal Plus Zone</p>
      </div>
      <hr></hr>
      <div className="LoginT__in">
        <MuseumIcon />
        <p>Orders</p>
      </div>
      <hr></hr>
      <div className="LoginT__in">
        <FavoriteRoundedIcon />
        <p>Wishlist</p>
      </div>
      <hr></hr>
      <div className="LoginT__in">
        <ConfirmationNumberRoundedIcon />
        <p>Rewards</p>
      </div>
      <hr></hr>
      <div className="LoginT__in">
        <CardGiftcardRoundedIcon />
        <p>Gift Cards</p>
      </div>
    </div>
  )
}

export default LoginT
