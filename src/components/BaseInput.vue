<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :id="label" :value="value" @input="updateValue" v-bind="$attrs" />
  </div>
</template>

<script>
import { formFieldMixin } from '../mixins/formFieldMixin'
export default {
  name: 'BaseInput',
  mixins: [formFieldMixin],
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style></style>
