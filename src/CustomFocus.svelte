<script>
  const css = `
button {
  background-color: yellow;
  padding: 1rem;
  border-radius: 0.2rem;
  box-shadow: none;
  border: 0;
}
button:hover,
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px deepskyblue, 0 0 0 5px yellow;
}
a {
  text-decoration: none;
}
a:hover,
a:focus {
  outline: 2px solid yellow;
  outline-offset: 2px;
  -moz-outline-radius: 0.2rem;
}
::-moz-focus-inner {
  border: 0;
}
`;
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
  }
  .card {
    background-color: deepskyblue;
    width: 50ch;
    height: 30rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    margin: 1rem;
    color: yellow;
  }
  p {
    margin: 1rem;
  }
  button {
    background-color: yellow;
    padding: 1rem;
    border-radius: 0.2rem;
    box-shadow: none;
    border: 0;
  }
  button:hover,
  button:focus {
    outline: none;
    box-shadow: 0 0 0 3px deepskyblue, 0 0 0 5px yellow;
  }
  a {
    text-decoration: none;
  }
  a:hover,
  a:focus {
    outline: 2px solid yellow;
    outline-offset: 2px;
    -moz-outline-radius: 0.2rem;
  }
  ::-moz-focus-inner {
    border: 0;
  }
</style>

<div class="container">
  <div class="card">
    <h1>Title</h1>
    <p>
      Lorem ipsum dolor sit amet
      <a href="#!">consectetur</a>
      adipisicing elit. Tempore magnam cumque consequatur ducimus maiores eaque
      architecto ipsum esse voluptatibus commodi animi dolore voluptate ab sunt
      eius, eligendi ex quam nostrum!
    </p>
    <button type="button">Click me</button>
  </div>
</div>

<div>
  <pre>{css}</pre>
</div>
