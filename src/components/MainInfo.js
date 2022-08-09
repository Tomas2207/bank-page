const MainInfo = () => {
  return (
    <div className="main-info">
      <h3>We want to be with you in every moment</h3>
      <div className="info-grid">
        <div className="item-1">
          <img
            src="images/pexels-gustavo-fring-4148842.jpg"
            alt=""
            className="info-image"
          />
          <div className="item-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            quibusdam nihil suscipit impedit nisi ipsum velit autem,
            perspiciatis quidem labore rem reiciendis nemo odio commodi incidunt
            molestiae iste neque corrupti?
            <div className="know-more">Know more</div>
          </div>
        </div>
        <div className="item-2">
          <img src="images/item2.jpg" alt="" className="info-image sub-img" />
          <div className="item-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            voluptatum alias odit incidunt vero ad!
            <div className="know-more">Know more</div>
          </div>
        </div>
        <div className="item-3">
          <img src="images/item3.jpg" alt="" className="info-image sub-img" />
          <div className="item-info">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            fugiat ex quaerat assumenda vero distinctio!
            <div className="know-more">Know more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
