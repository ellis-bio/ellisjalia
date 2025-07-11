---
layout: default
permalink: /test-home-page-3/
---
<style>
  body {
    background-color: white;
    color: black;
    font-family: 'Georgia', serif;
    margin: 0;
    padding: 0;
  }
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: tomato;
    text-decoration: none;
  }
  .nav-icons {
    display: flex;
    justify-content: center;
    gap: 16px;
    padding: 8px 0;
  }
  .nav-icons a img {
    width: 43px;
    height: 43px;
    padding: 2px;
  }
  .post { margin-bottom: 0; padding-bottom: 0; }
  .post-title {
    font-size: 1.7rem;
    margin-bottom: 0;
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 700;
    text-align: left;
  }
  .post-date {
    font-size: 0.95rem;
    color: silver;
    font-family: 'Georgia', serif;
    margin-bottom: 1em;
    text-align: left;
  }
  .post-image { text-align: center; margin: 1em 0; }
  .post-image img { max-width: 100%; height: auto; }
  .post-caption {
    font-size: 0.9rem;
    color: grey;
    text-align: center;
    margin-top: 0.3em;
  }
  .post p { text-align: left; }
  .quote { margin: 1.5em; }
  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 1.5em 0;
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 4px 0 16px 0;
    gap: 6px;
    flex-wrap: wrap;
    max-width: 612px;
    margin: 4px auto 0 auto;
    width: 100%;
  }
  .pagination span {
    margin-right: 12px;
    font-size: 16px;
  }
  .pagination button {
    border: none;
    background-color: #e0e0e0;
    color: black;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s;
  }
  .pagination button:hover:not(.active):not(:disabled) {
    background-color: tomato;
  }
  .pagination .active {
    background-color: #fdf6d8;
    font-weight: bold;
  }
  .pagination button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  @media (max-width: 640px) {
    .pagination { padding: 3px 0 12px 0; gap: 5px; }
    .pagination span { margin-right: 8px; font-size: 14px; }
    .pagination button { padding: 7px 10px; font-size: 13px; }
  }
  @media (max-width: 480px) {
    .pagination { padding: 4px 0 10px 0; gap: 6px; }
    .pagination span { margin-right: 8px; font-size: 14px; }
    .pagination button { padding: 8px 10px; font-size: 14px; }
  }
  .hidden { display: none; }
</style>

<hr width="100%" size="3">
<div class="nav-icons">
  <a href="https://ellisjalia.com"><img src="/assets/icons/menu.png" /></a>
  <a href="https://ellisjalia.com/essays"><img src="/assets/icons/quill.png" /></a>
  <a href="https://ellisjalia.com/art"><img src="/assets/icons/paint-palette.png" /></a>
  <a href="https://ellisjalia.substack.com/"><img src="/assets/icons/newsletter.png" /></a>
  <a href="https://ellisjalia.com/about"><img src="/assets/icons/unknown.png" /></a>
</div>
<hr width="100%" size="3">

<div id="posts-container">
  <!-- Page 1 Posts -->
  <div class="page-content" data-page="1">
    <div class="post">
      <p class="post-title">
        <a href="https://ellisjalia.com"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          Ferrari Design and 4-d Geometry
        </a>
      </p>
      <p class="post-date">Monday, July 7, 2025</p>
      <p>In one way or another, I knew what I liked by the time I was ten years old…</p>
      <!-- etc. -->
    </div>
    <hr>
    <div class="post">
      <p class="post-title">
        <a href="https://ellisjalia.com"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          Japanese Prints
        </a>
      </p>
      <p class="post-date">Monday, July 7, 2025</p>
      <p>Besides reading and looking at books I want to read…</p>
      <!-- etc. -->
    </div>
  </div>

  <!-- Page 2 Posts -->
  <div class="page-content hidden" data-page="2">
    <div class="post">
      <p class="post-title">
        <a href="https://ellisjalia.com"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          Monet and Freedom in Art
        </a>
      </p>
      <p class="post-date">Tuesday, June 17, 2025</p>
      <p>I've been thinking a lot about the connection between Monet…</p>
      <!-- etc. -->
    </div>
    <hr>
    <div class="post">
      <p class="post-title">
        <a href="https://ellisjalia.com"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          Qualia and Programming
        </a>
      </p>
      <p class="post-date">Tuesday, May 27, 2025</p>
      <p>For the past three months, I've been working on—and off—on a paywall…</p>
      <!-- etc. -->
    </div>
  </div>
