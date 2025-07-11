// Only run on pages that have a search-input element
if (document.getElementById('search-input')) {
  fetch('/search.json')
    .then(res => res.json())
    .then(docs => {
      // Build the index
      const idx = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content');
        this.ref('url');
        docs.forEach(doc => this.add(doc));
      });

      const input   = document.getElementById('search-input');
      const results = document.getElementById('results');

      input.addEventListener('input', () => {
        const query = input.value.trim();
        const hits  = query ? idx.search(query) : [];

        // Clear out old results
        results.innerHTML = '';

        // Render hits
        hits.forEach(hit => {
          const item = docs.find(d => d.url === hit.ref);
          const li   = document.createElement('li');
          li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
          results.appendChild(li);
        });
      });
    })
    .catch(err => console.error('Search index load failed:', err));
}
