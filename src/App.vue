<template>
  <div id="app">
    <h2>{{ text }}</h2>
    <Container>
      <ApartmentFilterForm class="apartments-filter" @submit="logger" />
    </Container>
    <ApartmentsList :items="apartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :descr="apartment.descr"
          :rating="apartment.rating"
          :price="apartment.price"
          :imgSrc="apartment.imgSrc"
          @click.native="handleItemClick"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from './components/apartment/ApartmentsList.vue';
import ApartmentsItem from './components/apartment/ApartmentsItem.vue';
import apartments from './components/apartment/apartments';
import ApartmentFilterForm from './components/apartment/ApartmentFilterForm.vue';
import Container from './components/shared/Container.vue';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    Container,
  },
  data() {
    return {
      apartments,
      text: '',
    };
  },
  methods: {
    logger(value) {
      console.log('logger: ', value);
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.apartments-filter {
  margin-bottom: 40px;
}
</style>
