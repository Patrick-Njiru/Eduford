import React from 'react'

import { homePageData } from '../../constants/data'

const Reviews = () => (
    <div className='row'>
        { 
            homePageData.reviews.map(review => 
                <div 
                    key={review.reviewer}
                    style={{ background: 'rgba(255, 192, 203, 0.435)' }}
                    className='card border-0 shadow col-10 col-sm-5 mx-auto mb-5 py-4 pe-5'
                >
                    <div className="d-flex">
                        <img src={review.reviewerPic} alt={review.reviewer} width='55' height='55' className='me-5 rounded-circle' />

                        <div>
                            <p className='text-secondary'> { review.reviewerOpinion } </p>

                            <h4 className='fw-bold'> { review.reviewer } </h4>

                            <p className='text-danger'> { review.reviewerRating } </p>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
)

export default Reviews