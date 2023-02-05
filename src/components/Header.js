import React from 'react'
import './header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import LoginT from './LoginT'
import Tippy from '@tippyjs/react'
import 'tippy.js/themes/light.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

const Header = () => {
  const { myReducer } = useStateValue()
  const [data] = myReducer
  console.log(data.authInfo)
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
            alt="snapdeal logo"
          />
        </Link>
      </div>
      <div className="header__search">
        <input />
        <SearchIcon fontSize="small" className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__nav__user">
            <span className="header__nav__lineOne">
              {data.authInfo.user ? data.authInfo.user.email : 'Welcome'}
            </span>
            <Tippy
              theme="light"
              content={<LoginT></LoginT>}
              interactive={true}
              offset={[5, 10]}
            >
              <span className="header__nav__lineTwo">Login</span>
            </Tippy>
          </div>
        </Link>
        <div className="header__nav__itemBasket">
          <Link to="/checkout">
            <ShoppingCartIcon fontSize="small" />
            &nbsp;{data.cartList?.length}&nbsp;Cart
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
