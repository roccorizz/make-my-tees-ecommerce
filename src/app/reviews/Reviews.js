import React from 'react'
import CustomerReviewSwiper from '@/components/CustomerReviewSwiper/CustomerReviewSwiper';

const Reviews = () => {
    const dummyReviews = [
        { name: 'John Doe', photo: './customer1.jpg', title: 'Great Product', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', rating: 5 },
        { name: 'Jane Smith', photo: './customer1.jpg', title: 'Excellent Service', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', rating: 4 },
        { name: 'Bob Johnson', photo: './customer1.jpg', title: 'Amazing Experience', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', rating: 5 },
        { name: 'John Doe', photo: './customer1.jpg', title: 'Great Product', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', rating: 4 },
        { name: 'Jane Smith', photo: './customer1.jpg', title: 'Excellent Service', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', rating: 5 },
        { name: 'Bob Johnson', photo: './customer1.jpg', title: 'Amazing Experience', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', rating: 4 },
        // Add more dummy reviews as needed
    ];
    return (
        <div className='mx-auto max-w-[1602px] mt-[141px] mb-[128px] w-[288px] lg:w-[1602px]'>

            <div className='text-center'>

                <h2 className='text-[20px] md:text-[45px] lg:text-[45px] font-staatliches'>Customer Reviews</h2>
                <p className='text-[14px] md:text-[20px] lg:text-[20px] font-roboto-regular md:font-roboto lg:font-roboto'>Satisfied clients are not just customers; they are the lifeblood of any enterprise. Match My Tees understand and respect the<br />experiences feedback, and loyalty of customers. Discover what our valued clients have to say about their experiences.</p>

            </div>
            <CustomerReviewSwiper reviews={dummyReviews} />



        </div>

    )
}

export default Reviews;