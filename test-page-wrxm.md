---
layout: page
permalink: /test-page-wrxm/
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tabbed Content Interface</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f9f9f9;
    }
    .tabs {
      max-width: 800px;
      margin: 0 auto;
    }
    .tab-list {
      display: flex;
      border-bottom: 2px solid #ccc;
    }
    .tab {
      display: flex;
      align-items: center;
      padding: 10px 15px;
      cursor: pointer;
      border: none;
      background: none;
      outline: none;
      transition: background-color 0.3s;
    }
    .tab img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 4px;
      margin-right: 10px;
    }
    .tab.active {
      border-bottom: 3px solid #007acc;
      background-color: #fff;
    }
    .tab:not(.active):hover {
      background-color: #eee;
    }
    .tab-content {
      display: none;
      padding: 20px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-top: none;
    }
    .tab-content.active {
      display: block;
    }
  </style>
</head>
<body>
  <div class="tabs">
    <div class="tab-list">
      <button class="tab active" data-tab-target="#knowledge">
        <img src="knowledge.jpg" alt="Human Knowledge" />
        <span>Human Knowledge and its Horizons</span>
      </button>
      <button class="tab" data-tab-target="#insight">
        <img src="insight.jpg" alt="High Quality Insight" />
        <span>High quality insight</span>
      </button>
      <button class="tab" data-tab-target="#community">
        <img src="community.jpg" alt="Community Membership" />
        <span>Membership in a community</span>
      </button>
    </div>

    <div id="knowledge" class="tab-content active">
      <p>
        You’ll get a scan of human knowledge like never before - in a way that promotes quality living,
        decision-making, and insight. Knowledge and wisdom will be our advantage.
      </p>
    </div>

    <div id="insight" class="tab-content">
      <p>
        This means deep, unique insight through weekly articles (and other goodies) in the fields of art,
        science, philosophy, and technology – amongst others, published right here.
      </p>
      <p>Here’s an example of the quality you can expect.</p>
    </div>

    <div id="community" class="tab-content">
      <p>
        To learn from each other through a community dedicated to ideas, illustrations, techniques,
        tools, and everything else. Join us!
      </p>
    </div>
  </div>

  <script>
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);

        // Remove active classes
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Add active classes to clicked tab and corresponding content
        tab.classList.add('active');
        target.classList.add('active');
      });
    });
  </script>
</body>
</html>
