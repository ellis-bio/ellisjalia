---
layout: page
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

  /* Smooth colour transition on post title links */
  .post-title a {
    color: inherit;
    text-decoration: none;
    transition: color 200ms ease-in-out;
    will-change: color;
  }
  .post-title a:hover {
    color: tomato;
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

@media (max-width: 640px) {
  .post-title {
    font-size: 2rem; /* or adjust as needed */
  }

  .post-date {
    font-size: 1.1rem; /* or adjust as needed */
  }
}

@media (max-width: 480px) {
  .post-title {
    font-size: 2rem;
  }

  .post-date {
    font-size: 1.1rem;
  }
}

</style>

<hr width="100%" size="3">
<div class="nav-icons">
  <a href="https://ellisjalia.com"><img src="/assets/icons/menu.png" /></a>
  <a href="https://ellisjalia.com/essays"><img src="/assets/icons/quill.png" /></a>
  <a href="https://ellisjalia.com/art"><img src="/assets/icons/paint-palette.png" /></a>
  <a href="https://ellisjalia.com/newsletter"><img src="/assets/icons/newsletter.png" /></a>
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
          Optimus Prime
        </a>
      </p>
      <p class="post-date">Monday, July 28, 2025</p>
      <div class="post-image">
        <img src="/assets/images/transformers-one.jpg" alt="Optimus Prime">
      </div>
<p>Optimus Prime is one of my favourite characters in all of fiction. The 'Transformers One' film I saw yesterday is one of the best I’ve seen in a long time.</p>

<p>I love this dialogue:</p>

<p class="quote">ELITA: “My point is that your instincts tell you to break protocol for a
reason. This... blind optimism that you have is why you make such bold and courageous choices. That are also extremely stupid.”</p>

<p class="quote">ORION: “First time giving a pep talk?”</p>

<p class="quote">ELITA: “You're inspiring. You can envision a better future that no one else
can see.”</p>
</div>
<hr>
  <div class="post">
      <p class="post-title">
        <a href="https://ellisjalia.com"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          The Magic Mirror
        </a>
      </p>
      <p class="post-date">Monday, July 28, 2025</p>
      <div class="post-image">
        <img src="/assets/images/the-magic-mirror.jpeg" alt="The Magic Mirror">
      </div>
<p>I think about the epilogue to Jackie Wullschläger’s book, Monet: The Restless Vision, quite a bit. Especially these three passages:</p>

<p class="quote">"…he [Monet] enlarged the joy of vision."</p>

<p class="quote">"We look closely at the magic mirror…"</p>

<p class="quote">"…Monet, rather than depicting the material world, ‘succeeded in fixing the impalpable, in portraying the immaterial’, thus painting the ‘colour of time’."</p>
</div>
<hr>
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
<img src="/assets/images/ukiyoe-1.jpg" style="max-width: 70%; height: auto; margin-bottom:1em; margin-top: 1em;"></div>

<div style="text-align: center;">
<img src="/assets/images/ukiyoe-2.jpg" style="max-width: 70%; height: auto; margin-bottom:1em; margin-top: 1em;">
</div>

<div style="text-align: center;"><img src="/assets/images/ukiyoe-6.jpg" style="max-width: 70%; height: auto; margin-bottom:1em; margin-top: 1em;"></div>

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
<center><p style="font-size:0.9rem; color: grey">Figure 1 and 2 from “An electrophoretic ink for all-printed reflective electronic displays” by Comiskey et al, 1998</p></center>

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
<div class="post">
      <p class="post-title">
        <a href="https://ellisjalia.com"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          The Mind of Leonardo
        </a>
      </p>
      <p class="post-date">Tuesday, January 7, 2025</p>
<div class="post-image" style="margin-bottom: 0.3em; text-align: center;">
  <img src="/assets/images/davinci.png"
       alt="The Mind of Leonardo">
</div>
<p style="font-size:0.9rem; color: grey; text-align: center; margin-top: 0.3em;">
  A few examples of Leonardo's drawings, with self-portrait at age 60 in the centre. His notebook manuscripts are held in both public and private collections, notably by Bill Gates, the Ambrosiana, and the Royal Collection Trust.
</p>

<p>“...the greatest geniuses sometimes accomplish more when they work less, since they are searching for inventions in their minds, and forming those perfect ideas which their hands then express and reproduce from what they previously conceived with their intellect." - Leonardo da Vinci</p>

<p>The great Renaissance biographer and painter Giorgio Vasari wrote of Leonardo da Vinci that, in the last moments of his life, he rebuked himself for having “offended God and mankind in not having worked at his art as he should have”.</p>

<p>Da Vinci completed only about 20 paintings, but he left behind over 7,200 notebook pages, an accomplishment that reflects his unequaled range of intellectual passions.</p>

<p>He was born in 1452, near the town of Vinci, just outside of Florence, Italy. He was an illegitimate child to a notary father and a peasant mother, and initially received training in the master workshop of Andrea del Verrocchio. Until his death at age 67 in 1519, and despite his prodigious output, Leonardo owned little and hardly worked.</p>

<p>He tended to move between projects, leaving many of them unfinished (the Battle of Anghiari being a prominent example). Sigmund Freud characterised this tendency as the encroachment and subsequent suppression of the artist by the scientific personality which distinguished his life.</p>

<p>Yet, Leonardo's skill and outlook earned him a great reputation, which only grew after his death, and it culminates in our understanding and appreciation of him as the archetypal Renaissance figure. This is what Vasari writes about the qualities exemplified in his work:</p>

<p style="margin: 1.5em;">“...Nature so favoured him that, wherever he turned his thought, his mind, and his heart, he demonstrated with such divine inspiration that no one else was ever equal to him in the perfection, liveliness, vitality, excellence, and grace of his works."</p>

<p>He had elegance, finesse and neatness, and he enquired with unparalleled genius into the unity of nature and its variety of astonishing patterns. What is it that made da Vinci's mind special?
</p>

<p>To answer this question, it's essential to examine the extent of his contributions to painting, anatomy and scientific drawing, neuroscience, and ultimately, the blueprint of the scientific mind (this latter part will be addressed in a subscriber-only afterword to follow later).</p>

<p>A full answer may not be possible to the aforementioned question. But nevertheless, unbundling and putting together certain ideas might reveal how the mind of that quintessential genius was always devising new things, and how we might be able to learn from him.</p>

<h4>Leonardo as Artist</h4>

<p>Da Vinci revered the sense of vision, and placed it as man's highest sense. He described the eye as "the window to the soul", and the most important basis of all experience. Vision's role, beyond providing fundamental perceptual knowledge, involves the artist's use of the faculty in faithfully interpreting nature:</p>

<p style="margin: 1.5em;">"The painter's mind must of necessity enter into nature's mind in order to act as an interpreter between nature and art".</p>

<p>To peer into nature's mind, Da Vinci understood that the artist must learn the laws of reality and its manifestations as perspective. He conceived of perspective as the seeing of an object behind a sheet of glass, and by which a pyramidal cross section is cut by the glass; thus all points of perspective can be expressed by point, line, angle, surface, and body. He also devised three branches of perspective:</p>

<p style="margin: 1.5em;">"...the first deals with the reasons of the [apparent] diminution of the volume of opaque bodies as they recede from the eye, and is known as Diminishing or Linear Perspective. The second contains the way in which colours vary as they recede from the eye. The third and last is concerned with how the outlines of objects [in a picture] ought to be less finished in proportion as they are remote."</p>

<p>These laws of perspective were to be kept in mind so that only what could be seen with certainty was depicted as certain; that which was seen with difficulty was to be made indefinite. Lines were to be blurred and suggestively left open. His drawings were only made of outlines and hatching marks in accordance with those laws, and yet they convey unrivalled volume and dynamism.</p>

<div class="post-image" style="margin-bottom: 1em; text-align: center;"><img src="/assets/images/davinci-perspective.jpeg"></div>

<p>Leonardo's technique can thus be seen as a solution to the duality between abstraction, and a naturalistic interpretation of reality. This is best exemplified in some of his hydrodynamic and geological drawings. In them, he wanted to carry across the dynamic forces of nature, stones slowly shifting across the ages, as the roots of plants growing in the crevices were tearing those very stones out, moving them ever so slightly from the old place they once occupied. Water rapids rippling and creating vortices. In these images, amongst others, Leonardo shows that nature transforms everything.</p>

<p>His drawings convey movement and the moving figure in a style that possesses exemplary confidence and control over artistic tools. As a student of reality, in which he placed supreme trust in the instruction provided by the visible world, he carefully studied figures using his cross-hatching technique.</p>

<p>This allowed him not only to depict his close observations, but also to best old techniques in faithfully conveying distance, the intangible density of the atmosphere, and the idea that the world exists as a spatial continuum.</p>

<p>Leonardo divided the science of painting into drawing and shading, and it was for him the "true knowledge and legitimate issue of nature". There's a further passage in which he explains his thought process as to how the artist should best consider painting:</p>

<p style="margin: 1.5em;">"...as subtle invention which brings philosophy and subtle speculation to the consideration of all forms - seas and plains, trees, animals, plants and flowers - which are surrounded by light and shade".</p>

<div class="post-image" style="margin-bottom: 0.3em; text-align: center;"><img src="/assets/images/saint-john-the-baptist-leonardo-da-vinci.jpeg">
</div>
<p style="font-size:0.9rem; color: grey; text-align: center; margin-top: 0.3em;">
A detail from Saint John the Baptist by Leonardo da Vinci.
</p>

<p>This is a philosophy that is evident more so in the Mona Lisa and Saint John the Baptist, than any of his other paintings. About the former, read what Vasari had to say:</p>

<p style="margin: 1.5em;">"The eyes have the lustre and moisture always seen in living people, while around them are the lashes and all the reddish tones which cannot be produced without the greatest care. The eyebrows could not be more natural, for they represent the way the hair grows in the skin—thicker in some places and thinner in others, following the pores of the skin. The nose seems lifelike with its beautiful pink and tender nostrils. The mouth, with its opening joining the red of the lips to the flesh of the face, seemed to be real flesh rather than paint. Anyone who looked very attentively at the hollow of her throat would see her pulse beating: to tell the truth, it can be said that portrait was painted in a way that would cause every brave artist to tremble and fear, whoever he might be."</p>

<p>To breathe life into portraiture, anatomical details and structure were to be carefully extracted from reality itself, so that the mouth and the lips may be joined to the face as a continuous surface.</p>

<p>Only by seeing and learning from direct observation how each thing is formed can the artist learn to reproduce each part. And by faithfully combining parts that he has learnt how to draw, he may reproduce the whole. But he also knew that this process must be achieved step by step:</p>

<p style="margin: 1.5em;">"The organ of sight is one of the quickest, and takes in at a single glance an infinite variety of forms; notwithstanding which, it cannot perfectly comprehend more than one object at a time. For example, the reader, at one look over this page, immediately perceives it full of different characters; but he cannot at the same moment distinguish each letter, much less can he comprehend their meaning. He must consider it word by word, and line by line, if he be desirous of forming a just notion of these characters. In like manner, if we wish to ascend to the top of an edifice, we must be content to advance step by step, otherwise we shall never be able to attain it."</p>

<h4>Scientific Drawing & Anatomy</h4>

<p>Leonardo was a student of reality; being the first to draw in the open air, he inquired into the cause and reason of all visible things, and can be described as a visual empiricist. While he was knowledgeable of the scientific literature of his time and what had come before, he kept himself free and unconstrained by past thinkers. He accepted those things only which he could prove by the direct perception of his own eyes.</p>

<div class="post-image" style="margin-bottom: 1em; text-align: center;"><img src="/assets/images/davinci-star-bethlehem.jpeg">
</div>

<p>In his drawing "The Star of Bethlehem", he is able to depict the power of growth inherent in plants, the elasticity of twigs; and the correct observation and order of spiral shapes found in nature. There exists in them a combinatorial understanding of morphology and function of physiological principles that govern life. His drawings extract the "atmosphere of life" and make plants and animals look alive, since he is able to visualise the macro forces which we might characterise as the engine of life itself.
</p>

<div class="post-image" style="margin-bottom: 1em; text-align: center;"><img src="/assets/images/davinci-animals.jpeg">
</div>

<p>Leonardo thought of life as both a mechanism and organism. He thought of the earth as possessing a "spirit of growth"; and the soil as the flesh, its rocks as bones, limestone as the cartilage and "its blood, the springs of water".</p>

<p>The motion of animals, the major one found in nature he called "serpegiamento", or snake-like. It is a movement that he studied extensively and can be seen in the animal drawings, from horses to cats and fantastical dragons.</p>

<p>He used drawing to convey scientific knowledge (the empiricism aspect). Regarding the capturing of man in his anatomical studies, he warned against description without visualisation:</p>

<p style="margin: 1.5em;">"And you who wish to represent by words the form of man and all the aspects of his membrification, get away from that idea. For the more minutely you describe, the more you will confuse the mind of the reader and the more you will prevent him from a knowledge of the thing described. And so it is necessary to draw and to describe".</p>

<div class="post-image" style="margin-bottom: 1em; text-align: center;"><img src="/assets/images/davinci-anatomy.png">
</div>

<p>Leonardo's concept of drawing meant a new era for the human mind had emerged. Had his notebooks been published during his lifetime, or even the anatomical treatises he set out to complete but never did, the most profound revolution would have occurred in science. Yet, progress in anatomy was left to other great minds like Andreas Vesalius, with the publication of his treatise "On the Fabric of the Human Body in Seven Books".</p> 

<p>On anatomy, Leonardo advised that the painter should be,</p>

<p style="margin: 1.5em;">"...thoroughly familiar with the limbs in all the positions and actions of which they are capable, in the nude. [Then he will] know the anatomy of the sinews, bones, muscles, and tendons so that, in their various movements and exertions, he may know which nerve or muscle is the cause of each movement and show those only as prominent and thickened..."</p>

<h4>Contributions to Neuroscience</h4>

<p>Beyond his pioneering work in painting, anatomy and scientific drawing, Leonardo wanted to prove that the mind has a physical basis. He wished to show the mechanisms by which the brain makes sensory stimuli intelligible, and thus show the functioning of the mind. </p>

<p>A few of his drawings depict three ventricles in the brain, cavities filled with cerebrospinal fluid, the first being responsible for the processing of sensory stimuli; the second housing thought and the integration of the senses; and the last ventricle by means of which thought and sensation are imprinted into memory.</p>

<div class="post-image" style="margin-bottom: 1em; text-align: center;"><img src="/assets/images/davinci-brain.png">
</div>

<p>The second ventricle is depicted as being in the geometric centre of the brain, thus denoting "the locus of the soul". This for Da Vinci was the place where the senses came together to form the "sense communis", or common sense, the seat of universal judgment:</p>

<p style="margin: 1.5em;">"The soul apparently resides in the seat of the judgment, and the judgment apparently resides in the place where all the senses meet, which is called the common sense."</p>

<p>While this theory is known to be false, since we know the physical basis of the mind rests on electro-chemical communication between specialised neurons, it is nevertheless a triumph of his era, since he went beyond anything that had been put forward before.</p>

<p>To conclude, let's read an extract from Otto Benesch's essay, Leonardo da Vinci and Scientific Drawing (1943) that captures some aspects of his genius (and the likes of which I hope humanity will see again):</p>

<p style="margin: 1.5em;">"This vision of cosmic grandeur reveals the deep intuition of the artistic genius. Leonardo's scientific insight is unthinkable without his artistic imagination. The artist and the scientist are interdependent. Leonardo possessed not only the masculine sovereign and creative power, but also the feminine gift of highest empathy. He lived in the heart of things. His drawings prove that he felt like the object which he portrayed, that he identified himself with it. He looked at the world from the center, from the matrix, and it became diaphanous to him in an almost magic clearness. Thus, both intuition and divination served as guides for this greatest intellect among the artists in his scientific accomplishments."</p>
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

