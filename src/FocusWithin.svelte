<script>
  const css = `
form:focus-within {
  background-color: lightgray;
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
  form {
    max-width: 500px;
    padding: 2em;
  }
  form:focus-within {
    background-color: lightgray;
  }
  input {
    display: block;
    border-radius: 4px;
    border: 1px solid grey;
    padding: 0.8rem 1rem;
  }
  input:focus {
    outline: none;
    background-color: gray;
  }
</style>

<div class="container">
  <form action="#!">
    <div class="row">
      <label for="username">Username</label>
      <input id="username" type="text" />
      <label for="password">Password</label>
      <input id="password" type="password" />
    </div>
  </form>
</div>

<div>
  <pre>{css}</pre>
</div>
