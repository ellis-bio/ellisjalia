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
  </div>
  <!-- /end page-content[data-page="1"] -->

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
      <div class="post-image">
        <img src="/assets/images/monet-cover-4400x1202.png" alt="Monet and Freedom in Art">
      </div>
<p>I've been thinking a lot about the connection between Monet, Marcus Aurelius, Leonardo da Vinci, and Empedocles. My first newsletter is about that.</p>

<p>You can read it here: <a href="https://ellisjalia.substack.com/p/monet-and-freedom-in-art" style ="color:tomato;">"Monet and Freedom in Art"</a>.</p>
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
      <div class="post-image">
        <img src="/assets/images/qualia-and-programming.jpg" alt="Qualia and Programming">
      </div>
<p>For the past three months, I've been working on-and-off on a paywall. I want this site to be one of the best on the internet. But I also want to make a living off of it.</p> 

<p>The paywall's 99% complete, and I can't wait to show it to you. I think people are going to be shocked by it; because doing what's difficult is what gets attention. It's what separates the pros.</p>

<p>This site is one arm of Palinode, a company I started to bring artificial intelligence into everyday objects. The proceeds from this site will enable me to purchase materials to build robots.</p>

<p>Large Language Models are just the beginning of the artificial intelligence revolution. If humanity's to evolve to a Star Trek like society, we're going to need to embed AI into things. AI is going to be the third pillar in society, after fire (or nuclear fusion) and electricity.</p>

<p>I'm at an early concept stage, but I believe I can have a working prototype within six months to a year that will demonstrate several key breakthroughs. The first will be a new way of understanding dynamics. Robots will be able to move in new ways.</p>

<p>The second will be a new way of embedding AI into physical objects. Components will learn and adapt. This stage will take slightly longer, since the cloud architecture required is not yet available. But it will be, and we will be ready for it.</p>

<p>Programming is a difficult discipline. Yet what I outline above is a future that is grounded in one simple belief: physical reality allows for it.</p>

<p>Schopenhauer said that natural science is either a "description of forms and shapes, which I call Morphology; or an explanation of changes, which I call Etiology". If we take this statement to its natural conclusion, it becomes possible to design qualia experiences based on physical principles. That is, we begin with the qualia we want to see.</p>
</div>
<hr>
    <div class="post">
      <p class="post-title">
        <a href="https://ellisjalia.com"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          Reading Paths
        </a>
      </p>
      <p class="post-date">Friday, January 10, 2025</p>
<p>For the past few months, I’ve been reading three books: Musashi by Eiji Yoshikawa; Monet: The Restless Vision by Jackie Wullschläger; and Critique of Pure Reason by Immanuel Kant.</p>

<p>Little did I know the first two are basically whole lives. Monet is what I’ve been reading a lot of lately. It’s been such an immersive experience, from reading about him begging his friends to send him wine, to the tragic death of his wife, and the circumstances around the painting of <a href="https://en.wikipedia.org/wiki/The_Magpie_(Monet)" style="color:tomato">“The Magpie”</a>.</p>

<div class="post-image" style="margin-bottom: 1em; margin-top:1em; text-align: center;">
  <img src="/assets/images/reading-paths-1.png">
</div>

<p>Likewise with Musashi. Following him as he grows up, and as he learns that mastery of the sword comes through mastery of unrelated disciplines like calligraphy, pottery and painting, has opened up so many avenues. The Kant book is a different beast altogether, however, but I’m committed now. Even if it takes me a year, I will finish it.</p>

<p>A question I’ve been posing myself recently is, <b>what reading paths should I take in the future?</b></p>

<div class="post-image" style="margin-bottom: 1.5em; margin-top:1.5em; text-align: center;">
  <img src="/assets/images/reading-paths-2.png">
</div>

<p>This quote by Jean Piaget got me thinking about reading as a path that you can take to increase your powers to order the world:</p>

<p style="margin: 1.5em;">"The goal of education is not to increase the amount of knowledge but to create the possibilities for a child to invent and discover, to create men who are capable of doing new things."</p>
</div>
<hr>
<div class="post">
      <p class="post-title">
        <a href="https://ellisjalia.com"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          Libri di Bottega
        </a>
      </p>
      <p class="post-date">Tuesday, January 7, 2025</p>
<div class="post-image" style="margin-bottom: 0.3em; text-align: center;">
  <img src="/assets/images/da-vinci-2025.png"
       alt="Libri di Bottega">
</div>
<p style="font-size:0.9rem; color: grey; text-align: center; margin-top: 0.3em;">
  A selection of drawings from Leonardo da Vinci's notebooks.
</p>
<p style="margin-top: 2em;">“The senses are of the earth; reason stands apart from them in contemplation.” - Leonardo da Vinci
</p>

<p>‘Libri di bottega’ translates to something like ‘work books’ or ‘workshop books’. Leonardo da Vinci obtained the practice of using ‘libri di bottega’ - notebooks that combine notes, sketches, models and records for consultation - during his training with Verocchio.</p>

<p>In December 2024, I wrote about <a href="https://ellisjalia.com/2024/12/05/the-mind-of-leonardo/" style="color:tomato">da Vinci’s view of the world.</a> In this post, I want to delve deeper into his notebooks.</p>

