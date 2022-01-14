<template>
  <div id="app">
    <ApartmentsList :items="apartment" />
  </div>
</template>

<script>
import ApartmentsList from './components/apartment/ApartmentsList.vue';
export default {
  name: 'App',
  components: {
    ApartmentsList,
  },
  data() {
    return {
      apartment: {
        id: 'sdasf13sda1f321asd',
        title: 'Trolo-lo',
        descr:
          'lorem lorem trolo-lo lorem lorem trolo-lo lorem lorem trolo-lo lorem lorem trolo-lo lorem lorem trolo-lo',
        price: 2032,
        rating: 4.5,
        location: {
          city: 'Kherson',
        },
        owner: {
          name: 'Ellen',
          phone: '123-123-123',
          email: 'qwe@mail.com',
        },
      },
    };
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
