import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import { Helmet } from 'react-helmet'
import Image from 'react-bootstrap/Image'
import introimage from '../images/introimage.png'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Helmet>
        <title>Stony Hill Essentials, LLC</title>
        <meta name='description' content='Stony Hill Essentials, LLC'></meta>
      </Helmet>
      <Meta />
      {!keyword ? (
        <Row className='bg-dark'>
          <Col>
            <h2>Elevating self-care one bar at a time.</h2>
            <p>
              A fusion of compassionate craftsmanship, natural ingredients, and
              practical opulence make Stony Hill Essentials the smart,
              instinctive choice for those who embrace wellness and care about
              the future.
            </p>
            <h2>Why should you care about your skin...</h2>
            <p>
              In the human body, skin is the largest organ. Around one third of
              the body’s toxins are released through the skin, hence this
              wonderful organ needs tender loving care. The skin is more
              valuable than we can comprehend, as skin is made up of nerves that
              directly communicates with the brain throughout the day to help
              guard us.
            </p>
          </Col>
          <Col>
            <ProductCarousel />
          </Col>
          <Col>
            <Image src={introimage} fluid className='introimage'></Image>
          </Col>
        </Row>
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
