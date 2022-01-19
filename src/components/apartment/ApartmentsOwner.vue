<template>
  <section class="apartments-owner">
    <h2 class="apartments-owner__title">Информация о владельце:</h2>
    <p class="apartments-owner__info">{{ owner.name }}</p>
    <p class="apartments-owner__info">tel: {{ owner.phone }}</p>
    <p class="apartments-owner__info">e-mail: {{ owner.email }}</p>
  </section>
</template>

<script>
export default {
  name: 'ApartmentsOwner',
  props: {
    owner: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-owner {
  padding: 20px;
  background: #e1efff;

  &__title {
    padding-bottom: 20px;
    font-weight: 700;
    font-size: 20px;
  }
  &__info {
    padding-bottom: 5px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
