<template>
  <div class="reviews-heading">
    <ReviewsAvatar />
    <div class="reviews-heading__content">
      <span class="reviews-heading__author">{{ author }}</span>
      <Rating :rating="rating" />
    </div>
  </div>
</template>

<script>
import Rating from '../../StarRating.vue';
import ReviewsAvatar from './ReviewsAvatar.vue';

export default {
  name: 'ReviewsHeading',
  components: {
    Rating,
    ReviewsAvatar,
  },
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    author: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-heading {
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  &__content {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
}
</style>
