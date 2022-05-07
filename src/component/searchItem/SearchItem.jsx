import './searchItem.css';

const SearchItem = () => {
    return (
        <div className='searchItem'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQESaZF09P81GeFlJwTN7Ryxx8oneu9NW6Q&usqp=CAU"
           alt="" className="siImg" />
          <div className="siDesc">
              <h1 className="siTitle">Tower Street Apartments</h1>
              <span className="siDistance">500m from center</span>
              <span className="siTaxiOp">Free airport Taxi</span>
              <span className='siSubtitle'>
                Studio Apartment with Air conditioning 
              </span>
              <span className="siFeatures">
                  Emtore stidop 1 bathroom+20*20 1 full bed 
              </span>
                <span className="siCancelOp">Free concellation</span>
                <span className="sicancelOpSubTitle">
                    you can cancel later,so lock in this grat price today!
                </span>
          </div>
            <div className="siDetails">
              <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>           
              </div>
              <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className='siTaxOp'>Includes taxop and fees</span>
                <button className='siCheekButton'>See Availability</button>
              </div>
            </div>

        </div>
    );
};

export default SearchItem;