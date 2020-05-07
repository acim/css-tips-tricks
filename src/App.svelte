<script>
  import { Router, link, Route } from "svelte-routing";
  import Background from "./Background.svelte";
  import Form from "./Form.svelte";

  export let url = "";
</script>

<style>
  hr {
    margin: 20px auto;
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    display: inline-block;
    background-color: #8e44ad;
    color: white;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
  }

  a:link,
  a:visited {
    text-decoration: none;
    transition: transform 0.2s;
  }

  a:hover,
  a:active {
    transform: scale(1.1);
  }
</style>

<main>
  <Router {url}>
    <div>
      <Route path="background" component={Background} />
      <Route path="form" component={Form} />
    </div>
    <hr />
    <nav>
      <a href="/" use:link>Home</a>
      <a href="/background" use:link>Background</a>
      <a href="/form" use:link>Form</a>
    </nav>
  </Router>
</main>
