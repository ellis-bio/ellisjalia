// Only run on pages that have a search-input and results element
if (document.getElementById('search-input') && document.getElementById('results')) {
  fetch('/search.json')
    .then(res => res.json())
    .then(docs => {
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

        results.innerHTML = '';

        hits.forEach(hit => {
          const item = docs.find(d => d.url === hit.ref);
          if (item) {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
            results.appendChild(li);
          }
        });
      });
    })
    .catch(err => console.error('Search index load failed:', err));
}
