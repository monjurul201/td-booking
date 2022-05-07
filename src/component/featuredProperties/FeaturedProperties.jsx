import './feauturedProperties.css';

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className="fpItem">
                <img src="https://image.shutterstock.com/image-photo/comfort-bedroom-luxury-style-260nw-548927521.jpg" alt=""
                    className="fpImg" />
                    <span className="fpName">Lorem ipsum dolor sit amet.</span>
                    <span className="fpCity">Nilphamari</span>
                    <span className="fpPrice">$120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excelent</span>
                </div>
            </div>

            <div className="fpItem">
                <img src="https://image.shutterstock.com/image-photo/comfort-bedroom-luxury-style-260nw-548927521.jpg" alt=""
                    className="fpImg" />
                    <span className="fpName">Lorem ipsum dolor sit.</span>
                    <span className="fpCity">Golisthan</span>
                    <span className="fpPrice">$50</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excelent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5SL4CkChZhWUNMBiPFNh4nkltze6cqNAww&usqp=CAU" alt=""
                    className="fpImg" />
                    <span className="fpName">Lorem ipsum dolor sit amet.</span>
                    <span className="fpCity">Khulna</span>
                    <span className="fpPrice">$20</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excelent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
                    className="fpImg" />
                    <span className="fpName">Lorem ipsum dolor sit amet.</span>
                    <span className="fpCity">Dhaka</span>
                    <span className="fpPrice">$88</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excelent</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;
