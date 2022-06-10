---
sidebar:  false
---
# HTML
### 标题字标记

| 标记                                               | 说明                    |
| -------------------------------------------------- | ----------------------- |
| `<h1 align="left">1号标题文字（左对齐）</h1>`      | 1号标题文字（左对齐）   |
| `<h2 align="center">2号标题文字（居中）</h2>`      | 2号标题文字（居中）     |
| `<h3 align="right">3号标题文字（右对齐）</h3>`     | 3号标题文字（右对齐）   |
| `<h4 align="justify">4号标题文字（两端对齐）</h4>` | 4号标题文字（两端对齐） |
| `<h5>5号标题文字</h5>`                             | 5号标题文字             |
| `<h6>6号标题文字</h6>`                             | 6号标题文字             |


### 特殊符号对应代码

| 显示结果 | 符号代码     | 显示结果 | 符号代码      | 显示结果 | 显示结果       |
| -------- | ------------ | -------- | ------------- | -------- | -------------- |
| &nbsp;   | ```&nbsp;``` | ©        | ```&copy;```  | &        | ```&amp;```    |
| &lt;     | ```&lt;```   | ®        | ```&reg;```   | "        | ```&quot;```   |
| >        | ```&gt;```   | ×        | ```&times;``` | ÷        | ```&divide;``` |


### 常见的文本修饰标记

| 标记                        | 说明           | 标记                      | 说明     |
| --------------------------- | -------------- | ------------------------- | -------- |
| `<b>粗体</b>`               | 粗体           | `<del>删除线</del>`       | 删除线   |
| `<i>斜体</i>`               | 斜体           | `<sup>上标</sup>`         | 上标     |
| `<u>下画线</u>`             | 下画线         | `<sub>下标</sub>`         | 下标     |
| `<strong>着重文字</strong>` | 与粗体效果相同 | `<small>变小字号</small>` | 变小字号 |
| `<em>加重语气</em>`         | 与斜体效果相同 | `<big>变大字号</big>`     | 变大字号 |

### 字体font标记

```html
<font face="" size="" color="" >...</font>
```

| 属性  | 说明     |
| ----- | -------- |
| size  | 字体大小 |
| color | 文本颜色 |
| face  | 字体     |

### 换行标记

```html
<br/ >
```

### 水平分隔线

```html
<hr width="" size="" color="" align="" noshade>
```

| 属性  | 说明     |
| ----- | -------- |
| width | 宽度     |
| size  | 高度     |
| color | 颜色     |
| align | 对齐方式 |

### 拼音标记

```html
<ruby>
  中<rp>(</rp><rt>zhong</rt><rp>)</rp>
  国<rp>(</rp><rt>guo</rt><rp>)</rp>
 </ruby>
```

### 预格式化文本

```html
<pre>预格式化文本</pre>
```

### 无序列表

```html
<ul type="">
  <li type="">项目名称</li>
  <li type="">项目名称</li>
</ul>
```

| 属性值 | 说明        |
| ------ | ----------- |
| disc   | 实心圆形●   |
| circle | 空心圆形○   |
| square | 实心正方形■ |

### 有序列表

```html
<ol type="" start="">
  <li type="">项目名称</li>
  <li type="">项目名称</li>
</ol>
```

| 属性  | 值   | 说明             |
| ----- | ---- | ---------------- |
| type  | 1    | 数字列表         |
| type  | A    | 大写字母列表     |
| type  | a    | 小写字母列表     |
| type  | I    | 大写罗马字母列表 |
| type  | i    | 小写罗马字母列表 |
| start | 数值 | 列表的起始数字   |

### 定义列表

```html
<dl>
  <dt>项目</dt>
    <dd>描述</dd>
</dl>
```

### 超链接

```html
<a href="网址" name="" title="提示信息" target="窗口名称">超链接标题</a>
```

| target属性 | 说明                     |
| ---------- | ------------------------ |
| _self      | 当前框架打开链接         |
| _blank     | 全新空白窗口打开         |
| _top       | 在顶层框架打开           |
| _parent    | 在当前框架的上一层打开   |
| framename  | 指定框架或浮动框架内打开 |

### 书签链接

```html
<a name="书签名">书签标题</a>

<a href="#书签名">书签标题</a>
```

### 浮动框架

```html
<iframe name="iframe" src=""></iframe>

<a href="https://www.baidu.com" target="iframe">链接标题</a>
```

| 属性   | 说明     | 属性         | 说明         |
| ------ | -------- | ------------ | ------------ |
| src    | 文件     | frameborder  | 框架边框     |
| name   | 框架名称 | scrolling    | 框架滚动条   |
| width  | 框架宽度 | marginwidth  | 框架左右边距 |
| height | 框架高度 | marginheight | 框架上下边距 |

