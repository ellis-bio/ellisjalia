---
layout: page
permalink: /test-page-wrxm/
---
<center>
<hr width="100%" size="3">
<div class="container">
        <a href="https://ellisjalia.com"><img src="/assets/icons/menu-bw.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
        <a href="https://ellisjalia.com/essays"><img src="/assets/icons/quill-bw.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
        <a href="https://ellisjalia.com/art"><img src="/assets/icons/paint-palette-bw.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
        <a href="https://ellisjalia.com/newsletter"><img src="/assets/icons/newsletter.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
        <a href="https://ellisjalia.com/about"><img src="/assets/icons/unknown-bw.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
 </div>
  <hr width="100%" size="3">
  </center>

  <center><h2>Why become a paid member?</h2></center>

  <!-- 1st item (shown by default) -->
  <div data-content="section1"
       style="display:flex; align-items:center; cursor:pointer; margin-top:1em;">
    <img src="/assets/images/drawing-compass.png"
         alt="Knowledge Icon"
         style="width:1.5em; height:1.5em; margin-right:0.5em; vertical-align:middle;">
    <span class="tab-label"
          style="font-weight:bold; color:#000;">Human Knowledge and its Horizons</span>
  </div>
  <div id="section1">
    <p>
      You’ll get a scan of human knowledge like never before – in a way that promotes quality living, decision‑making, and insight. Knowledge and wisdom will be our advantage.
    </p>
  </div>

  <hr style="border:none; border-top:1px solid #666; margin:1em 0;">

  <!-- 2nd item -->
  <div data-content="section2"
       style="display:flex; align-items:center; cursor:pointer; margin-top:1em;">
    <img src="/assets/images/insight.png"
         alt="Insight Icon"
         style="width:1.5em; height:1.5em; margin-right:0.5em; vertical-align:middle;">
    <span class="tab-label"
          style="font-weight:bold; color:#666;">High quality insight</span>
  </div>
  <div id="section2" style="display:none;">
    <p>
      This means deep, unique insight through weekly articles (and other goodies) in the fields of art, science, philosophy, and technology – amongst others, published right here. Here’s an example of the quality you can expect.
    </p>
  </div>

  <hr style="border:none; border-top:1px solid #666; margin:1em 0;">

  <!-- 3rd item -->
  <div data-content="section3"
       style="display:flex; align-items:center; cursor:pointer; margin-top:1em;">
    <img src="/assets/images/united.png"
         alt="Placeholder Icon"
         style="width:1.5em; height:1.5em; margin-right:0.5em; vertical-align:middle;">
    <span class="tab-label"
          style="font-weight:bold; color:#666;">Membership in a community</span>
  </div>
  <div id="section3" style="display:none;">
    <p>
      To learn from each other through a community dedicated to ideas, illustrations, techniques, tools, and everything else. Join us!
    </p>
  </div>

  <script>
    document.querySelectorAll('[data-content]').forEach(tab => {
      tab.addEventListener('click', () => {
        // hide all panels
        document.querySelectorAll('div[id^="section"]').forEach(sec => {
          sec.style.display = 'none';
        });
        // show the clicked panel
        document.getElementById(tab.dataset.content).style.display = 'block';
        // reset all tab labels to grey
        document.querySelectorAll('.tab-label').forEach(lbl => {
          lbl.style.color = '#666';
        });
        // set clicked tab label to black
        tab.querySelector('.tab-label').style.color = '#000';
      });
    });
  </script>

</body>
</html>