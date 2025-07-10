---
layout: default
permalink: /test-home-page/
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

.container {
  text-align: center;
}

.post {
  margin-bottom: 0;
  padding-bottom: 0;
}

.post:not(:last-child) {
  border-bottom: 1px solid #ddd;
}

.post-title {
  font-size: 1.7rem;
  margin-bottom: 0;
  font-family: 'Montserrat', sans-serif;
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

.post-image {
  text-align: center;
  margin: 1em 0;
}

.post-image img {
  max-width: 100%;
  height: auto;
}

.post-caption {
  font-size: 0.9rem;
  color: grey;
  text-align: center;
  margin-top: 0.3em;
}

.post p {
  text-align: left;
}

.quote {
  margin: 1.5em;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 0 16px 0;
  gap: 6px;
  flex-wrap: wrap;
  max-width: 612px;
  margin: 4px auto 0 auto; /* Moved closer to the <hr> */
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

/* Responsive design */
@media (max-width: 640px) {
  .pagination {
    padding: 3px 0 12px 0;
    gap: 4px;
  }
  .pagination span {
    margin-right: 8px;
    font-size: 14px;
  }
  .pagination button {
    padding: 6px 8px;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .pagination {
    padding: 2px 0 8px 0;
    gap: 3px;
  }
  .pagination span {
    margin-right: 6px;
    font-size: 12px;
  }
  .pagination button {
    padding: 5px 6px;
    font-size: 11px;
  }
}

.hidden {
  display: none;
}
</style>

<center>
<hr width="100%" size="3">
<div class="container">
  <a href="https://ellisjalia.com"><img src="/assets/icons/menu.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
  <a href="https://ellisjalia.com/essays"><img src="/assets/icons/quill.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
  <a href="https://ellisjalia.com/art"><img src="/assets/icons/paint-palette.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
  <a href="https://ellisjalia.substack.com/"><img src="/assets/icons/newsletter.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
  <a href="https://ellisjalia.com/about"><img src="/assets/icons/unknown.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
</div>
<hr width="100%" size="3">
</center>

<div id="posts-container">
  <!-- Page 1 Posts -->
  <div class="page-content" data-page="1">
    <div class="post">
      <p class="post-title">
        <a href="https://ellisjalia.com"
           style="text-decoration:none; color:inherit; transition:color 0.3s;"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          The Imagination
        </a>
      </p>
      <p class="post-date">Thursday, July 3, 2025</p>
      <div class="post-image">
        <img src="/assets/images/the-imagination.jpg" alt="The Imagination">
      </div>
      <p>This week's newsletter, <a href="https://ellisjalia.substack.com/p/the-imagination" style="color:tomato">"The Imagination"</a>, and its cover image, was wholly inspired by this quote from Leonardo da Vinci:</p>
      <p class="quote">"I have found in my own experience that it is of no small benefit when you lie in bed in the dark to go over again in the imagination the outlines of the forms you have been studying or of other noteworthy things conceived by the subtle speculation; and this is certainly a praiseworthy exercise and useful in impressing things on the memory."</p>
      <p>You can read the full newsletter <a href="https://ellisjalia.substack.com/p/the-imagination" style="color:tomato">here.</a></p>
    </div>
    <hr>
    <div class="post">
      <p class="post-title">
        <a href="https://ellisjalia.com"
           style="text-decoration:none; color:inherit; transition:color 0.3s;"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          The Imagination
        </a>
      </p>
      <p class="post-date">Thursday, July 3, 2025</p>
      <div class="post-image">
        <img src="/assets/images/the-imagination.jpg" alt="The Imagination">
      </div>
      <p>This week's newsletter, <a href="https://ellisjalia.substack.com/p/the-imagination" style="color:tomato">"The Imagination"</a>, and its cover image, was wholly inspired by this quote from Leonardo da Vinci:</p>
      <p class="quote">"I have found in my own experience that it is of no small benefit when you lie in bed in the dark to go over again in the imagination the outlines of the forms you have been studying or of other noteworthy things conceived by the subtle speculation; and this is certainly a praiseworthy exercise and useful in impressing things on the memory."</p>
      <p>You can read the full newsletter <a href="https://ellisjalia.substack.com/p/the-imagination" style="color:tomato">here.</a></p>
    </div>
    <hr>
  </div>

<!-- Page 2 Posts -->
  <div class="page-content hidden" data-page="2">
    <div class="post">
      <p class="post-title">
        <a href="https://ellisjalia.com"
           style="text-decoration:none; color:inherit; transition:color 0.3s;"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          Programmable Matter
        </a>
      </p>
      <p class="post-date">Sunday, June 29, 2025</p>
      <div class="post-image">
        <img src="/assets/images/electrophoretic-display.png" alt="Electrophoretic Display">
        <p class="post-caption">A close-up photo of an electrophoretic display</p>
      </div>
      <p>In <a href="https://www.goodreads.com/book/show/34274957-life-3-0" style="color:tomato;">Life 3.0</a>, Max Tegmark says AI could help us rebuild cities atom by atom. Control of matter will be possible.</p>
      <p>The electrophoretic display is a favorite innovation of mine. It works by microencapsulating black and white particles in a fluid. With an electric field, the charged particles move to the surface or bottom, producing a readable screen like ink on paper.</p>
      <div class="post-image">
        <img src="/assets/images/electrophoretic-display-figures.png" alt="Electrophoretic Display Figures">
        <p class="post-caption">From "An electrophoretic ink for all-printed reflective electronic displays" (Comiskey et al, 1998)</p>
      </div>
      <p>Today, e-ink is in BMW’s color-changing concept car, the "I Vision Dee":</p>
      <div style="text-align: center;">
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/BbbkExGbVDI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
      <p>It's one of the earliest real-world cases of "programmable matter". Newer approaches — like <a href="https://www.youtube.com/watch?v=hI5UDKaWJOo" style="color:tomato;">MIT’s M-Blocks</a> — show promise, too.</p>
      <p>But to truly make matter reconfigurable, we'll need simpler shapes and tight hardware-software harmony.</p>
    </div>
    <hr>
  </div>
</div>

<div class="pagination" id="pagination"></div>

<script>
const totalPages = 2;
let currentPage = 1;

function showPage(pageNumber) {
  // Hide all pages
  const allPages = document.querySelectorAll('.page-content');
  allPages.forEach(page => page.classList.add('hidden'));
  
  // Show the selected page
  const targetPage = document.querySelector(`[data-page="${pageNumber}"]`);
  if (targetPage) {
    targetPage.classList.remove('hidden');
  }
}

function renderPagination() {
  // Validate currentPage
  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;
  
  const container = document.getElementById("pagination");
  container.innerHTML = "";
  
  // Show the appropriate page content
  showPage(currentPage);
  
  // Prev button
  const prev = document.createElement("button");
  prev.textContent = "‹ PREV";
  prev.disabled = currentPage === 1;
  prev.onclick = () => {
    currentPage--;
    renderPagination();
  };
  container.appendChild(prev);
  
  // Page numbers
  const start = Math.max(1, currentPage - 3);
  const end = Math.min(totalPages, currentPage + 3);
  
  for (let i = start; i <= end; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => {
      currentPage = i;
      renderPagination();
    };
    container.appendChild(btn);
  }
  
  // Next button
  const next = document.createElement("button");
  next.textContent = "NEXT ›";
  next.disabled = currentPage === totalPages;
  next.onclick = () => {
    currentPage++;
    renderPagination();
  };
  container.appendChild(next);
}

// Initial render
renderPagination();
</script>