### 插入图像

```html
<img src="URL" alt="替代文本">
```

| 属性   | 说明          | 属性   | 说明                     |
| ------ | ------------- | ------ | ------------------------ |
| alt    | 图像替代文本  | align  | 根据周围文本排列图像     |
| src    | 显示图像的URL | border | 图像周围的边框           |
| name   | 图像的名称    | hspace | 图像左侧和右侧的空白距离 |
| height | 图像的高度    | vspace | 图像顶部和底部的空白距离 |
| width  | 图像的宽度    | usemap | 定义为客户器端图像映射   |

| 图像align属性 | 说明                 | 图像align属性 | 说明     |
| ------------- | -------------------- | ------------- | -------- |
| top           | 与当前行文字顶端对齐 | left          | 左对齐   |
| middle        | 与当前行文字中线对齐 | center        | 居中对齐 |
| bottom        | 与当前行底端文字对齐 | right         | 右对齐   |

### 图像热区链接

```html
<img src="图像链接" usemap="#映射图像名称">
<map name="映射图像名称">
  <area shape="热区形状" coords="热区坐标" href="URL">
</map>
```

| shape属性 | 说明       | coords属性                           | 说明             |
| --------- | ---------- | ------------------------------------ | ---------------- |
| rect      | 矩形区域   | x1,y1,x2,y2                          | 矩形两个顶点坐标 |
| circle    | 圆形区域   | center-x、center-y、radius           | 圆心和半径       |
| poly      | 多边形区域 | x1,y1,x2,y2,...,xi,yi,...xn,yn,x1,y1 | 各顶点坐标       |

### 滚动文字

```html
<marquee width="" height="" bgcolor="" direction="up|down|left|right" behavior="scroll|slide|alternate" hspace="" vspace="" scrollamount="" scrolldelay="" loop="" onmouseover="this.stop()" onmouseout="this.start()">滚动内容</marquee>
```

| 属性                      | 说明                                 | 属性        | 说明                     |
| ------------------------- | ------------------------------------ | ----------- | ------------------------ |
| onmouseover="this.stop()" | 光标移动到滚动区域，滚动内容暂停滚动 | bgcolor     | 文字背景颜色             |
| onmouseout="this.start()" | 光标移出滚动区域，滚动内容继续滚动   | loop        | 循环次数，-1表示无限循环 |
| scrollamount              | 滚动速度                             | scrolldelay | 延迟时间                 |
| width                     | 宽度                                 | height      | 高度                     |
| hspace                    | 水平距离                             | vspace      | 垂直距离                 |

| direction属性 | 说明     | direction属性 | 说明             |
| ------------- | -------- | ------------- | ---------------- |
| up            | 向上滚动 | left          | 向左滚动，默认值 |
| down          | 向下滚动 | right         | 向右滚动         |

| behavior属性 | 说明                 |
| ------------ | -------------------- |
| scroll       | 循环往复滚动，默认值 |
| slide        | 滚动一次就停止       |
| alternate    | 来回交替滚动         |

### 插入多媒体文件

```html
<embed src="多媒体文件" width="界面的宽度" height="界面的高度" autostart="true|false" loop="true|false"></embed>
```

| 属性      | 说明                              |
| --------- | --------------------------------- |
| autostart | true为自动播放，false为不自动播放 |
| loop      | true循环，false不循环             |

### css

写在<head></head>里

```html
<style type="text/css">
  
<style>
```

基本语法示例

```css
p{color:gray;font-size:20px;}
```

### css类选择器

```html
.c1{color:red;}

<p class="c1">类选择示例</p>
```

### css id选择器

```html
#d1{color:red;}

<p id="d1">id选择器示例</p>
```

### css常用伪类

| 伪类名   | 说明                         | 伪类名         | 说明                   |
| -------- | ---------------------------- | -------------- | ---------------------- |
| a:link   | 设置链接未被访问前的样式     | p:first-letter | 设置第一个字样式       |
| a:hover  | 设置链接鼠标悬停时的样式     | p:first-line   | 设置第一行样式         |
| a:active | 设置链接点击与释放之间的样式 | a:visited      | 设置链接被访问后的样式 |

### css行内样式

```html
<p style="font-style:italic">这是行内样式，文字为斜体</p>
```

### css链接外部样式

写在<head></head>里

```html
<link type="text/css" rel="stylesheet" href="out.css">
```

### css导入外部样式

写在<head></head>里

```html
<style type="text/css">
  @import url(out.css);
<style>
```

### div

```html
<div id="" class="" style="">块包含的内容</div>
```

