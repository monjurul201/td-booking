import './mail.css';

const MailList = () => {
    return (
        <div className='mail'>
            <h1 className='mailTitle'>Save Time,Save Money. </h1>
            <span className="mailDesc">Sign up and we'll send the best deals to you</span>
            <div className="mailInputContianer">
                <input type="text" placeholder='your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default MailList;