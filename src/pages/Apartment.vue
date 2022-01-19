<template>
  <main class="apartment-page">
    <Container>
      <div v-if="apartment" class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <Reviews :reviews="reviewsList" />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from '../components/shared/Container.vue';
// import apartments from '../components/apartment/apartments';
import reviewsList from '../components/reviews/reviews.json';
import ApartmentsMainInfo from '../components/apartment/ApartmentsMainInfo.vue';
import ApartmentsOwner from '../components/apartment/ApartmentsOwner.vue';
import Reviews from '../components/reviews';
import { getApartmentById } from '../services/apartments.service';

export default {
  name: 'ApartmentPage',
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
    Reviews,
  },
  data() {
    return {
      apartment: null,
    };
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
    // apartment() {
    //   return apartments.find(
    //     (apartment) => apartment.id === this.$route.params.id
    //   );
    // },
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getApartmentById(id);
      this.apartment = data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;
  &__content {
    display: flex;
    align-items: flex-start;
  }
  &__owner {
    min-width: 350px;
    margin-left: 30px;
  }
}
</style>
