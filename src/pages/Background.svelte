<script lang="ts">
  import Nav from "../components/Nav.svelte";
  import type crayon from "crayon";

  export let nav: crayon.Router;

  const css = `
h1.white {
  background: white;
  color: black;
  mix-blend-mode: screen;
}
h1.black {
  background: black;
  color: white;
  mix-blend-mode: multiply;
}
h1.image {
  margin-top: 120px;
  background-image: url(//picsum.photos/800/600);
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
`;
</script>

<style>
  header {
    background: url(//picsum.photos/1280/800) center center no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-width: 100vw;
    height: 40vh;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    margin-top: 20px;
    font-size: 10rem;
    text-transform: uppercase;
  }
  h1.white {
    margin-top: 20px;
    background: white;
    color: black;
    mix-blend-mode: screen;
  }
  h1.black {
    background: black;
    color: white;
    mix-blend-mode: multiply;
  }
  h1.image {
    margin-top: 120px;
    background-image: url(//picsum.photos/800/600);
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 5rem;
    }
  }
</style>

<header>
  <div>
    <h1 class="white">Cool title</h1>
    <h1 class="black">Cool title</h1>
  </div>
  <div>
    <h1 class="image">Cool title</h1>
  </div>
</header>

<div>
  <pre>{css}</pre>
</div>

<Nav {nav} />
