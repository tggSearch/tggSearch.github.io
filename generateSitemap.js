const fs = require('fs');
const path = require('path');

const markdownFolder = './_posts'; // 指定你的Markdown文件夹路径
const outputFilePath = './sitemap.xml'; // 指定生成的sitemap.xml文件路径
const siteUrlPrefix = 'https://tggsearch.org/'; // 指定网站URL前缀

const currentDate = new Date();
const formattedDate = currentDate.toISOString();
// 开头部分
let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tggsearch.org/</loc>
    <lastmod>${formattedDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tggsearch.org/telegram.html</loc>
    <lastmod>${formattedDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tggsearch.org/twitter.html</loc>
    <lastmod>${formattedDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tggsearch.org/account.html</loc>
    <lastmod>${formattedDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tggsearch.org/exchange.html</loc>
    <lastmod>${formattedDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tggsearch.org/youtube.html</loc>
    <lastmod>${formattedDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tggsearch.org/line.html</loc>
    <lastmod>${formattedDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

// 读取Markdown文件夹中的文件
fs.readdirSync(markdownFolder).forEach(file => {
    if (file.endsWith('.md')) {
        const fileNameWithoutExtension = file.replace('.md', '').replace(/^\d{4}-\d{2}-\d{2}-/, ''); // 去掉日期部分
        const url = `${siteUrlPrefix}docs/${fileNameWithoutExtension}.html`;

        const filePath = path.join(markdownFolder, file);
        const stat = fs.statSync(filePath);
        const lastMod = stat.mtime.toISOString();
        
        // 生成sitemap条目
        sitemapContent += `<url>
    <loc>${encodeURI(url)}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }
});

// 结尾部分
sitemapContent += `
</urlset>`;

// 将生成的内容写入文件
fs.writeFileSync(outputFilePath, sitemapContent, 'utf-8');

console.log(`Sitemap generated successfully at ${outputFilePath}`);
