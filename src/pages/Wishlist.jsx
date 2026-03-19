import React from 'react'
import Header from '../components/Header'
import { Button, Card } from 'react-bootstrap'

const Wishlist = () => {
    return (
        <div>
            {/* <Header/> */}
            <div>
                <h2>My wishlist here ..</h2>
            </div>
            <div>
                <Card style={{ width: '18rem' }} className='p-2'>
                    <Card.Img variant="top" src="https://s3bg.cashify.in/gpro/uploads/2022/04/18140303/samsung-galaxy-s24-5g-back-1.webp" />
                    <Card.Body>
                        <div className='d-flex gap-2'>

                            <Card.Title>smart phone</Card.Title>
                            <Card.Title> <span className='text-primary'>Rs 39999 /-</span></Card.Title>
                        </div>

                        <Card.Text>

                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div className='d-flex gap-2'>

                            <Button variant="primary">Buy now</Button>
                            <Button variant="warning ">Move to cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Wishlist
