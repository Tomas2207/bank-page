import { useState } from 'react';
import './Account.css';
import Account from './components/Account';
import { accounts, cards } from './components/AccountArray';
import AccountSideMenu from './components/AccountSideMenu';
import Card from './components/Card';
import { TransferHistory } from './components/TransferHistory';

const AccountPage = (props) => {
  const [accountsState, setAccountsState] = useState(accounts);

  return (
    <div className="account-page-container">
      <div>
        <div className="account-display">
          <h3 className="account-h3">Accounts:</h3>
          {accountsState.map((account) => {
            return (
              <div key={account.key}>
                <Account name={account.name} amount={account.amount} />
              </div>
            );
          })}
        </div>

        <div className="account-display">
          <h3 className="account-h3">Cards:</h3>
          {cards.map((card) => {
            return (
              <div key={card.key}>
                <Card
                  name={card.name}
                  number={card.number}
                  amount={card.amount}
                />
              </div>
            );
          })}
        </div>
        <div className="account-display">
          <h3 className="account-h3">Transfer History:</h3>
          <TransferHistory history={props.history} />
        </div>
      </div>
      <AccountSideMenu user={props.user} />
    </div>
  );
};

export default AccountPage;
