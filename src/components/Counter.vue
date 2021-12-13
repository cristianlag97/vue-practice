<template>
  <h2>{{ customTitle }}</h2>
  <p> {{ counter }} <sup>2</sup>  = {{ squereCounter }}</p>
  <p data-testid="counter"> {{ counter }} </p>

  <div class="prueba">
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  name: "Counter",

  props: {
    title: String,
    start: {
      type: Number,
      //required: true,
      default: 100,
      validator(value) {
        return value >= 0
      }
    }
  },

  data() {
    return {
      counter: this.start,
    }
  },
  methods: {
    getSquare() {
      return this.counter * this.counter
    },

    increase() {
      this.counter ++
    },

    decrease() {
      this.counter --
    }
  },
  computed: {
    squereCounter() {
      return this.counter * this.counter
    },

    customTitle() {
      return this.title ? this.title : 'Counter'
    }
  }
}
</script>

<style>

  button{
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
  }

</style>