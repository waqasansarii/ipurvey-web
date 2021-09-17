import React from 'react'

const OrderDetail = () => {
    return (
        <div className='orderDetail_container'>
            <div className="orderDetail_card">
                <h5>Order Details</h5>
                <div className="subTotal_order">
                    <p>SubTotal</p>
                    <p>$50</p>
                </div>
                <div className="service_fee">
                    <p>Service Fee</p>
                    <p>$50</p>
                </div>
                <div className="subTotal_order total_line">
                    <p>Total</p>
                    <p>$50</p>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail
