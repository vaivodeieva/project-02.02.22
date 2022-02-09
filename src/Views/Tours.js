import '../Assets/CSS/Tours.css';
function Tours() {

    return (
        <div className="tours-container">
            <section class="hero">
                <div class="search">
                    <h1>Find your next travel destination</h1>
                    <input type="text" placeholder="search location" />
                </div>
                <div class="scroll">scroll for more</div>
            </section >
            <section class="reveal">
                <div class="row">
                    <div class="text">
                        <h1 class="title">
                            <div class="show">Travel to: Italy</div>
                        </h1>
                        <div class="sub"><span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac facilisis urna, sed elementum ante. Aenean ornare vestibulum augue, id semper augue congue sed. </span>
                            <br />
                            <span class="readmore">Read more</span>
                        </div>
                    </div>
                    <div class="img-wrapper">
                        <img class="project-img" src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" alt="" />
                    </div>
                </div>
            </section>
            <section class="reveal">
                <div class="row">
                    <div class="text">
                        <h1 class="title">
                            <div class="show">Travel to: Greece</div>
                        </h1>
                        <div class="sub"><span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac facilisis urna, sed elementum ante. Aenean ornare vestibulum augue, id semper augue congue sed. </span>
                            <br />
                            <span class="readmore">Read more</span>
                        </div>
                    </div>
                    <div class="img-wrapper">
                        <img class="project-img" src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" />
                    </div>
                </div>
            </section>
            <section class="reveal">
                <div class="row">
                    <div class="text">
                        <h1 class="title">
                            <div class="show">Travel to: Germany</div>
                        </h1>
                        <div class="sub"><span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac facilisis urna, sed elementum ante. Aenean ornare vestibulum augue, id semper augue congue sed. </span>
                            <br />
                            <span class="readmore">Read more</span>
                        </div>
                    </div>
                    <div class="img-wrapper">
                        <img class="project-img" src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" />
                    </div>
                </div>
            </section>

        </div >
    )
}

export default Tours;