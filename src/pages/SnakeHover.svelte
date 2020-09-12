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

button {
  margin-top: 2rem;
  width: 10ch;
  height: 5rem;
  background-color: rgba(0,0,255,.8);
  font-size: 2rem;
  border: 0;
  position: relative;
  z-index: 0;
  border-radius: .5rem;
}

button::before {
  content: '';
  background-color: red;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 500ms ease-in-out;
  border-radius: .5rem;
}

button:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}
</style>

<div class="container">
  <a href="#!">link</a>
  <button type="button">Link</button>
</div>

<div>
  <pre>{css}</pre>
</div>

<Nav {nav} />
