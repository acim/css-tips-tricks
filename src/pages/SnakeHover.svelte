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
  a {
    font-size: 5rem;
    position: relative;
    text-decoration: none;
    color: black;
  }
  a::after {
    content: "";
    position: absolute;
    border-bottom: 5px solid red;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: scale(0);
    transform-origin: right;
    transition: transform 350ms ease-in;
  }
  a:hover::after {
    transform: scale(1);
    transform-origin: left;
  }
</style>

<div class="container"><a href="#!">link</a></div>

<div>
  <pre>{css}</pre>
</div>

<Nav {nav} />
