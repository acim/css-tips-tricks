<script>
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
`;
  const tri = "center;";
</script>

<style>
  header {
    background: url(/munich.jpg) center center no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-width: 100vw;
    height: 60vh;
  }
  div {
    display: flex;
    justify-content: center;
  }
  h1 {
    font-size: 10rem;
    text-align: center;
    text-transform: uppercase;
    margin-top: 5rem;
    padding: 0 2rem;
  }
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
</header>
<main>
  <pre>{css}</pre>
</main>
