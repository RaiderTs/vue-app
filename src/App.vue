<template>
  <div :id="$style.app">
    <h2>{{ text }}</h2>
    <CustomInput v-model="text" />
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
import CustomInput from './components/shared/CustomInput.vue';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    CustomInput,
  },
  data() {
    return {
      apartments,
      text: '',
    };
  },
  methods: {
    handleItemClick() {
      console.log('item click');
    },
  },
};
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
