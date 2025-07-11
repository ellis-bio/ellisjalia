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

.post {
  margin-bottom: 0;
  padding-bottom: 0;
}

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
  .pagination {
    padding: 3px 0 12px 0;
    gap: 5px;
  }

  .pagination span {
    margin-right: 8px;
    font-size: 14px;
  }

  .pagination button {
    padding: 7px 10px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .pagination {
    padding: 4px 0 10px 0;
    gap: 6px;
  }

  .pagination span {
    margin-right: 8px;
    font-size: 14px;
  }

  .pagination button {
    padding: 8px 10px;
    font-size: 14px;
  }
}

.hidden {
  display: none;
}
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
      <p>In one way or another, I knew what I liked by the time I was ten years old. It was around then that I decided I was going to be an automotive designer. The problem was that I didn’t actually care about making the car – I just wanted to sit back and marvel at the drawings.</p>
      <p>As it turns out, not a whole lot changes from when you’re ten years old. I still love looking at drawings. In search of further inspiration, I listened to a <a href="https://www.youtube.com/watch?v=nncrQGpe9bQ&t=1665s" style="color:tomato">lecture</a> by Flavio Manzoni, the Ferrari Chief Design Officer, on their design methodology.</p>
      <div style="text-align: center;">
        <img src="/assets/images/ferrari-design-1.png" style="max-width:100%; height:auto; margin:1em 0;">
      </div>
      <p><b>Connect: Innovation, Functionality, and Art</b> – “There are continuous meetings, between designers, engineers, aerodynamicists, ergonomists, in order to find the best combination of several elements that are very difficult to combine.”</p>
      <div style="text-align: center;">
        <img src="/assets/images/ferrari-design-2.png" style="max-width:100%; height:auto; margin:1em 0;">
      </div>
      <p>“As you can see, there was an aerospacial inspiration. And for me this is very important, to be contaminated, to be influenced by different fields when we work on a car.”</p>
      <div style="text-align: center;">
        <img src="/assets/images/ferrari-design-3.png" style="max-width:100%; height:auto; margin:1em 0;">
      </div>
      <div style="text-align: center;">
        <img src="/assets/images/ferrari-design-4.png" style="max-width:100%; height:auto; margin:1em 0;">
      </div>
      <p>“This project started with a sketch. It represents conceptually the technological transfer from Formula One to road cars, that was the aim of this project. This is the so-called Speciale that we make every ten years representing the pinnacle of the Ferrari technology and the Ferrari beauty.”</p>
      <div style="text-align: center;">
        <img src="/assets/images/ferrari-design-5.png" style="max-width:100%; height:auto; margin:1em 0;">
      </div>
      <p>“The Mobius ribbon is very interesting because there are two surfaces. If you connect the ribbon like this [gestures to a half twist] you create one infinite surface. So you can see that there is four dimensions, the time taking part on this. This bottle [Klein bottle] has a very peculiar thing. The inner and the outer surfaces are just one. Just one infinite surface. This is the idea that we had. As you can see in these sketches [below]. So surfaces that are twisting and changing sections continuously could create the feeling of a very organic object.”</p>
      <div style="text-align: center;">
        <img src="/assets/images/ferrari-design-6.png" style="max-width:100%; height:auto; margin:1em 0;">
      </div>
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
      <p>Besides reading and looking at books I want to read, I’ve been looking at Japanese <a href="https://ukiyo-e.org/" style="color:tomato">ukiyo-e</a> (meaning “pictures of the floating world”) prints for inspiration.</p>
      <p>Here’s a few that I like:</p>

<div style="text-align: center;">
<img src="/assets/images/ukiyoe-1.jpg" style="max-width: 70%; height: auto; margin-bottom:1em; margin-top: 1em;">
</div>

<div style="text-align: center;">
<img src="/assets/images/ukiyoe-2.jpg" style="max-width: 70%; height: auto; margin-bottom:1em; margin-top: 1em;">
</div>

<div style="text-align: center;">
<img src="/assets/images/ukiyoe-6.jpg" style="max-width: 70%; height: auto; margin-bottom:1em; margin-top: 1em;">
</div>

<p>I love how violent and over the top they usually are, and I equally love their depictions of the human condition (in ukiyo-e things which are subject to change, such as cherry blossoms or boats ready for departure, hint at the impermanence of the world).</p>

<p>Last year I saw that the US Library of Congress put together a volume called “The Floating World of Ukiyo-E: Shadows, Dreams and Substance” and it reminded me of a lecture I saw on ancient Chinese metaphysics. I didn’t want to post this, since I don’t have the link to the lecture, but I recall the theme being discussed was the ancient Chinese notion of “Heaven”.</p>

<p>In Western philosophy, we long made the distinction between the world of sensation and the world of objects, but in this lecture that I saw the point was that for the ancient Chinese philosophers “Heaven” was the sensible world. They didn’t make the Kantian distinction between noumena and phenomena.</p> 

<p>So this spurred the following thought. Did the Japanese borrow from the ancient Chinese in depicting the world? I guess what I’m rhetorically asking is whether the Japanese print makers considered the world to be metaphysically monistic and its aspects ‘Shadows, Dreams and Substance’?</p>
</div>
    <hr>
    <div class="post">
      <p class="post-title">
        <a href="https://ellisjalia.com"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          The Imagination
        </a>
      </p>
      <p class="post-date">Thursday, July 3, 2025</p>
      <div class="post-image">
        <img src="/assets/images/the-imagination.jpg" alt="The Imagination">
      </div>
      <p>This week's newsletter, <a href="https://ellisjalia.substack.com/p/the-imagination" style="color:tomato">"The Imagination"</a>, was inspired by a quote from Leonardo da Vinci:</p>
      <p class="quote">"I have found in my own experience that it is of no small benefit when you lie in bed in the dark to go over again in the imagination the outlines of the forms you have been studying..."</p>
      <p>You can read the full newsletter <a href="https://ellisjalia.substack.com/p/the-imagination" style="color:tomato">here.</a></p>
    </div>
    <hr>
 <div class="post">
      <p class="post-title">
        <a href="https://ellisjalia.com"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          Programmable Matter
        </a>
      </p>
      <p class="post-date">Sunday, June 29, 2025</p>
