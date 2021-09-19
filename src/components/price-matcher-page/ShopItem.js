import React from 'react'

function ShopItem(props) {

    return(
        <div className="card text-white" style={{backgroundColor: '#fff'}}>
            <div className="card-body">
                <h4 className="card-title">{props.prodName}</h4>
                <p className="card-text">{props.name}</p>
                <p className="card-text">{props.price}</p>
                {/* <a href={data.url} class="btn btn-warning" target="_blank">Apply now</a> */}
            </div>
        </div>
    )
}

export default ShopItem