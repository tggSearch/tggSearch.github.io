---
layout: default
title: Telegram 图片视频下载器，Telegram 限制保存内容群如何下载图片、视频、文件？
description: Telegram如何下载视频、图片和文件，其次 Telegram 有一个功能可以限制频道和群聊保存文件或者图片，或者视频，那么有没办法去下载这类图片和视频资源呢？让你畅通下载电报任何图片、视频、文件资源。
canonical_url: 'https://tggsearch.github.io/docs/telegram-media-downloader.html'
categories: [ telegram ]
pin: false
---
在 Telegram 群或者频道有一个功能设置叫做 <b>限制保存内容</b>，如果群主设置了这个，那么在群聊或者频道里面的用户就无法保存和下载图片、文件或者视频了。如果没有这个限制，下载还是比较容易的，没有限制的下载方法，大家可以查看我们这篇文章 [Telegram 下载文件教程 Telegram 图片下载教程，telegram下载的文件在哪](./telegram-file.html)。如果限制了我们就需要按照下面的这个方法来下载了。

如果你觉得文字难以理解，可以查看 [Youtube视频教程，Telegram下载限制内容](./302.html?target=https://youtu.be/6QdJ82xqPY4)

### Telegram图片视频下载器
这个工具是一个 chrome 插件，并且是电脑版本的，因此你想下载文件、图片、视频就需要使用电脑版的 chrome 浏览器，这是前提。

### 第一步，安装 tampermonkey 插件
首先第一步需要安装一个 tampermonkey 的 chrome 插件，插件地址是 [tampermonkey 插件地址](./302.html?target=https://chromewebstore.google.com/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/dhdgffkkebhmkfjojejmpbldmpobfkfo) 

安装完成后按照下图的指示，把 chrome 插件置顶，置顶后就可以在插件栏里面看到这个 tampermonkey 插件图标了。

<div align=center>
    <img alt="twitter-video-download-detail" src="https://cdn.jsdelivr.net/gh/tggsearch/tggsearch.github.io/assets/img/telegram-media-download-chrome.webp" class="page-img" width="70%" onerror="this.onerror=null;this.src='/assets/img/telegram-media-download-chrome.webp'" />
</div>

### 第二步，在 tampermonkey 插件中新增 Telegram 图片下载脚本
接下来打开这个网址 [Telegram 图片下载脚本插件](https://update.greasyfork.org/scripts/446342/Telegram%20Media%20Downloader.user.js) 打开以后，在页面点击 <b>安装</b>，安装完成后，按照下图的指示点击你就可以看到这个插件了，如果没有启用，自己点击启用即可。

<div align=center>
    <img alt="twitter-video-download-detail" src="https://cdn.jsdelivr.net/gh/tggsearch/tggsearch.github.io/assets/img/telegram-media-download-script.webp" class="page-img" width="70%" onerror="this.onerror=null;this.src='/assets/img/telegram-media-download-script.webp'" />
</div>

### 第三步，登录 Telegram 网页版
然后打开 [telegram 网页版](./302.html?target=https://web.telegram.org/k/) 然后用你的 Telegram 手机 APP 在设置的设备里面扫码登录，或者选择使用手机号登录，然后在 Telegram APP 里面收设备码登录

### 第四步，进入群聊下载资源
最后一步在网页版上打开你需要下载资源的群聊，然后打开相应需要下载的资源，启用刚才的 chrome 插件脚本，你就可以看到下面这个下载按钮了。

<div align=center>
    <img alt="twitter-video-download-detail" src="https://cdn.jsdelivr.net/gh/tggsearch/tggsearch.github.io/assets/img/telegram-media-download-button.webp" class="page-img" width="70%" onerror="this.onerror=null;this.src='/assets/img/telegram-media-download-button.webp'" />
</div>

接下来你就可以下载到资源了。

### 下载资源在哪里
这个一般都是直接在 chrome 的下载目录里面，你可以打开 chrome 下载列表，在列表中你可以找到具体的文件位置，比如下图这样

<div align=center>
    <img alt="twitter-video-download-detail" src="https://cdn.jsdelivr.net/gh/tggsearch/tggsearch.github.io/assets/img/telegram-media-download-path.webp" class="page-img" width="70%" onerror="this.onerror=null;this.src='/assets/img/telegram-media-download-path.webp'" />
</div>

以上就是下载流程。
