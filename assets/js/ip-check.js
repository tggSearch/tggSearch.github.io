// 设置链接的函数
function setLinks(countryCode) {
  const registerButtons = document.getElementsByClassName('register-button');
  const downloadButtons = document.getElementsByClassName('download-button');

  const linkHref = countryCode === 'CN' 
    ? '/docs/302.html?target=https://www.chouyi.mobi/join/90884854' 
    : '/docs/302.html?target=https://www.okx.com/join/90884854';

  const downloadLinkHref = countryCode === 'CN' 
    ? '/docs/302.html?target=https://www.chouyi.mobi/zh-hans/download' 
    : '/docs/302.html?target=https://www.okx.com/zh-hans/download';

  for (let button of registerButtons) {
    const anchorTags = button.querySelectorAll('a'); // 查找所有<a>标签
    anchorTags.forEach(anchorTag => {
      anchorTag.href = linkHref; // 统一设置按钮的链接
    });
  }

  for (let button of downloadButtons) {
    button.href = downloadLinkHref; // 统一设置按钮的链接
  }
}

// 使用免费的 IP 查询服务
fetch('https://api.ip.sb/geoip')
  .then(response => response.json())
  .then(data => {
    setLinks(data.country_code); // 直接传入国家代码
  })
  .catch(error => {
    console.error('无法获取用户 IP 信息', error);
    // 默认使用中国的链接
    setLinks('CN'); // 设置默认链接为中国
  }); 