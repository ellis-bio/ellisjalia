---
layout: default
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
  <a href="https://ellisjalia.substack.com/"><img src="/assets/icons/newsletter.png" /></a>
  <a href="https://ellisjalia.com/about"><img src="/assets/icons/unknown.png" /></a>
</div>
<hr width="100%" size="3">

<div class="page-content" data-page="{{ paginator.page | default: 1 }}">
  {% assign posts_collection = paginator.posts | default: site.posts %}
  {% for post in posts_collection %}
    <div class="post">
      <p class="post-title">
        <a href="{{ post.url | relative_url }}"
           onmouseover="this.style.color='tomato'"
           onmouseout="this.style.color='inherit'">
          {{ post.title }}
        </a>
      </p>
      <p class="post-date">{{ post.date | date: "%A, %B %-e, %Y" }}</p>
      {{ post.content }}
    </div>
  {% endfor %}
</div>

{% if paginator %}
  <nav class="pagination">
    {% if paginator.previous_page %}
      <a class="prev" href="{{ paginator.previous_page_path | relative_url }}">&laquo; Prev</a>
    {% endif %}
    {% for i in (1..paginator.total_pages) %}
      <a
        class="page-number {% if i == paginator.page %}current{% endif %}"
        href="{{ paginator.paginate_path | replace: ':num', i | relative_url }}"
      >{{ i }}</a>
    {% endfor %}
    {% if paginator.next_page %}
      <a class="next" href="{{ paginator.next_page_path | relative_url }}">Next &raquo;</a>
    {% endif %}
  </nav>
{% endif %}

