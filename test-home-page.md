---
layout: page
permalink: /test-home-page/
---
<style>
  .nav-bar hr {
    width: 100%;
    border: none;
    border-top: 1px solid #ccc;
    margin: 1em 0;
  }

  .nav-icons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    padding: 0.5em 0;
  }

  .nav-icons a img {
    width: 43px;
    height: 43px;
    display: inline-block;
    border: none;
    padding: 2px;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .nav-icons a:hover img {
    transform: scale(1.05);
    opacity: 0.8;
  }
</style>

<nav class="nav-bar">
  <hr>
  <div class="nav-icons">
    <a href="https://ellisjalia.com" title="Home">
      <img src="/assets/icons/menu.png" alt="Home icon">
    </a>
    <a href="https://ellisjalia.com/essays" title="Notes">
      <img src="/assets/icons/quill.png" alt="Notes icon">
    </a>
    <a href="https://ellisjalia.com/art" title="Artwork">
      <img src="/assets/icons/paint-palette.png" alt="Artwork icon">
    </a>
    <a href="https://ellisjalia.com/newsletter" title="Newsletter">
      <img src="/assets/icons/newsletter.png" alt="Newsletter icon">
    </a>
    <a href="https://ellisjalia.com/about" title="About Me">
      <img src="/assets/icons/unknown.png" alt="About Me icon">
    </a>
  </div>
  <hr>
</nav>