| div的style属性    | 值                                        | 说明                                                         |
| ----------------- | ----------------------------------------- | ------------------------------------------------------------ |
| position          | static                                    | 表示静态定位， 默认设置                                      |
| position          | absolute                                  | 表示绝对定位， 与位置属性配合使用                            |
| position          | relative                                  | 表示相对定位， 图层不可层叠                                  |
| position          | fixed                                     | 表示图层位置固定， 不滚动                                    |
| border            | 线粗 细线型 线颜色                        | 边框， 可以设置风格、 粗细、 颜色等属性                      |
| backgi·ound-color | rgb()&#124;十六进制数&#124;英文颜色名     | 背景颜色                                                     |
| left              | pixes&#124;%                              | 规定图层左边距离                                             |
| top               | pixes&#124;%                              | 规定图层与顶部的距离                                         |
| width             | pixes&#124;%                              | 规定图层的宽度                                               |
| height            | pixes&#124;%                              | 规定图层的高度                                               |
| float             | left&#124;right&#124;none                 | 允许浮动元素在左边、 右边及不浮动                            |
| clear             | left&#124;right&#124;both&#124;none       | 分别表示清除左边、 右边、 左右两边的浮动和允许左右两边有浮动 |
| z-index           | auto&#124;数字                            | 表示子图层会按照父层的属性显示&#124;无单位的整数或负数       |
| overflow          | scroll&#124;visible&#124;auto&#124;hidden | 内容溢出控制。 分别表示始终显示滚动条、 不显 示滚动条， 但超出部分可见、 内容超出时显示滚动条、 超出时隐藏内容 |
| display           | block&#124;inline&#124;none               | 表示按块元素显示、 行内方式显示和隐藏等                      |

### span行内标记

```html
<span id="样式名称" class="样式名称" display="" >…</span>
```

| display属性  | 说明                                         |
| ------------ | -------------------------------------------- |
| none         | 此元素不会被显示                             |
| inline       | 将对象设置为行内元素， 在行内显示            |
| block        | 将对象设置为块级元素， 以块状显示， 自动换行 |
| inline-block | 将对象设置为行内块标记                       |
| inherit      | 规定应该从父元素继承display属性的值          |

### CSS字体样式：font子属性

| 属性         | 说明                   |
| ------------ | ---------------------- |
| font-size    | 设置字体的大小         |
| font-style   | 设置字体的风格         |
| font-variant | 设置小型的大写字母字体 |
| font-family  | 设置字体名             |
| font-weight  | 设置字体的粗细         |

### 字体样式font-style属性

```css
font-style: normal | italic | oblique
```

| 属性    | 说明                                        |
| ------- | ------------------------------------------- |
| normal  | 表示不使用斜体， 是 font-style 属性的默认值 |
| italic  | 表示使用斜体显示文字                        |
| oblique | 表示使用倾斜字体显示                        |

### 字体变体font-variant属性

```css
font-variant: normal | small-caps 
```

| 属性       | 说明                                          |
| ---------- | --------------------------------------------- |
| normal     | 表示正常的字体， 是 font-variant 属性的默认值 |
| small-caps | 表示使用小型的大写字母字体                    |

### 字体粗细font-weight属性

```css
font-weight: normal | bold | bolder | lighter | 100 |200 | … |900
```

| 属性    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| normal  | 表示正常的字体， 是font-weight属性的默认值                   |
| bold    | 表示标准的粗体                                               |
| bolder  | 表示特粗体（为相对参数）                                     |
| lighter | 表示细体（为相对参数）                                       |
| 整数    | 取值为100、200、...、900来表示粗细程度，100 表示最细、400等价于normal 、700 等价于bold |

### 字符间距letter-spacing

```css
letter-spacing:normal|长度单位
```

normal表示默认间距；长度一般为正数。

### 行距line-height

```css
line-height: normal | length
```

normal: 默认行高；length: 百分比、数字。

### 首行缩进text-indent

```css
text-indent:长度单位|百分比单位
```

### 字符装饰text-decoration

```css
text-decoration: none | underline | overline | line-through
```

none: 表示文字无装饰。underline: 表示文字加下画线。line-through: 表示文字加删除线。overline: 表示文字加上画线。

### 英文大小写转换text-transform

```css
text-transform: capitalize | uppercase | lowercase | none
```

capitalize: 将每个单词的第一个字母转换成大写，其余不转换。<br />uppercase: 转换成大写。lowercase:转换成小写。none: 不转换。

### 水平对齐text-align

```css
text-align: left | right | center | justify
```

left: 表示左对齐， 默认值；right: 表示右对齐； center: 表示居中；justify: 表示两端对齐。

### 垂直对齐vertical-align

```css
vertical-align: top | middle | bottorn | text-top | text-bottom
```

