<script>
  const css1 = `
blockquote::before {
  content: open-quote;
}
blockquote::after {
  content: close-quote;
}
`;
  const css2 = `
a[data-tooltip] {
  color: black;
  position: relative;
}
a[data-tooltip]::after {
  content: attr(data-tooltip);
  display: block;
  position: absolute;
  background-color: lightgrey;
  border-radius: 100px;
  padding: 0.5em 1em;
  bottom: 0;
  transform: scale(0);
  transition: transform 0.25s, bottom 0.25s;
}
a[data-tooltip]:hover::after {
  bottom: 100%;
  transform: scale(1);
}
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
  .container div {
    margin: 3rem;
  }
  blockquote {
    text-align: center;
  }
  blockquote::before {
    content: open-quote;
  }
  blockquote::after {
    content: close-quote;
  }
  a[data-tooltip] {
    color: black;
    position: relative;
  }
  a[data-tooltip]::after {
    content: attr(data-tooltip);
    display: block;
    position: absolute;
    background-color: lightgrey;
    border-radius: 100px;
    padding: 0.5em 1em;
    bottom: 0;
    transform: scale(0);
    transition: transform 0.25s, bottom 0.25s;
  }
  a[data-tooltip]:hover::after {
    bottom: 100%;
    transform: scale(1);
  }
  h3 {
    margin-top: 2rem;
  }
</style>

<div class="container">
  <div>
    <blockquote
      cite="https://dzone.com/articles/best-programming-jokes-amp-quotes">
      Any fool can write code that a computer can understand. Good programmers
      write code that humans can understand.
    </blockquote>
  </div>
  <div class="link">
    <a href="#!" data-tooltip="This is some tooltip">
      Hover me to see the tooltip
    </a>
  </div>
</div>

<div>
  <h3>Quotes</h3>
  <pre>{css1}</pre>
  <h3>Tooltip</h3>
  <pre>{css2}</pre>
</div>
