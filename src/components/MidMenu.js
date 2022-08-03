const MidMenu = () => {
  return (
    <div className="mid-menu">
      <div className="mid-menu-nav">
        <div className="mid-item">
          <img src="icons/blue-card.png" alt="" className="midmenu-img" />
          <div>Credit Card</div>
        </div>
        <div className="mid-item">
          <img className="midmenu-img" src="icons/salary.png" alt="" />
          <div>My Salary</div>
        </div>
        <div className="mid-item">
          <img className="midmenu-img" src="icons/icons-product.png" alt="" />
          <div>Products</div>
        </div>
        <div className="mid-item">
          <img className="midmenu-img" src="icons/account.png" alt="" />
          <div>Open an Account</div>
        </div>
        <div className="mid-item">
          <img className="midmenu-img" src="icons/loan.png" alt="" />
          <div>I need a loan</div>
        </div>
        <div className="mid-item">
          <img className="midmenu-img" src="icons/invest.png" alt="" />
          <div>I want to invest</div>
        </div>
      </div>
    </div>
  );
};

export default MidMenu;
