<template>
  <main class="apartment-page">
    <Container>
      <ApartmentsMainInfo :apartment="apartment" />
    </Container>
  </main>
</template>

<script>
import Container from '../components/shared/Container.vue';
import apartments from '../components/apartment/apartments';
import ApartmentsMainInfo from '../components/apartment/ApartmentsMainInfo.vue';

export default {
  name: 'ApartmentPage',
  components: {
    Container,
    ApartmentsMainInfo,
  },
  computed: {
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
  },
  mounted() {
    console.log(this.apartment);
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;
}
</style>
