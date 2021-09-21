import review1 from "../../../assets/reviews/review1.png";
import review2 from "../../../assets/reviews/review2.png";
import review3 from "../../../assets/reviews/review3.png";

const Reviews = (props) => {
  return (
    <div className="reviews" id="reviews">
      <h3 className="reviews__title">🥰 Our Reviews 🥰</h3>
      <div className="reviews__container">
        <div className="reviews__box">
          <img src={review1} alt="" />
          <h3>Jessica Smith</h3>
          <div className="reviews__stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti
            Delectus, Ducimus Facere Quod Ratione Vel Laboriosam? Est, Maxime
            Rem. Itaque.
          </p>
        </div>
        <div className="reviews__box">
          <img src={review2} alt="" />
          <h3>Dave McLovin</h3>
          <div className="reviews__stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti
            Delectus, Ducimus Facere Quod Ratione Vel Laboriosam? Est, Maxime
            Rem. Itaque.
          </p>
        </div>
        <div className="reviews__box">
          <img src={review3} alt="" />
          <h3>Maria Jones</h3>
          <div className="reviews__stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti
            Delectus, Ducimus Facere Quod Ratione Vel Laboriosam? Est, Maxime
            Rem. Itaque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
