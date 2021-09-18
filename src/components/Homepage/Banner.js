import React from 'react'

function Banner() {
    return (
        <div className="container banner">
            <div className="row flex">
                <div className="col-lg-6 col-md-12">
                    <div className="heading">
                        <h2 className="display-6">Paying too much?</h2>
                    </div>
                    Aliqua ullamco elit ea ut elit nulla proident cupidatat eu ipsum. Fugiat non anim aute tempor voluptate cillum in consequat mollit. Ut nulla Lorem laboris aliqua pariatur ullamco reprehenderit id commodo consequat id.
                    <div className="buttons">
                        <button type="button" className="btn btn-primary">Get Started!</button>
                        <button type="button" className="btn btn-outline-info">Learn More</button>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <img src="./Banner.png" alt="Placeholder image" width="300" height="230"></img>
                </div>
            </div>
        </div>
    )
}

export default Banner
