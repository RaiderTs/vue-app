<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" class="form__select" v-model="city" />
    <CustomInput
      type="number"
      v-model="price"
      placeholder="Цена, от"
      error-message="Не должно быть пустым"
      :rules="rules"
    />
    <SubmitButton class="form__submit" type="submit">Подбор жилья</SubmitButton>
  </form>
</template>

<script>
import CustomSelect from '../shared/CustomSelect.vue';
import CustomInput from '../shared/CustomInput.vue';
import SubmitButton from '../shared/Button.vue';
import { isRequired, charLimit } from '../../utils/validationRules';

export default {
  name: 'ApartmentFilterForm',
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton,
  },
  data() {
    return {
      price: '',
      city: '',
    };
  },
  computed: {
    cities() {
      return [
        { value: '', label: 'Город', selected: true },
        'Kyiv',
        'Odesa',
        'Poltava',
        'Kharkiv',
        'Dnipro',
        'Lviv',
        'Kherson',
        'Mariupol',
      ];
    },
    rules() {
      return [isRequired, charLimit(5)];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { city: this.city, price: this.price });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>
