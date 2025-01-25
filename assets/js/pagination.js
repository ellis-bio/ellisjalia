$(document).ready(function () {
    const totalPages = 13; // Total number of pages
    const visiblePages = 5; // Maximum number of visible pages
    const $pagination = $("#footer-pagination");
    let currentPage = 1;
  
    function renderPagination(currentPage) {
      const $list = $pagination.find("ul");
      $list.empty();
  
      // Calculate start and end of the visible range
      const half = Math.floor(visiblePages / 2);
      let start = Math.max(1, currentPage - half);
      let end = Math.min(totalPages, currentPage + half);
  
      // Adjust if the range is too small at the edges
      if (currentPage <= half) {
        end = Math.min(totalPages, visiblePages);
      }
      if (currentPage > totalPages - half) {
        start = Math.max(1, totalPages - visiblePages + 1);
      }
  
      // Add "Previous" button state
      if (currentPage === 1) {
        $pagination.find(".prev").addClass("disabled");
      } else {
        $pagination.find(".prev").removeClass("disabled");
      }
  
      // Add "Next" button state
      if (currentPage === totalPages) {
        $pagination.find(".next").addClass("disabled");
      } else {
        $pagination.find(".next").removeClass("disabled");
      }
  
      // Add the first page and ellipsis if needed
      if (start > 1) {
        $list.append(`<li data-page="1">1</li>`);
        if (start > 2) {
          $list.append(`<li class="ellipsis">...</li>`);
        }
      }
  
      // Add the visible page numbers
      for (let i = start; i <= end; i++) {
        $list.append(`<li data-page="${i}" class="${i === currentPage ? "active" : ""}">${i}</li>`);
      }
  
      // Add the last page and ellipsis if needed
      if (end < totalPages) {
        if (end < totalPages - 1) {
          $list.append(`<li class="ellipsis">...</li>`);
        }
        $list.append(`<li data-page="${totalPages}">${totalPages}</li>`);
      }
    }
  
    // Handle page clicks
    $pagination.on("click", "li", function () {
      if (!$(this).hasClass("ellipsis")) {
        currentPage = parseInt($(this).data("page"), 10);
        renderPagination(currentPage);
      }
    });
  
    // Handle "Previous" and "Next" buttons
    $pagination.find(".prev").on("click", function () {
      if (!$(this).hasClass("disabled") && currentPage > 1) {
        currentPage--;
        renderPagination(currentPage);
      }
    });
  
    $pagination.find(".next").on("click", function () {
      if (!$(this).hasClass("disabled") && currentPage < totalPages) {
        currentPage++;
        renderPagination(currentPage);
      }
    });
  
    // Initial render
    renderPagination(currentPage);
  });