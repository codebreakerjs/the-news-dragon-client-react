import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from 'react-icons/fa';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <Card className=" mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb -0 h6'>{author.name}</p>
                    <p className='h5'><small> {moment(author?.published_date).format('yyy-MM-D')} </small></p>
                </div>
                <div>
                    <span className='h6 '><FaRegBookmark /></span>
                    <span className='h6 ms-2'><FaShareAlt /></span>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text className='h6'>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1 h5 d-flex'>

                    <Rating 
                    style={{ maxWidth: 150 }} 
                    value={Math.round(rating?.number || 0 )} readOnly />

                    <span> {rating?.number}</span>
                </div>
                <div className='h5'>
                    <FaEye />{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;