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

| 属性名称 | 默认值 | 描述 |
|:-----|:-----|:-----|
| width | 750 | canvas 画布宽度 |
| height | 1334 | canvas 画布高度 |
| canvasId | 空 | canvasId |
| options | array[] | 绘制元素参数 |
| bind:canvasChange | function | 图片绘制事件，返回图片链接 |

#### options 属性类型 "image"
| 属性名称 | 类型 | 描述 |
|:-----|:----- |:-----|
| type | string | 类型为image （绘制图片） |
| width | number | 图片宽度 |
| height | number | 图片高度 |
| url | string | 图片链接 |
| left | number | 图片距离画布的左边距 |
| top | number | 图片距离画布的顶部边距 |
| round | boolean | 是否圆角 |
| borderRadius | number | 圆角值 round必须为true才会生效 |
| children | array | 和父级类型属性一样，解决绘画顺序的不确定性，避免顺序颠倒，元素被覆盖 |

#### options 属性类型 "rect"
| 属性名称 | 类型 | 描述 |
|:-----|:----- |:-----|
| type | string | 类型为rect （绘制矩形） |
| width | number | 图片宽度 |
| height | number | 图片高度 |
| left | number | 图片距离画布的左边距 |
| top | number | 图片距离画布的顶部边距 |
| round | boolean | 是否圆角 |
| borderRadius | number | 圆角值 round必须为true才会生效 |
| background | string | 背景色 |
| children | array | 和父级类型属性一样，解决绘画顺序的不确定性，避免顺序颠倒，元素被覆盖 |

#### options 属性类型 "text"
| 属性名称 | 类型 | 描述 |
|:-----|:----- |:-----|
| type | string | 类型为text （绘制文本内容） |
| content | string | 文本内容 |
| fontSize | number | 字体大小 |
| fontFamily | string | 字体 |
| lineHeight | number | 行高 |
| maxWidth | number | 文本最大宽度超出自动换行，默认不换行 |
| maxLine | number | 文本行数 |
| left | number | 图片距离画布的左边距 |
| top | number | 图片距离画布的顶部边距 |

