---
layout: default
permalink: /test-home-page/
---
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
<style>
a {
color: black;
text-decoration: none;
}
a:hover {
  color: tomato;
  text-decoration: none;
}
</style>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jekyll Pagination</title>
    <style>
        body {
            background-color: white;
            color: black;
            font-family: sans-serif;
            margin: 0;
            padding: 0;
        }
        #content {
            max-width: 612px;
            margin: 0 auto 20px auto;
            padding: 20px;
        }
        .pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            gap: 6px;
            flex-wrap: wrap;
            max-width: 612px;
            margin: 0 auto;
            width: 100%;
        }
        .pagination a,
        .pagination span {
            border: 2px solid black;
            background-color: #2c3e50;
            color: white;
            padding: 8px 12px;
            text-decoration: none;
            font-size: 14px;
            transition: background-color 0.2s;
            display: inline-block;
            border-radius: 4px;
        }
        .pagination a:hover {
            background-color: #ff6b6b;
        }
        .pagination .active {
            background-color: #ff6b6b;
            color: white;
            font-weight: bold;
        }
        .pagination .disabled {
            cursor: not-allowed;
            opacity: 0.5;
            display: none;
        }
        /* Responsive design */
        @media (max-width: 640px) {
            .pagination {
                padding: 15px 10px;
                gap: 4px;
            }
            .pagination a,
            .pagination span {
                padding: 6px 8px;
                font-size: 12px;
            }
        }
        @media (max-width: 480px) {
            .pagination {
                padding: 10px 5px;
                gap: 3px;
            }
            .pagination a,
            .pagination span {
                padding: 5px 6px;
                font-size: 11px;
            }
        }
    </style>
</head>
<body>
    <div id="content">
        <h2>Your Jekyll Content</h2>
        <div id="page-content">
            <!-- This is where your Jekyll paginated content would go -->
            <!-- In your actual Jekyll template, this would be: -->
            <!-- {% for post in paginator.posts %} -->
            <!--   <article>{{ post.content }}</article> -->
            <!-- {% endfor %} -->
        </div>
    </div>
    <!-- Jekyll Pagination Navigation -->
    <div class="pagination">
        <!-- Previous Page Link -->
        <!-- {% if paginator.previous_page %} -->
        <a href="/page1/" class="prev-link">‹ PREV</a>
        <!-- {% else %} -->
        <!-- <span class="disabled">‹ PREV</span> -->
        <!-- {% endif %} -->
        <!-- Page Numbers -->
        <!-- {% for page in (1..paginator.total_pages) %} -->
        <!-- {% if page == paginator.page %} -->
        <span class="active">1</span>
        <!-- {% elsif page == 1 %} -->
        <a href="/">2</a>
        <!-- {% else %} -->
        <a href="/page3/">3</a>
        <a href="/page4/">4</a>
        <!-- {% endif %} -->
        <!-- {% endfor %} -->
        <!-- Next Page Link -->
        <!-- {% if paginator.next_page %} -->
        <a href="/page2/" class="next-link">NEXT ›</a>
        <!-- {% else %} -->
        <!-- <span class="disabled">NEXT ›</span> -->
        <!-- {% endif %} -->
    </div>
    <script>
        // Optional: Add smooth scrolling when pagination links are clicked
        document.querySelectorAll('.pagination a').forEach(link => {
            link.addEventListener('click', function(e) {
                // Uncomment the next line if you want smooth scrolling to top
                // window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    </script>
</body>
</html>
