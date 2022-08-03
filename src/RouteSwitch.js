import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react';
import AccountPage from './AccountPage';
import TransferForm from './components/TransferForm';
import { accounts } from './components/AccountArray';
import { TransferHistory, history } from './components/TransferHistory';

const RouteSwitch = () => {
  const [user, setUser] = useState('');
  const [transferH, setTransferH] = useState(history);

  const [accountsState, setAccountsState] = useState(accounts);

  const handleAmount = (index, transfer, alias, account) => {
    const transferAmount = parseFloat(transfer);
    accounts[index].amount = accountsState[index].amount - transferAmount;
    setAccountsState(accounts);
    console.log(accountsState[index].amount);
    history.push({
      account: account,
      alias: alias,
      amount: transfer,
    });
    setTransferH(history);
  };

  const handleUser = (username) => {
    setUser(username);
  };
  return (
    <div>
      <BrowserRouter>
        <Header name={user} handleUser={handleUser} />
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/account"
            element={<AccountPage user={user} history={history} />}
          />
          <Route
            path="account/transfer"
            element={<TransferForm handleAmount={handleAmount} />}
          />
          {/* <Route
            path="account"
            element={<TransferHistory handleAmount={handleAmount} />}
          /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default RouteSwitch;
