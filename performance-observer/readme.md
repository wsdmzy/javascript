# 性能检测

- resource
- paint
  - FP 第一个像素落地
  - FCP: first-contentful-paint
  - FMP: first-meaningful-paint
- navigation(url -> 看到页面)
  - domComplete: DOM 结构生产完毕
  - domContentLoadedEventStart: domContentLoaded事件发生的时间
  - domContentLoadedEventEnd: 网页需要执行的脚本执行完成时间.
  - domInteractive： DOM树 创建完成(浏览器渲染 生产dom树 阶段)

  DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载
  loaded  including all dependent resources such as stylesheets and images

- longtask： 长任务 (任何超过50ms的任务)  只有chrom支持
- mark: 标记
- measure: 再每个点之间测量一下

https://www.w3.org/TR/navigation-timing-2/timestamp-diagram.svg