| 属性        | 说明                                 |
| ----------- | ------------------------------------ |
| top         | 把元素的顶端与行中最高元素的顶端对齐 |
| middle      | 把此元素放置在父元素的中部           |
| bottom      | 把元素的顶端与行中最低元素的顶端对齐 |
| text-top    | 把元素的顶端与父元素字体的顶端对齐   |
| text-bottom | 把元素的底端与父元素字体的底端对齐   |

### 颜色color

```css
color: rgb(r%,g%,b%) | rgb(r,g,b) | #FFFFFF | #3FE | colorname
```

### 背景background

| 属性                  | 说明                                             |
| --------------------- | ------------------------------------------------ |
| background-color      | 用于对指定元素设置背景颜色                       |
| background-image      | 用于对指定元素设置背景图案                       |
| background-repeat     | 在背景图案小于指定元素的情况下，是否重复填充图案 |
| background-attachment | 用于指定设置的背景图案在元素滚动时是否一起滚动   |
| background-position   | 用于指定背景图案的起始位置                       |

### 背景图像background-image

```css
background-image: url("图像文件名称") | none
```

### 背景图像重复background- repeat

```css
background-repeat: repeat | no-repeat | repeat-x | repeat-y
```

repeat: 使用背景图像完全填充元素大小的空间。<br />repeat-x: 使用背景图像在水平方向从左到右填充元素大小的空间。<br />repeat-y: 使用背景图像在垂直方向从上到下填充元素大小的空间。<br />no-repeat: 不使用背景图像重复填充元素。

### 背景附件background-attachment

```css
background-attachment: scroll | fixed
```

scroll: 表示在文字页面滚动时， 背景附件一起滚动。<br />fixed: 表示在文字页面滚动时， 背景附件固定不滚动。

### 背景图像位置background-position

```css
background-position: 参数1参数2
```

| 属性                        | 说明                                                         |
| --------------------------- | ------------------------------------------------------------ |
| left&#124;center&#124;right | 表示水平方向居左、居中、居右三个不同的位置                   |
| top&#124;center&#124;bottom | 表示垂直方向顶部、中部、底部三个不同的位置。如果仅规定了一个值， 另一个值将是center |
| x% y%                       | x％表示水平位置， y％表示垂直位置。左上角是0% 0%， 如果仅规定了一个值，另一个值将是50% |
| xpos ypos                   | xpos 表示水平位置， ypos 表示垂直位置。左上角是0 0, 如果仅规定了一个值，<br />另一个值将是50% |

### css 列表样式

```css
list-style-type: 属性值; /* 设置列表类型， 共9种*/
list-style-image: url ("图像文件名称") | none ; /* 设置列表替代图像*/
list-style-position: outside | inside ; /* 设置图像位置*/
```

### list-style-type属性

| 属性        | 说明                 | 属性        | 说明                  |
| ----------- | -------------------- | ----------- | --------------------- |
| disc        | 实心圆●              | upper-roman | 大写罗马数字ⅠⅡ Ⅳ Ⅳ... |
| circle      | 空心圆○              | lower-alpha | 小写英文字母abc ...   |
| square      | 实心方块■            | upper-alpha | 大写英文字母ABC...    |
| decimal     | 阿拉伯数字 123 ...   | none        | 不使用项目符号        |
| lower-roman | 小写罗马数字ⅰⅱ ⅳ . . |             |                       |

### list-style-position

| 属性    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| outside | 默认值， 将标志放在文本之外， 而且任何换行文本在标志下均不对齐 |
| inside  | 将标志放在文本之内， 而且任何换行文本在标志下均对齐          |

### css外边距属性

```css
margin-(top | right | bottom | left): 长度单位|百分比单位|auto
margin:lOpx lOpx 20px 30px; /*分别设置上、右、下、左边界*/
```

### 边框属性

```css
border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
```

| 属性   | 说明                                          | 属性   | 说明                                                |
| ------ | --------------------------------------------- | ------ | --------------------------------------------------- |
| none   | 定义无边框                                    | double | 定义双线。双线的宽度等于border-width 的值           |
| hidden | 与none相同。应用于表时例外， 用于解决边框冲突 | groove | 定义3D 凹槽边框。其效果取决于border-color 的值      |
| dotted | 定义点状边框                                  | ridge  | 定义山脊状边框。其效果取决于border-color 的值       |
| dashed | 定义虚线                                      | inset  | 定义使页面沉入感边框。其效果取决于border-color 的值 |
| solid  | 定义实线                                      | outset | 定义使页面浮出感边框。其效果取决于border-color 的值 |

### 边框宽度border-width

```css
border-width: medium(默认值)|thin|thick|length
```

medium: 默认宽度。thin: 小于默认宽度。thick: 大于默认宽度。length:自定义宽度。

### 边框颜色border-color

```css
border-color: color
```

### 内容与边框之间的距离

```css
padding: 长度|百分比
```