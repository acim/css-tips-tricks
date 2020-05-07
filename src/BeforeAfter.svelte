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
  const css3 = `
h1::before {
  content: url(//unsplash.it/400/5);
  display: block;
}
`;
  const css4 = `
.counter {
  counter-reset: monkey-counter;
}
.counter h4::before {
  counter-increment: monkey-counter;
  content: counter(monkey-counter);
  position: absolute;
  background: lightgrey;
  width: 2em;
  height: 2em;
  left: -2em;
  bottom: 0.5em;
  border-radius: 50%;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
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
    text-align: center;
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
  h1::before {
    content: url(//unsplash.it/500/5);
    display: block;
  }
  .counter {
    counter-reset: monkey-counter;
  }
  h4 {
    padding: 1em;
    position: relative;
    text-align: left;
  }
  .counter h4::before {
    counter-increment: monkey-counter;
    content: counter(monkey-counter);
    position: absolute;
    background: lightgrey;
    width: 2em;
    height: 2em;
    left: -2em;
    bottom: 0.5em;
    border-radius: 50%;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
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
  <div>
    <a href="#!" data-tooltip="This is some tooltip">
      Hover me to see the tooltip
    </a>
  </div>
  <div>
    <h1>Title with image decoration</h1>
  </div>
  <div class="counter">
    <h4>Monkey</h4>
    <h4>Business</h4>
    <h4>Is</h4>
    <h4>Awesome</h4>
  </div>
</div>

<div>
  <h3>Quotes</h3>
  <pre>{css1}</pre>
  <h3>Tooltip</h3>
  <pre>{css2}</pre>
  <h3>Image decoraction</h3>
  <pre>{css3}</pre>
  <h3>Counter</h3>
  <pre>{css4}</pre>
</div>
