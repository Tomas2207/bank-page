const Card = (props) => {
  return (
    <div className="account-div">
      <div className="account-box">
        <img
          src="./icons/credit-card.svg"
          alt="credit-card"
          className="credit-card-svg"
        />
        <div>{props.name}</div>
        <div>...{props.number}</div>
        <div className="account-amount">$ {props.amount}</div>
      </div>

      <div>
        <span className="transfer-span">Payment History</span>
      </div>
    </div>
  );
};

export default Card;
