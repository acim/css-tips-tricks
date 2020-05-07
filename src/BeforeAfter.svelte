<script>
  const css = `
blockquote::before {
  content: open-quote;
}
blockquote::after {
  content: close-quote;
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
  blockquote::before {
    content: open-quote;
  }
  blockquote::after {
    content: close-quote;
  }
</style>

<div class="container">
  <blockquote
    cite="https://dzone.com/articles/best-programming-jokes-amp-quotes">
    Any fool can write code that a computer can understand. Good programmers
    write code that humans can understand.
  </blockquote>
</div>

<div>
  <pre>{css}</pre>
</div>
