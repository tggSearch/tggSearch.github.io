---
layout: default
title: 海外软件技术教程搜索
description: 搜索本站内容，包括电报telegram、推特twitter、油管youtube、币圈交易所等教程。
canonical_url: 'https://tggsearch.github.io/search.html'
no_button: "yes"
---
<section class="search-page">
  <div class="search-panel">
    <span class="eyebrow">Search</span>
    <h2>搜索全部教程</h2>
    <p>输入问题或关键词，例如“电报收不到验证码”“推特视频下载”或“OKX 注册”。</p>
    <form class="site-search" id="site-search" role="search">
      <label class="sr-only" for="search-input">搜索教程</label>
      <span class="site-search__icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22"><path d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
      <input id="search-input" type="search" name="q" placeholder="输入关键词搜索…" autocomplete="off" enterkeyhint="search">
      <button type="submit">搜索</button>
    </form>
    <div class="search-suggestions" aria-label="热门搜索">
      <span>热门：</span>
      <button type="button" data-search="Telegram 验证码">Telegram 验证码</button>
      <button type="button" data-search="推特下载">推特下载</button>
      <button type="button" data-search="OKX 注册">OKX 注册</button>
      <button type="button" data-search="Gmail">Gmail</button>
    </div>
  </div>
  <div class="search-status" id="search-status" aria-live="polite">
    <div><span class="eyebrow">Discover</span><h2>按分类发现内容</h2></div>
  </div>
  <div id="search-results" class="search-results">{% include category-grid.html %}</div>
</section>
<script src="{{ '/assets/js/search.js?v=' | append: site.github.build_revision | relative_url }}" defer></script>