</div>
<!-- /end #posts-container -->

<div class="pagination" id="pagination"></div>

<script>
  const totalPages = 2;  // now only two pages
  let currentPage = 1;

  const urlParams = new URLSearchParams(window.location.search);
  const pageFromUrl = parseInt(urlParams.get('page'), 10);
  if (!isNaN(pageFromUrl) && pageFromUrl >= 1 && pageFromUrl <= totalPages) {
    currentPage = pageFromUrl;
  }

  function showPage(pageNumber) {
    document.querySelectorAll('.page-content').forEach(div => {
      div.classList.toggle('hidden', div.getAttribute('data-page') != pageNumber);
    });
  }

  function getPageList(current, total, maxLength) {
    const sideWidth = maxLength < 9 ? 1 : 2;
    const leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    const rightWidth = leftWidth;
    if (total <= maxLength) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    if (current <= maxLength - sideWidth - 1 - rightWidth) {
      return [
        ...Array.from({ length: maxLength - sideWidth - 1 }, (_, i) => i + 1),
        '...',
        ...Array.from({ length: sideWidth }, (_, i) => total - sideWidth + 1 + i)
      ];
    }
    if (current >= total - sideWidth - 1 - leftWidth) {
      return [
        ...Array.from({ length: sideWidth }, (_, i) => i + 1),
        '...',
        ...Array.from({ length: maxLength - sideWidth - 1 }, (_, i) => total - (maxLength - sideWidth - 1) + 1 + i)
      ];
    }
    return [
      ...Array.from({ length: sideWidth }, (_, i) => i + 1),
      '...',
      ...Array.from({ length: leftWidth + rightWidth + 1 }, (_, i) => current - leftWidth + i),
      '...',
      ...Array.from({ length: sideWidth }, (_, i) => total - sideWidth + 1 + i)
    ];
  }

  function renderPagination() {
    const container = document.getElementById("pagination");
    container.innerHTML = "";
    showPage(currentPage);

    // update URL
    const url = new URL(window.location);
    url.searchParams.set('page', currentPage);
    window.history.pushState({ page: currentPage }, '', url);

    // Prev button
    const prev = document.createElement("button");
    prev.textContent = "‹ PREV";
    prev.disabled = currentPage === 1;
    prev.onclick = () => { currentPage--; renderPagination(); };
    container.appendChild(prev);

    // Page numbers
    getPageList(currentPage, totalPages, 7).forEach(p => {
      if (p === '...') {
        const span = document.createElement('span');
        span.textContent = '…';
        container.appendChild(span);
      } else {
        const btn = document.createElement("button");
        btn.textContent = p;
        if (p === currentPage) btn.classList.add("active");
        btn.onclick = () => { currentPage = p; renderPagination(); };
        container.appendChild(btn);
      }
    });

    // Next button
    const next = document.createElement("button");
    next.textContent = "NEXT ›";
    next.disabled = currentPage === totalPages;
    next.onclick = () => { currentPage++; renderPagination(); };
    container.appendChild(next);
  }

  window.onpopstate = () => {
    const p = parseInt(new URL(window.location).searchParams.get('page'), 10);
    if (!isNaN(p) && p >= 1 && p <= totalPages) {
      currentPage = p;
      renderPagination();
    }
  };

  renderPagination();
</script>
