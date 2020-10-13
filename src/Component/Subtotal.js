import React  from "react";
import { useHistory } from "react-router-dom";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import {getBasketTotal} from "../reducer"

function Subtotal() {
 const  history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

  const checkout = e => {
    return history.push("/checkoutTotal");
  }


  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items): <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contain gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="subtotalbutton" onClick ={checkout} >proceed to checkout</button>
    </div>
  );
}

export default Subtotal;

