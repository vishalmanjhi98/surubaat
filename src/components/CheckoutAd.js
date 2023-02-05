import './checkoutAd.css'
import { useStateValue } from './StateProvider'

const CheckoutAd = () => {
  const { myReducer } = useStateValue()
  const [data] = myReducer

  const getTotalAmount = () => {
    let total = 0
    data.cartList.map((item) => {
      return (total = Number(total) + Number(item.price))
    })
    return total
  }

  const getTotalItem = () => {
    return data.cartList.length
  }

  return (
    <div className="checkoutAd">
      <div className="leftSide">
        <img
          style={{ height: '250px', width: '800px' }}
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div className="rightSide">
        <div className="subtotal">
          <p>
            Subtotal({getTotalItem()} items):{' '}
            <strong>₹ {getTotalAmount()}</strong>
          </p>
          <p>
            <input type="checkbox" />
            This order contains a gift
          </p>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutAd
