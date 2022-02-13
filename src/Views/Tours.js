import React from 'react';
import '../Assets/CSS/Tours.css';
function Tours() {



    return (
        <div className='tours-wrapper'>
            <div className="wrapper">
                <div className="masthead">
                </div>
                <section className="main">
                    <h2>Flight details</h2>
                    <p>please fill the form below with your travel details.</p>
                    <form name="travelForm" id="travelForm" action="#" method="post" enctype="application/x-www-form-urlencoded">
                        <div className="clearfix">
                            <div className="formBox">
                                <label for="departure">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8">
                                        <path d="M3 0c-1.66 0-3 1.34-3 3 0 2 3 5 3 5s3-3 3-5c0-1.66-1.34-3-3-3zm0 1c1.11 0 2 .9 2 2 0 1.11-.89 2-2 2-1.1 0-2-.89-2-2 0-1.1.9-2 2-2z" transform="translate(1)" />
                                    </svg> Departure</label>

                                <input type="text" name="departure" id="departure" placeholder="departure city" required />
                            </div>
                            <div className="formBox">
                                <label for="destination">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8">
                                        <path d="M3 0c-1.66 0-3 1.34-3 3 0 2 3 5 3 5s3-3 3-5c0-1.66-1.34-3-3-3zm0 1c1.11 0 2 .9 2 2 0 1.11-.89 2-2 2-1.1 0-2-.89-2-2 0-1.1.9-2 2-2z" transform="translate(1)" />
                                    </svg> Destination</label>
                                <input type="text" name="destination" id="destination" placeholder="destination city" required />
                            </div>

                            <div className="formBox">
                                <label for="departure_dt"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8">
                                    <path d="M0 0v2h7v-2h-7zm0 3v4.91c0 .05.04.09.09.09h6.81c.05 0 .09-.04.09-.09v-4.91h-7zm1 1h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm-4 2h1v1h-1v-1zm2 0h1v1h-1v-1z" />
                                </svg> Leave</label>
                                <input type="date" name="departure_dt" id="departure_dt" required />
                            </div>
                            <div className="formBox">
                                <label for="return_dt"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8">
                                    <path d="M0 0v2h7v-2h-7zm0 3v4.91c0 .05.04.09.09.09h6.81c.05 0 .09-.04.09-.09v-4.91h-7zm1 1h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm-4 2h1v1h-1v-1zm2 0h1v1h-1v-1z" />
                                </svg> Return</label>
                                <input type="date" name="return_dt" id="return_dt" required />
                            </div>

                            <div className="col">
                                <label for="num_adults"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8">
                                    <path d="M4 0c-1.1 0-2 1.12-2 2.5s.9 2.5 2 2.5 2-1.12 2-2.5-.9-2.5-2-2.5zm-2.09 5c-1.06.05-1.91.92-1.91 2v1h8v-1c0-1.08-.84-1.95-1.91-2-.54.61-1.28 1-2.09 1-.81 0-1.55-.39-2.09-1z" />
                                </svg> Adults</label>

                                <input type="number" name="num_adults" id="num_adults" min="1" max="10" step="1" />


                                {/* <select name="num_adults" id="num_adults">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select> */}

                            </div>

                            <div className="col">
                                <label for="amount" title="Max. price per person"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 8 8">
                                    <path d="M2 0v1h-.75c-.68 0-1.25.57-1.25 1.25v.5c0 .68.44 1.24 1.09 1.41l2.56.66c.14.04.34.29.34.44v.5c0 .14-.11.25-.25.25h-2.5c-.12 0-.21-.04-.25-.06v-.94h-1v1c0 .34.2.63.44.78.23.16.52.22.81.22h.75v1h1v-1h.75c.69 0 1.25-.56 1.25-1.25v-.5c0-.68-.44-1.24-1.09-1.41l-2.56-.66c-.14-.04-.34-.29-.34-.44v-.5c0-.14.11-.25.25-.25h2.5c.11 0 .21.04.25.06v.94h1v-1c0-.34-.2-.63-.44-.78-.23-.16-.52-.22-.81-.22h-.75v-1h-1z" transform="translate(1)" />
                                </svg> Price range</label>
                                <input id="amount" type="text" />
                                {/* <div id="slider-range"></div> */}
                            </div>

                            <div className=" col buttons">
                                <input type="reset" name="btnReset" id="btnReset" value="Reset" />
                            </div>
                            <div className=" col buttons">
                                <input type="submit" name="btnSubmit" id="btnSubmit" value="Submit" />
                            </div>

                        </div>
                    </form>
                </section>
            </div >
        </div>
    )
}

export default Tours;