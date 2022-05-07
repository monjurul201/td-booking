import "./List.css";
import Header from '../../component/header/Header';
import Navbar from '../../component/navbar/Navbar'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../component/searchItem/SearchItem";
const List = () => {

    const location = useLocation();
    //console.log(location);

    const [destination, setDestinatin] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [option, setOption] = useState(location.state.option);
    console.log(option);

    return (
        <div>
            <Navbar />
            <Header type='list' />
            <div className="ListContainer">
                <div className="listWraper">
                    <div className="listSearch">
                        <h1 className="listTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destinatin</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="lsItem">
                            <label>Cheek-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)} > {`${format(date[0].startDate, "dd/MM/yyy")} to ${format(date[0].endDate, "dd/MM/yyy")}`}</span>
                            {
                                openDate &&
                                <DateRange
                                    onChange={(item) => setDate([item.selection])}
                                    ranges={date}
                                    minDate={new Date()}
                                />}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min Price <small>Per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max Price <small>Per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Adult
                                    </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={option.adult} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Children
                                    </span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={option.children} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Room
                                    </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={option.room} />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;