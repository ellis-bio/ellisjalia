---
layout: page
permalink: /test-page-wrxm/
---
<style>
  .tabs-container {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;           /* ensure all children default to left */
  }

  .tabs-container h2 {
    margin-bottom: 1em;
    /* no text-align here: inherits left from the container */
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    margin: 1em 0;
  }

  .tab img {
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5em;
    vertical-align: middle;
  }

  .tab-label {
    font-weight: bold;
    color: #666;               /* default grey */
  }

  .tab-label.active {
    color: #000;               /* active = black */
  }

  /* the content panels */
  .tab-content {
    margin-left: 1.5em;        /* indent to line up under label text */
    display: none;
  }
  .tab-content.active {
    display: block;
  }

  /* simple divider */
  .tabs-container hr {
    border: none;
    border-top: 1px solid #666;
    margin: 1em 0;
  }
</style>

<div class="tabs-container">
  <h2>Why become a paid member?</h2>

  <!-- 1st item -->
  <div class="tab" data-target="section1">
    <img src="/assets/images/drawing-compass.png" alt="Knowledge Icon" />
    <span class="tab-label active">Human Knowledge and its Horizons</span>
  </div>
  <div id="section1" class="tab-content active">
    <p>
      You’ll get a scan of human knowledge like never before – in a way that
      promotes quality living, decision‑making, and insight.
    </p>
  </div>

  <hr />

  <!-- 2nd item -->
  <div class="tab" data-target="section2">
    <img src="/assets/images/insight.png" alt="Insight Icon" />
    <span class="tab-label">High quality insight</span>
  </div>
  <div id="section2" class="tab-content">
    <p>
      This means deep, unique insight through weekly articles (and other
      goodies) in the fields of art, science, philosophy, and technology –
      amongst others, published right here. Here’s an example of the quality
      you can expect.
    </p>
  </div>

  <hr />

  <!-- 3rd item -->
  <div class="tab" data-target="section3">
    <img src="/assets/images/united.png" alt="Community Icon" />
    <span class="tab-label">Membership in a community</span>
  </div>
  <div id="section3" class="tab-content">
    <p>
      To learn from each other through a community dedicated to ideas,
      illustrations, techniques, tools, and everything else. Join us!
    </p>
  </div>
</div>

<script>
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      // deactivate all
      document.querySelectorAll('.tab-label').forEach(lbl => lbl.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      // activate clicked
      tab.querySelector('.tab-label').classList.add('active');
      document.getElementById(tab.dataset.target).classList.add('active');
    });
  });
</script>
