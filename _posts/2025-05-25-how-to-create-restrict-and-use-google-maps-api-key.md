---
title: 如何创建、限制和使用Google Maps Platform API密钥
description: 本文详细介绍了如何在Google Maps Platform中创建、限制和使用API密钥，以提高应用的安全性和功能性。
keywords: api, google-maps, security
---

本文将详细介绍如何在Google Maps Platform中创建API密钥，以及如何对其进行适当的限制以提高安全性。此外，还会介绍如何在请求中添加API密钥以确保您的应用能够顺利运行。

## 创建API密钥

为了使用Maps JavaScript API，您需要先确保项目已关联结算账号并启用了该API。API密钥是唯一标识符，用于对与您的项目相关联的请求进行身份验证，并方便执行结算。

### 步骤

1. 前往**Google Maps Platform > 资金**页面。
2. 在**帐号**页面上，依次点击已创建**帐号 > API 帐号**。
3. 点击**关闭**后，新创建的API密钥将会列在**套件**页面的**API密钥**下。

您也可以通过命令行工具gcloud来创建API密钥：

```bash
gcloud services api-keys create --project "PROJECT" --display-name "DISPLAY_NAME"
```

## 限制API密钥

Google强烈建议您限制API密钥，仅将其用于您的应用所需要的API。这可以防止您的应用收到无正当理由的请求，从而提高安全性。

### 应用限制

- 若要接受来自特定网站的请求，请从**应用限制**列表中选择**HTTP 引荐来源网址（网站）**。
- 指定一个或多个引荐来源网站。您可以使用通配符字符来为所有子网域授权（例如，指定`https://*.google.com`表示接受所有以`.google.com`结尾的网站，前提是这些网站通过HTTPS进行访问）。

### API限制

- 从**选择 API**下拉列表中选择**Maps JavaScript API**。
- 如果您的项目使用地点库，请选择**Places API**。同样，如果您的项目在JavaScript API中使用其他服务（如路线服务、距离矩阵服务等），还必须启用并在此列表中选择相应的API。

您可以通过以下命令更新现有密钥的限制：

```bash
gcloud services api-keys update projects/PROJECT/locations/global/keys/KEY_ID --api-target=service=maps-backend.googleapis.com --allowed-referrers="referer"
```

## 向请求添加API密钥

您必须在每个Maps JavaScript API请求中添加API密钥。示例如下：

```html
<script>
  (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "YOUR_API_KEY",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });
</script>
```

请将`YOUR_API_KEY`替换为您实际的API密钥。