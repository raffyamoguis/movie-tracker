import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Skeleton from './Skeleton'

const LoaderSkeleton = () => {
    const mb = {
        marginBottom: '5em'
    }
    return (
        <>
            <Row md={8} className='gx-0 mt-5' style={mb}>
                {Array.from({ length: 16 }).map((_, idx) => (
                    <Col>
                        <Skeleton />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default LoaderSkeleton