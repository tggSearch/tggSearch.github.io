(function () {
  const form = document.getElementById('site-search');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const status = document.getElementById('search-status');
  const suggestions = document.querySelectorAll('[data-search]');
  const categoryNames = { telegram: '电报', twitter: '推特', youtube: '油管', exchange: '交易所', account: '账号类', line: 'Line', gmail: 'Gmail', facebook: 'Facebook', chatgpt: 'ChatGPT' };
  let posts = [];

  function escapeHtml(value) {
    const node = document.createElement('span');
    node.textContent = value || '';
    return node.innerHTML;
  }
  function normalize(value) { return (value || '').toLocaleLowerCase().replace(/\s+/g, ' ').trim(); }

  function render(query) {
    const keyword = normalize(query);
    if (!keyword) return;
    const terms = keyword.split(' ').filter(Boolean);
    const matches = posts.map(function (post) {
      const title = normalize(post.title);
      const description = normalize(post.description);
      const content = normalize(post.content);
      const category = normalize(categoryNames[post.category] || post.category);
      let score = 0;
      let matchedTerms = 0;
      terms.forEach(function (term) {
        let matched = false;
        if (title.includes(term)) { score += 8; matched = true; }
        if (description.includes(term)) { score += 4; matched = true; }
        if (category.includes(term)) { score += 3; matched = true; }
        if (content.includes(term)) { score += 1; matched = true; }
        if (matched) matchedTerms += 1;
      });
      return { post: post, score: score, matchedTerms: matchedTerms };
    }).filter(function (item) { return item.matchedTerms === terms.length; })
      .sort(function (a, b) { return b.score - a.score || b.post.date.localeCompare(a.post.date); })
      .slice(0, 40);

    status.innerHTML = '<div><span class="eyebrow">Results</span><h2>“' + escapeHtml(query) + '”的搜索结果</h2></div><strong>' + matches.length + ' 篇</strong>';
    if (!matches.length) {
      results.innerHTML = '<div class="search-empty"><span aria-hidden="true">⌕</span><h3>暂时没有找到相关教程</h3><p>试试缩短关键词，或使用“电报”“推特”“下载”等主题词。</p></div>';
      return;
    }
    results.innerHTML = '<div class="post-grid">' + matches.map(function (item) {
      const post = item.post;
      const category = categoryNames[post.category] || post.category || '教程';
      return '<article class="post-card search-result"><div class="post-card__meta"><span>' + escapeHtml(category) + '</span><span>·</span><time>' + escapeHtml(post.date) + '</time></div><h3><a href="' + encodeURI(post.url) + '">' + escapeHtml(post.title) + '</a></h3><p>' + escapeHtml(post.description) + '</p><a class="post-card__more" href="' + encodeURI(post.url) + '">阅读全文 <span aria-hidden="true">→</span></a></article>';
    }).join('') + '</div>';
  }

  fetch('/search.json').then(function (response) {
    if (!response.ok) throw new Error('Search index unavailable');
    return response.json();
  }).then(function (data) {
    posts = data;
    const initialQuery = new URLSearchParams(window.location.search).get('q');
    if (initialQuery) { input.value = initialQuery; render(initialQuery); }
  }).catch(function () {
    status.innerHTML = '<div><span class="eyebrow">Search</span><h2>搜索暂时不可用</h2></div>';
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) return input.focus();
    history.replaceState(null, '', '?q=' + encodeURIComponent(query));
    render(query);
  });
  suggestions.forEach(function (button) {
    button.addEventListener('click', function () { input.value = button.dataset.search; form.requestSubmit(); });
  });
})();
