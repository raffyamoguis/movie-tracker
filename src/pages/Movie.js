import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { useParams } from "react-router-dom";

import Headline from '../components/Headline'
import Tags from '../components/Tags'

const Movie = () => {
    let params = useParams();
    return (
        <Container>
            <Headline text={params.name} />
            <Row className='mt-4'>
                <Col md={2}>
                    <Image
                        src='https://img.myflixer.to/xxrz/250x400/201/9f/6d/9f6d472c846867a19d6904f64ed6c33e/9f6d472c846867a19d6904f64ed6c33e.jpg'
                        rounded
                        className='w-100'
                    />
                </Col>
                <Col md={10}>
                    <div>
                        <Tags text='Sci-fi' />
                        <Tags text='Horror' />
                        <p className='w-75 mt-4'>Craig, a young boy living in a small town befriends an older, reclusive billionaire, Mr. Harrigan. The two form a bond over books and an iPhone, but when the man passes away, the boy discovers that not everything dead is gone, and finds himself able to communicate with his friend from the grave through the iPhone that was buried with him.</p>
                        <div><b>Release: </b>2022-10-05</div>
                        <div><b>Duration: </b>101 min</div>
                        <div><b>Production: </b> Blumhouse Productions, Ryan Murphy Productions</div>
                        <div><b>Cast: </b>Donald Sutherland, Thomas Francis Murphy, Jaeden Lieberher, Joe Tippett, Caitlin Shorey</div>
                        <div><b>Country: </b> United States of America</div>
                    </div>
                </Col>
            </Row>
            <Headline text='Sources' />
        </Container>
    )
}

export default Movie