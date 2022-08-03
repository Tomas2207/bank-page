import { Link } from 'react-router-dom';

const Account = (props) => {
  return (
    <div className="account-div">
      <div className="account-box">
        <div>{props.name} Account</div>
        <div className="account-amount">$ {props.amount}</div>
      </div>

      <div>
        <Link
          to="/bank-page/account/transfer"
          state={{ from: props.name, handleAmount: props.handleAmount }}
        >
          <span className="transfer-span">Transfer</span>
        </Link>
      </div>
    </div>
  );
};

export default Account;
