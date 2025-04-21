---
layout: page
permalink: /test-page-wrxm/
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Left‑Aligned Tabs</title>
  <style>
    /* Scope everything in this container */
    .tabs-container {
      max-width: 600px;
      margin: 0 auto;
      text-align: left;      /* force left alignment */
      font-family: Arial, sans-serif;
    }
    /* Main heading */
    .tabs-container h2 {
      margin-bottom: 1em;
      text-align: left;      /* explicit override */
    }
    /* Each tab label row */
    .tab {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      margin: 1em 0 0.2em;
    }
    .tab img {
      width: 1.5em;
      height: 1.5em;
      margin-right: 0.5em;
    }
    .tab-label {
      font-weight: bold;
      color: #666;
    }
    .tab-label.active {
      color: #000;
    }
    /* Content panels */
    .tab-content {
      margin-left: 2em;
      display: none;
      text-align: left;      /* ensure paragraphs are left */
    }
    .tab-content.active {
      display: block;
    }
    hr {
      border: none;
      border-top: 1px solid #666;
      margin: 1em 0;
    }
  </style>
</head>
<body>
  <div class="tabs-container">
    <h2>Why become a paid member?</h2>
    <div class="tab" data-target="section1">
      <img src="/assets/images/drawing‑compass.png" alt="Knowledge Icon">
      <span class="tab-label active">Human Knowledge and its Horizons</span>
    </div>
    <div id="section1" class="tab-content active">
      <p>
        You’ll get a scan of human knowledge like never before – in a way that promotes quality
        living, decision‑making, and insight. Knowledge and wisdom will be our advantage.
      </p>
    </div>
    <hr>
    <div class="tab" data-target="section2">
      <img src="/assets/images/insight.png" alt="Insight Icon">
      <span class="tab-label">High quality insight</span>
    </div>
    <div id="section2" class="tab-content">
      <p>
        This means deep, unique insight through weekly articles (and other goodies) in the
        fields of art, science, philosophy, and technology – amongst others, published right here.
        Here’s an example of the quality you can expect.
      </p>
    </div>
    <hr>
    <div class="tab" data-target="section3">
      <img src="/assets/images/united.png" alt="Community Icon">
      <span class="tab-label">Membership in a community</span>
    </div>
    <div id="section3" class="tab-content">
      <p>
        To learn from each other through a community dedicated to ideas, illustrations,
        techniques, tools, and everything else. Join us!
      </p>
    </div>
  </div>

  <script>
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        // Reset all
        document.querySelectorAll('.tab-label').forEach(lbl => lbl.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        // Activate clicked
        tab.querySelector('.tab-label').classList.add('active');
        document.getElementById(tab.dataset.target).classList.add('active');
      });
    });
  </script>
</body>
</html>