<p>The libri di bottega are instruments for expression. Because of their flexible typology, it meant that da Vinci could use the workbooks as a repository for creative ideas, a place which could provide continuity for visual exercises and creative thoughts, and a means of practicing for fresh sketches. The workbooks are moreover anthologies of motifs, written reminders and sketches.</p>

<p>Drawing was thus to be used as an instrument of cognitive investigation - to fix in place teaching furnished by experience; the suggestion of forms upon the mind; and the depiction of the curved and parallel lines which make up everything in the world. His drawings also play with hazy colours and outlines to depict distances; perspective was also given by colour, by the fact that colour fades in the distance.</p>

<p>Sketching for him was a motive for ongoing thinking. He used them to derive life-like movement and gestures to communicate “atti mentali” - the mental acts of subjects.</p>

<div class="post-image" style="margin-bottom: 0.3em; text-align: center;">
  <img src="/assets/images/da-vinci-2025-3.png"
       alt="Libri di Bottega">
</div>
<p style="font-size:0.9rem; color: grey; text-align: center; margin-top: 0.3em;">
 Head and shoulders of a Christ figure (c. 1490-1495); bald man in profile (c. 1495); and roaring lion (c. ?).
</p>

<p>Drawings and sketches were “short signs” of bigger ideas, and hence why his uncultivated compositions placed a focus on the mental acts of figures, people and animals instead of a focus on the limbs. Leonardo writes:</p>

<p style="margin: 1.5em;">“Therefore, painter, roughly compose the limbs of your figures and first attend to the movements appropriate to the mental accidents (acts) of the animals who compose the story, rather than to the beauty of and goodness of their limbs.”</p>

<p>He studied the dynamic rhythms of life, and the aboriginal forces of nature which destroy everything: waves, whirls, spirals, centrifugal and centripetal forces. He saw these as the vital values inherent in nature, as its creative impulses, and as its way of the continuous transformation of forms.</p>

<div class="post-image" style="margin-bottom: 0.3em; text-align: center;">
  <img src="/assets/images/da-vinci-2025-2.png"
       alt="Libri di Bottega">
</div>
<p style="font-size:0.9rem; color: grey; text-align: center; margin-top: 0.3em;">
Studies of water flowing past obstacles and sketch of whirlpool (c. 1508-1510); study of horse (c. 1503); and anatomical studies on the rotation of the arm (c. 1509-1510).
</p>

<p>Leonardo saw the world in terms of laws - ‘reasons’ that govern nature, and the mechanisms which underlie it. The relationship between cause and affect was always on his mind.</p>

<p>Leonardo referred to nature as the “mistress of all mistresses”. In order to make works of any significance, the artist should not imitate but only take nature as the standard. Nature, experience and direct observation were the cornerstones of his method. The principles which regulate nature were indispensable to his production of art.
</p>

<p>He was also a student of metamorphosis; the changing aspects of the world. He saw the genetic proceedings in nature and as that which forms its history. His sketches depict a clear train of thought: scientific analysis and artistic synthesis both lend to each other. For instance, he understood geological processes as the “chain of the world”. He wanted to take as his task the investigation and visualisation of the productive forces of the world.</p>

<p>Da Vinci subjected everything to an inquisitive gaze. His drawings have vibrancy, dynamism, analysis of morphology; the definition of forms are subjects to his understanding of the laws of reality and perspective (e.g. the disappearance of figures as they recede into the distance).</p>

<p>He could give a sense of breadth of landscape; a breeze moving through the trees, and the roar and motion of the waterfall. Nature was thus to be observed not as a background to life’s happenings; but instead the very dynamic force which brings forth everything.</p>

<p>As the only Renaissance author to allude to sketchbooks, he deemed them important for close observations from nature. He revisited themes ‘ex novo’, meaning from the beginning, as is evidenced by his animal and anatomical drawings.</p>

<div class="post-image" style="margin-bottom: 0.3em; text-align: center;">
  <img src="/assets/images/da-vinci-2025-4.png"
       alt="Libri di Bottega">
</div>
<p style="font-size:0.9rem; color: grey; text-align: center; margin-top: 0.3em;">
Studies of the paw of a dog or wolf (c. 1480); study of the proportions of a dog's head (c. 1497-1499); and study of the proportions of a horse's leg (c. 1485-1490).
</p>

<p>Leonardo above all understood the necessity of technical spontaneity and virtuosity. He was aware of the role required by both the conscious and unconscious mind in the creative impulse. </p>

<p>In the dazzling quick sketches that he produced, he allowed the creative imagination to be released through that process of rapid sketching and the brainstorming of ideas. He was also aware of the creative energy that is evident in an unfinished work of art. He owned a copy of Leon Battista Alberti’s work, De Pictura, in which Alberti says:</p>

<p style="margin: 1.5em;">“It is advisable to avoid that decadence of those who, wanting everything to be free from every defect and everything to be too clean, in their hands the work becomes old and dirty before it is finished.”</p>

<p>For ultimately, Leonardo wanted to capture in his drawings the convergence of sensory perception and the phenomena and movement of the world. Hence why his drawings often do not provide too much detail, but instead allude to the fact that, in them, an inquisitive mind is subjectively investigating the world.</p>
</div>
<hr>
</div>
  <!-- /end page-content[data-page="2"] -->

</div>
<!-- /end #posts-container -->

<div class="pagination" id="pagination"></div>

<script>
const totalPages = 2; // change as needed
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

