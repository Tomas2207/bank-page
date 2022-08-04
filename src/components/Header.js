import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignForm from './SignForm';

const Header = (props) => {
  const [signed, setSigned] = useState(true);
  const [userr, setUser] = useState(props.name);

  useEffect(() => {
    console.log(props.name);
    setUser(props.name);
    console.log('yep');
  }, [props.name]);

  const handleSignedClick = () => {
    if (signed) {
      setUser('');
    }
    setSigned(!signed);
  };

  return (
    <div className={!signed && userr === '' ? 'none' : 'header'}>
      <header>
        <h1>
          <Link to="/bank-page/">Online Bank</Link>
        </h1>
        <div className="header-div">Credit Card</div>
        <div className="header-div">Become a client</div>
        <div>
          {userr !== '' && userr !== undefined && !signed && (
            <span>Hello, {userr}</span>
          )}
          {userr !== '' && userr !== undefined && !signed && (
            <Link to="/account/">
              <button className="online-bank-btn">My Account</button>
            </Link>
          )}
          {signed && (
            <button className="online-bank-btn" onClick={handleSignedClick}>
              Online Bank
            </button>
          )}
          {!signed && (
            <Link to="/bank-page/">
              <button className="online-bank-btn" onClick={handleSignedClick}>
                Sign Out
              </button>
            </Link>
          )}
        </div>
      </header>
      {!signed && userr === '' && (
        <SignForm signed={signed} handleUser={props.handleUser} />
      )}
    </div>
  );
};

export default Header;
