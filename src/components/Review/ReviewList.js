import React from 'react';
import '../../pages/Review/Review.scss';
import ReviewListItem from './ReviewListItem';

const ReviewList = () => {
  const review = [
    {
      id: 1,
      reviewTitle: '찜양식 어복쟁반',
      date: '2022-05-23',
      userId: 'lemon',
      userInput: '솔직히 기대안하고 주문했는데 어지간한 식당보다 맛있어요',
    },
    {
      id: 2,
      reviewTitle: '찜양식 어복쟁반',
      date: '2022-05-23',
      userId: 'lemon',
      userInput: '솔직히 기대안하고 주문했는데 어지간한 식당보다 맛있어요',
    },
    {
      id: 3,
      reviewTitle: '찜양식 어복쟁반',
      date: '2022-05-23',
      userId: 'lemon',
      userInput: '솔직히 기대안하고 주문했는데 어지간한 식당보다 맛있어요',
    },
  ];

  return (
    <ul className="reviewListComponent">
      {review.map(item => (
        <ReviewListItem
          key={item.id}
          reviewTitle={item.reviewTitle}
          date={item.date}
          userId={item.userId}
          userInput={item.userInput}
        />
      ))}
    </ul>
  );
};

export default ReviewList;
