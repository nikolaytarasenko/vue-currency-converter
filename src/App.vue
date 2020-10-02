<template>
  <div id="app">
    <app-container>
      <app-header></app-header>
      <app-form></app-form>
      <h1>Result: {{ getCurrencyResult }}</h1>

    </app-container>
  </div>
</template>

<script>
import appHeader from '@/components/app-header';
import appForm from '@/components/app-form';
import appContainer from '@/layout/app-container';

export default {
  name: 'App',
  components: {
    appHeader,
    appForm,
    appContainer
  },
  data() {
    return {
      currencyResult: 'nothing yet',
      allCurrenciesObject: this.getAllCurrencies
    }
  },
  computed: {
    getCurrencyResult() {
      return this.$store.getters.GET_CURRENCY_RESULT;
    },
    getAllCurrencies() {
      const allCurrencies = this.$store.getters.GET_ALL_CURRENCIES;

      this.test(allCurrencies.results);

      return allCurrencies.results;
    }
  },
  mounted() {
    const currencies = {
      from: 'USD',
      to: 'UAH',
      from_count: 1
    };

    this.$store.dispatch('UPDATE_CURRENCY_RESULT', currencies);
    this.$store.dispatch('UPDATE_ALL_CURRENCIES');
  },
  methods: {
    test(currencies) {
      console.log(currencies);
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
}
</style>
