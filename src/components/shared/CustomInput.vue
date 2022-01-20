<template>
  <div class="wrapper-input">
    <input
      v-bind="$attrs"
      v-on="listeners"
      class="custom-input"
      :class="!isValid && `custom-input--error`"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      isValid: true,
      error: '',
    };
  },
  inject: ['form'],
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', event.target.value),
      };
    },
  },
  watch: {
    value() {
      this.validate();
    },
  },

  mounted() {
    if (!this.form) return;
    this.form.registerInput(this);
  },
  beforeDestroy() {
    if (!this.form) return;
    this.form.unRegisterInput(this);
  },

  methods: {
    validate(value) {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(value);
        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }
        return hasPassed;
      });
    },
    reset() {
      this.$emit('input', '');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.custom-input {
  min-height: 40px;
  min-width: 220px;
  /* width: 100%; */
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }

  &--error {
    background-color: #ff8686;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 16px;
    color: black;
    line-height: 1.3;
  }
}

.wrapper-input {
  position: relative;
  display: inline-flex;
}
</style>
