## canvas canvasContext("2d") 适用于推广海报绘制
### 使用教程
#### 引用component -> yjCanvas 文件
#### .json文件
```json
{
    "yj-canvas": "/components/yjCanvas/yjCanvas"
}
```
#### wxml文件
```html
    <yj-canvas width="750" height="1334" canvasId="myCanvas" options="{{options}}" bind:canvasChange="canvasChange"/>
```

| 属性 | 默认值 | 描述 |
| width | 750 | canvas 画布宽度 |
|:-----|:-----|:-----|
| height | 1334 | canvas 画布高度 |
| canvasId | 空 | canvasId |
| options | array[] | 绘制元素参数 |
| bind:canvasChange | function | 图片绘制事件，返回图片链接 |


