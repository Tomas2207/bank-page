const AccountSideMenu = (props) => {
  return (
    <div className="account-side-menu">
      <div id="side-span1">{props.user}</div>
      <div>
        Payments
        <img src="./icons/expand-down.png" alt="" className="expand-down" />
      </div>
      <div>
        Investments
        <img src="./icons/expand-down.png" alt="" className="expand-down" />
      </div>
      <div>
        Cards
        <img src="./icons/expand-down.png" alt="" className="expand-down" />
      </div>
      <div>
        International Operations
        <img src="./icons/expand-down.png" alt="" className="expand-down" />
      </div>
      <div id="side-span2">Cancel my card</div>
    </div>
  );
};

export default AccountSideMenu;
