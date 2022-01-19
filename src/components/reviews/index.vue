<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Сумарный рейтинг</h2>
      <div class="reviews__rating">
        <span class="reviews__amount">{{ amountOfReviews }} отзыв(ов)</span>
        <Rating :rating="totalRating" />
      </div>
    </div>
    <ReviewsItem
      v-for="review in currentReview"
      :key="review.author"
      :review="review"
    />
    <button @click="toggleReviews" class="reviews__show-more">
      {{ buttonText }}
    </button>
  </section>
</template>

<script>
import ReviewsItem from './reviews-item';
import Rating from '../../components/StarRating.vue';

export default {
  name: 'Reviews',
  components: {
    ReviewsItem,
    Rating,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      reviewsLimit: 2,
    };
  },
  computed: {
    totalRating() {
      const total = this.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return total / this.reviews.length;
    },

    amountOfReviews() {
      return this.reviews.length;
    },

    currentReview() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    buttonText() {
      return this.reviewsLimit === this.reviews.length
        ? 'Свернуть'
        : 'Читать еще...';
    },
  },
  methods: {
    toggleReviews() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 2;
      } else {
        return (this.reviewsLimit = this.reviews.length);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.reviews {
  margin-left: 30px;
  margin-top: 20px;
  padding: 0 2px;
  background: $card-bg;

  &__heading {
    padding: 20px;
  }

  &__show-more {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 12px;
    font-family: inherit;
  }
  &__title {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
  }
  &__rating {
    display: flex;
    justify-content: space-between;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
  }
}
</style>
