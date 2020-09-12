<script lang="ts">
  import Nav from "../components/Nav.svelte";
  import type crayon from "crayon";

  export let nav: crayon.Router;

  const css = `
`;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
  }
  .card {
    position: relative;
    width: 20rem;
    height: 10rem;
    perspective: 30rem;
  }
  .card__side {
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.5rem;
    display: grid;
    place-items: center;
    font-size: 2rem;
    padding: 1rem;
    width: 20rem;
    height: 10rem;
  }
  .card__side--front {
    background-color: lightgreen;
  }
  .card__side--back {
    background-color: pink;
    transform: rotateY(180deg);
  }
  .card:hover .card__side--front {
    transform: rotateY(-180deg);
  }
  .card:hover .card__side--back {
    transform: rotateY(0);
  }
</style>

<div class="container">
  <div class="card">
    <div class="card__side card__side--front">FRONT</div>
    <div class="card__side card__side--back">BACK</div>
  </div>
</div>

<div>
  <pre>{css}</pre>
</div>

<Nav {nav} />
