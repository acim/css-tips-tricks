<script>
  import { Router, link, Route } from "svelte-routing";
  import Background from "./Background.svelte";
  import BeforeAfter from "./BeforeAfter.svelte";
  import FocusWithin from "./FocusWithin.svelte";
  import CustomFocus from "./CustomFocus.svelte";

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
      <Route path="beforeafter" component={BeforeAfter} />
      <Route path="focuswithin" component={FocusWithin} />
      <Route path="customfocus" component={CustomFocus} />
    </div>
    <hr />
    <nav>
      <a href="/" use:link>Home</a>
      <a href="/background" use:link>Background</a>
      <a href="/beforeafter" use:link>Before & After</a>
      <a href="/focuswithin" use:link>Focus Within</a>
      <a href="/customfocus" use:link>Custom Focus</a>
    </nav>
  </Router>
</main>
