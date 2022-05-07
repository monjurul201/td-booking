import './featured.css';

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://www.w3schools.com/html/img_5terre.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://media.istockphoto.com/photos/view-of-venices-grand-canal-picture-id911570904?b=1&k=20&m=911570904&s=170667a&w=0&h=kDao8r3onURmECMcfpydH3Q7mCBW7LpkHykWCXB1TFw=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664223__340.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;