<div class="post-image" style="margin-bottom: 0.3em; text-align: center;">
  <img src="/assets/images/electrophoretic-display.png"
       alt="Electrophoretic Display">
</div>
<p style="font-size:0.9rem; color: grey; text-align: center; margin-top: 0.3em;">
  A close-up photo of an electrophoretic display
</p>
<p>In <a href="https://www.goodreads.com/book/show/34274957-life-3-0" style="color:tomato;">Life 3.0: Being Human in the Age of Artificial Intelligence</a>, Max Tegmark says that, with AI, we're going to figure out how to rebuild cities atom by atom. Control of matter will be possible.</p>

<p>The key question then is, how do we get there? If we look at some of the most innovative technologies of recent years, a favourite of mine is the mind-boggling <a href="https://fultext.calis.edu.cn/nature/nature/394/6690/394253.pdf" style="color:tomato;">electrophoretic display</a> &mdash; also known as the e-ink display. After it was developed by MIT researchers, it made its way into devices like the Kindle.</p>

<p>If you’re not familiar with it, here’s how it works. The electrophoretic ink is synthesised by microencapsulating black and white charged microparticles in a dielectric fluid interposed by two glass electrodes.</p>

<p>The microcapsules range from 30-300um in diameter, and the differently coloured particles are migrated towards the viewer by the application of an external electric field. Black is obtained from an inorganic black pigment, and white is titanium dioxide.</p>

<p>Positively charged white particles move towards the top electrode layer, and opposite charged black particles move towards the bottom electrode. The fine control of the electric field results in a display that is the analogue of ink on paper.</p>

<div style="text-align: center;">
<img src="/assets/images/electrophoretic-display-figures.png" alt="Freedom in Art Cover" style="max-width: 100%; height: auto; margin-bottom:0.3em; margin-top: 1em;">
</div>
<p style="font-size:0.9rem; color: grey; text-align: center;">Figure 1 and 2 from “An electrophoretic ink for all-printed reflective electronic displays” by Comiskey et al, 1998</p>

<p>Nearly thirty years later, e-ink has now been adapted in the body of the BMW “I Vision Dee” &mdash; their colour-changing car:</p>

<div style="text-align: center;">
  <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/BbbkExGbVDI" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>
<br>
<p>I know of no other instances where matter &mdash; in this case microparticles &mdash; is dynamically controlled in the same way. So I think e-ink is a good candidate for an early iteration of “programmable matter”.</p>

<p>There have been other attempts more recently, with <a href="https://www.youtube.com/watch?v=hI5UDKaWJOo" style="color:tomato;">MIT's M-Blocks</a> and their <a href="https://nature.com/articles/s44172-022-00034-3" style="color:tomato;">modular building blocks and assembler</a> "constructors" that move along a passive lattice structure.</p>

<p>Approaches that use a Platonic solid as the structural unit may not be ideal candidates due to their bulk. Biomimicry options, I think, over the long run might present the best option for a unit base that would allow computable configurability. Such options might be geometrically simpler, and it would therefore be easier to model the shapes that need to be computed.</p>

<p>What’s for certain is that the right blend of hardware and software harmony would be needed to achieve a successful and practical iteration of programmable matter.</p>
    </div>
    <hr>
  </div>
  <!-- /end page-content[data-page="1"] -->

  <!-- Page 2 Posts -->
  <div class="page-content hidden" data-page="2">
    <div class="post">
      <p class="post-title">
        <a href="https://ellisjalia.com"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          The Imagination
        </a>
      </p>
      <p class="post-date">Thursday, July 3, 2025</p>
      <div class="post-image">
        <img src="/assets/images/the-imagination.jpg" alt="The Imagination">
      </div>
      <p>This week's newsletter …</p>
      <p><em>This is page 2.</em></p>
    </div>
    <hr>
    <div class="post">
      <!-- Add additional Page 2 posts here -->
    </div>
  </div>
  <!-- /end page-content[data-page="2"] -->

  <!-- Page 3 Posts -->
  <div class="page-content hidden" data-page="3">
    <div class="post">
      <!-- Page 3 post content -->
      <p><em>This is page 3.</em></p>
    </div>
    <hr>
  </div>

  <!-- Repeat similarly for pages 4–10 -->
  <div class="page-content hidden" data-page="4"><div class="post"><p><em>Page 4</em></p></div></div>
  <div class="page-content hidden" data-page="5"><div class="post"><p><em>Page 5</em></p></div></div>
  <div class="page-content hidden" data-page="6"><div class="post"><p><em>Page 6</em></p></div></div>
  <div class="page-content hidden" data-page="7"><div class="post"><p><em>Page 7</em></p></div></div>
  <div class="page-content hidden" data-page="8"><div class="post"><p><em>Page 8</em></p></div></div>
  <div class="page-content hidden" data-page="9"><div class="post"><p><em>Page 9</em></p></div></div>
  <div class="page-content hidden" data-page="10"><div class="post"><p><em>Page 10</em></p></div></div>

</div>
<!-- /end #posts-container -->

<div class="pagination" id="pagination"></div>

<script>
const totalPages = 10; // change as needed
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

