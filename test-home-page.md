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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Working Pagination</title>
    <style>
        body {
            background-color: white;
            color: black;
            font-family: sans-serif;
            margin: 0;
            padding: 0;
        }
        .pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            gap: 6px;
            flex-wrap: wrap;
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
    </style>
</head>
<body>
    <div class="pagination" id="pagination"></div>
    <script>
        const totalPages = 1623;
        let currentPage = 7;
        function renderPagination() {
            // Validate currentPage
            if (currentPage < 1) currentPage = 1;
            if (currentPage > totalPages) currentPage = totalPages;
            const container = document.getElementById("pagination");
            container.innerHTML = "";
            // Info text
            const info = document.createElement("span");
            info.textContent = `page ${currentPage} of ${totalPages}`;
            container.appendChild(info);
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
</body>
</html>
