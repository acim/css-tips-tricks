<script>
  import Background from "../pages/Background.svelte";
  import BeforeAfter from "../pages/BeforeAfter.svelte";
  import FocusWithin from "../pages/FocusWithin.svelte";
  import CustomFocus from "../pages/CustomFocus.svelte";

  export let nav;
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

<hr />
<nav>
  <a
    href="."
    on:click|preventDefault={() => nav.navigate('/background')}>Background</a>
  <a
    href="."
    on:click|preventDefault={() => nav.navigate('/beforeafter')}>Before & After</a>
  <a href="." on:click|preventDefault={() => nav.navigate('/focuswithin')}>Focus
    Within</a>
  <a
    href="."
    on:click|preventDefault={() => nav.navigate('/customfocus')}>Custom Focus</a>
</nav>
