<template>
  <section class="reviews-item">
    <ReviewsHeading :rating="review.rating" :author="review.author" />
    <p class="reviews-item__description">{{ review.content }}</p>
  </section>
</template>

<script>
import ReviewsHeading from './ReviewsHeading.vue';

export default {
  name: 'ReviewsItem',
  components: {
    ReviewsHeading,
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-item {
  width: 350px;
  height: 196px;
  background: #fff;
  border: 2px solid #e1efff;
  border-bottom: 0;
  padding: 20px 20px;
  &__description {
    margin: 0;
    -webkit-line-clamp: 5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
