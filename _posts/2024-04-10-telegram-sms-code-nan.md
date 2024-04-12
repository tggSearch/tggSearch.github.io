---
layout: default
title: telegram为什么收不到短信
description: telegram无法收到短信，无法登录，此时应该如何处理呢？应该如何才能收到telegram短信验证码登录呢？
canonical_url: 'https://tggsearch.org/docs/telegram-sms-code-nan.html'
categories: [ telegram ]
pin: false
---
telegram 由于国内监管的问题，很多时候无法收到短信验证码，但是也有很多其他的原因，需要排除后才能确定到底是什么原因导致的无法收到验证码问题，下面我们就来逐个的分析。

### 是否收到的是设备码
telegram客户端会发送两种验证码，一种是设备码一种是短信验证码，设备码叫做 device code，而短信验证码是 sms code，如果你收到的是设备码，那么肯定不会给你的手机号发送短信的，这时候你需要更换一个设备来登录 telegram，不然一直是发送设备码，核心的原因是你这个设备曾经登录过这个手机号的 telegram，但是没有正常的退出导致的问题。

### 是否是以下地区
如果你的手机号是北京或者洛阳的，那么没办法，这两个地区当前都是被监管的，也就是运营商直接屏蔽了，如果你想验证这个问题，你可以尝试让朋友给你一个非北京和洛阳地区的手机号测试一下，其他地区正常是可以收到的，只有这两个地区不行。

那么这里就会遇到如果发送的是设备码还有哪些异常问题，以及如何解决呢？这部分大家可以查看这篇文章，我们详细描述了 [纸飞机 telegram 收不到验证码解决方案 （华为/鸿蒙系统也可解决）](./telegram-no-sms-cdeo.html)

如果你想我们技术团队来协助解决，可以右下角联系客服进行沟通。