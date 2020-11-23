# 图片处理


- 实现本地图片上传预览  FileReader  
  监听input:file的change事件
  创建FileReader()对象，并通过readAsDataURL()
  监听onload，替换img的src
  该对象的readAsDataURL()方法把本地file对象转换为Data URL
  它还提供了 readAsArrayBuffer() 和 readAsText() 方法，用于把 File/Blob 对象转换为其它的数据格式。
  Data URL
  `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhAAAAIwCAYAAADXrFK...`
  格式：data:[<mediatype>][;base64],<data>
  mediatype 是个 MIME 类型的字符串
  MIME 多用途互联网邮件扩展类型(text/html,image/png,text/plain...)
  base64: 是一种基于 64 个可打印字符来表示二进制数据的表示方法。
  js中：btoa()创建base64   atob()解码base64

- 网络下载->预览
  fetch()下载图片资源(Promise)
  转换为blob()
  URL.createObjectURL(blob)得到Object(Blob) URL ，给src
  Blob URL格式：blob:<origin>/<uuid>
  `blob:null/2f5d9409-bf4e-462c-a888-4cef5695931c`
  URL.createObjectURL()方法来创建 Blob URL，该方法接收一个 Blob 对象，并为其创建一个唯一的 URL
  上述有个副作用，URL->Blob映射，但Blob本身会留在内存中
  URL.revokeObjectURL(url) 方法，从内部映射中删除引用，从而允许删除 Blob（如果没有其他引用），并释放内存。
  - Blob
    Blob（Binary Large Object）表示二进制类型的大对象。
    在 JavaScript 中 Blob 类型的对象表示不可变的类似文件对象的原始数据。
    var aBlob = new Blob(blobParts, [options]);
    属性：size，type
    方法：slice(),steam(),text(),arrayBuffer()
  - ArrayBuffer(简单来说是一片内存，你不能直接使用它)
    ArrayBuffer 对象用来表示「通用的、固定长度的」原始二进制数据缓冲区。
    new ArrayBuffer(length)
  - TypedArray: Unit8Array...
    Uint8Array 数组类型表示一个 8 位无符号整型数组，创建时内容被初始化为 0。创建完后，可以以「对象的方式或使用数组下标索引的方式」引用数组中的元素。
  - DataView
    DataView 视图是一个可以从二进制 ArrayBuffer 对象中读写多种数值类型的底层接口，使用它时，不用考虑不同平台的字节序问题。
    new DataView(buffer [, byteOffset [, byteLength]])
    使用 new 调用 DataView 构造函数后，会返回一个表示指定数据缓存区的新 DataView 对象。你可以把返回的对象想象成一个二进制字节缓存区 array buffer 的 “解释器” —— 它知道如何在读取或写入时正确地转换字节码。

- 图片灰度化
  canvas画出图片
  getImageData()获取图片像素数据
  data[]取平均覆盖
  putImageData()更新

- 图片压缩
   Canvas 对象提供的 toDataURL(type,encoderOptions(压缩比例)) 方法

- 文件上传
  通过表单，，或者追加append("imgData",blob)
  后端获取，writeFile() 生成文件


- 文件下载
  动态创建a标签，a.download
  Blob数据通过createObjectURL()生成blob URL给href
  模拟点击事件，，移除a标签，revokeObjectURL移除blob