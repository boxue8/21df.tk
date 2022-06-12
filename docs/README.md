::: tip
[本页内容摘抄自该扫描件](https://45q2g4d2eg.k.topthink.com/@html/1.html)
:::
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

| 显示结果 | 符号代码 | 显示结果 | 符号代码  | 显示结果 | 显示结果   |
| -------- | -------- | -------- | --------- | -------- | ---------- |
|          | `&nbsp;` | ©        | `&copy;`  | &        | `&amp;`    |
| <        | `&lt;`   | ®        | `&reg;`   | "        | `&quot;`   |
| >        | `&gt;`   | ×        | `&times;` | ÷        | `&divide;` |

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

capitalize: 将每个单词的第一个字母转换成大写，其余不转换。
uppercase: 转换成大写。lowercase:转换成小写。none: 不转换。

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

repeat: 使用背景图像完全填充元素大小的空间。
repeat-x: 使用背景图像在水平方向从左到右填充元素大小的空间。
repeat-y: 使用背景图像在垂直方向从上到下填充元素大小的空间。
no-repeat: 不使用背景图像重复填充元素。

### 背景附件background-attachment

```css
background-attachment: scroll | fixed
```

scroll: 表示在文字页面滚动时， 背景附件一起滚动。
fixed: 表示在文字页面滚动时， 背景附件固定不滚动。

### 背景图像位置background-position

```css
background-position: 参数1参数2
```

| 属性                        | 说明                                                         |
| --------------------------- | ------------------------------------------------------------ |
| left&#124;center&#124;right | 表示水平方向居左、居中、居右三个不同的位置                   |
| top&#124;center&#124;bottom | 表示垂直方向顶部、中部、底部三个不同的位置。如果仅规定了一个值， 另一个值将是center |
| x% y%                       | x％表示水平位置， y％表示垂直位置。左上角是0% 0%， 如果仅规定了一个值，另一个值将是50% |
| xpos ypos                   | xpos 表示水平位置， ypos 表示垂直位置。左上角是0 0, 如果仅规定了一个值， |
| 另一个值将是50%             |                                                              |

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

### 一级水平导航菜单——采用 ”表格＋超链接” 

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>一级水平导航菜单——采用 “表格＋超链接 ”</title>
		<style type="text/css">
			a{text-decoration:none}
			table{width:150px;height:40px;text-align:center}
		</style>
	</head>
	<body>
		<table>
			<tr>
				<td>&nbsp;</td>
				<td><a href="#">首页</a></td>
				<td><a href="https://www.baidu.com">百度</a>
				<td>&nbsp;</td>
			</tr>
		</table>
	</body>
</html>
```

### 一级水平导航菜单——采用 “ 无序列表＋超链接 ”

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>一级水平导航菜单——采用 “ 无序列表＋超链接 ”</title>
		<style type="text/css">
			ul{list-style: none;margin: 0;padding: 0 0 0 100px;}
			li{float: left;}
			a{text-decoration: none;margin: 0 10px;font-weight: bold;}
		</style>
	</head>
	<body>
		<ul>
			<li><a href="#">首页</a></li>
			<li><a href="https://www.baidu.com">百度</a></li>
		</ul>
	</body>
</html>
```

### 二级水平导航菜单

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>二级水平导航菜单</title>
		<style type="text/css">
			ul{list-style: none;margin: 0;padding: 0px;text-align: center;}
			ul li{float: left;width: 90px;display: inline;}
			ul li a{background: #808080;display: block;margin: 0px;line-height: 28px;}
			ul li ul li a{background: #499;line-height: 24px;}
			ul li ul{visibility: hidden;}
			ul li:hover ul{visibility: visible;}
			a{text-decoration: none;margin: 0 10px;font-weight: bold;}
		</style>
	</head>
	<body>
		<ul>
			<li><a href="#">首页</a></li>
			<li><a href="https:www.baidu.com/">百度</a>
			  <ul>
				<li><a href="https://image.baidu.com/">百度图片</a></li>
				<li><a href="https://map.baidu.com/">百度地图</a></li>
			  </ul>
			</li>
		</ul>
	</body>
</html>
```

### 横向二级导航菜单

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title> 横向二级导航菜单</title>
		<style type="text/css">
			#menu{text-align: center;}
			#submenu{ width: 900px;}
			#menu ul li { width: 115px; list-style: none;float: left; }
			ul li a { color: #FFF; width: 114px; padding: 0px 0px 0px 8px;text-decoration: none; display: block; background: #55A0FF;line-height: 29px;}
			ul li #submenu{ display: none;}
			ul li:hover #submenu{display: block;}
			ul li #submenu ul li a:hover{ background: #333;}
			ul li a:hover{background: #333;}
		</style>
	</head>
	<body>
		<div id="menu" class="">
			<ul>
				<li><a href="#">首页</a></li>
				<li><a href="#">jQuery特效</a>
					<div id="submenu" class="">
						<ul>
							<li><a href="#">图片特效</a></li>
							<li><a href="#">导航特效</a></li>
					</ul>
				</div>
				</li>
				<li><a href="#">JavaScript特效</a></li>
			</ul>
		</div>
	</body>
</html>
```

### 常用表格标记

| 属性                | 说明         | 属性            | 说明           |
| ------------------- | ------------ | --------------- | -------------- |
| `<table></table> `    | 表格标记     | `<td></td>`       | 表格的列标记   |
| `<caption></caption>` | 表格标题标记 | `<thead></thead>` | 定义表格的表头 |
| `<th></th>`           | 表格标头标记 | `<tbody></tbody>` | 定义表格的主体 |
| `<tr></tr>`           | 表格的行标记 | `<tfoot></tfoot>` | 定义表格的页脚 |

### 表格标记基本语法

```html
<table>
  <caption>表格标题</caption>
  <tr>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>
```

### 表格属性

| 属性        | 值                                                           | 说明                           |
| ----------- | ------------------------------------------------------------ | ------------------------------ |
| align       | left&#124;center&#124;right                                  | 规定表格相对周围元素的对齐方式 |
| bgcolor     | #·rrggbb&#124;colorname&#124;rgb(r%,g%,b%)&#124;rgb(rr,gg,bb) | 规定表格的背景颜色             |
| border      | pixels                                                       | 规定表格边框的宽度             |
| cellpadding | pixels&#124;%                                                | 规定单元边沿与其内容之间的空白 |
| cellspacing | pixels&#124;%                                                | 规定单元格之间的空白           |
| frame       | above&#124;below&#124;hsides&#124;vsides&#124;lhs&#124;rhs&#124;border&#124;void | 规定外侧边框的哪个部分是可见的 |
| rules       | none&#124;all&#124;rows&#124;cols&#124;groups                | 规定内侧边框的哪个部分是可见的 |
| height      | %&#124;pixels                                                | 规定表格的高度                 |
| width       | %&#124;pixels                                                | 规定表格的宽度                 |

### 表格边框属性

| 属性        | 说明             | 属性             | 说明               |
| ----------- | ---------------- | ---------------- | ------------------ |
| border      | 表示表格边框粗细 | bordercolorlight | 表示表格亮边框颜色 |
| bordercolor | 表示表格边框颜色 | bordercolordark  | 表示表格暗边框颜色 |

```html
<table border="" bordercolor="" bordercolorlight="" bordercolordark="">...</table>
```

### 表格的宽度和高度属性

```html
<table width="" height=""> …</table> 
```

width:单位可以是长度单位或百分比， 用千定义表格的宽度。
height:单位可以是长度单位或百分比， 用千定义表格的高度。

### 表格背景颜色与背景图像属性

```html
<table bgcolor="" background="">…<／table> 
```

bgcolor:可以用 rgb 函数、十六进制、英文颜色名称来设置背景颜色。
background:设置背景图像，图像的路径可以是绝对路径或相对路径。

### 表格边框样式属性

```html
<table frame="" rules="">...</table>
```

| frame 属性值 | 说明             | rules 属性值 | 说明               |
| ------------ | ---------------- | ------------ | ------------------ |
| above        | 显示上边框       | all          | 显示所有内部边框   |
| below        | 显示下边框       | none         | 不显示内部边框     |
| hsides       | 显示上下边框     | rows         | 仅显示行边框       |
| vsides       | 显示左右边框     | cols         | 仅显示列边框       |
| lhs          | 显示左边框       | groups       | 显示介于行列间边框 |
| rhs          | 显示右边框       |              |                    |
| border       | 显示上下左右边框 |              |                    |
| void         | 不显示边框       |              |                    |

### 表格单元格间距、单元格边距属性

```html
<table cellspacing="" cellpadding=""> … </table>
```

cellspacing:值的单位为像素或百分比， 默认值为2px。
cellpadding:值的单位为像素或百分比。

### 表格水平对齐属性

```html
<table align="left|center|right"> …</table>
```

align属性的取值可以为left（默认居左）、center（居中）和right（居右）。

### 表格行的属性

| 属性    | 说明           | 属性             | 说明           |
| ------- | -------------- | ---------------- | -------------- |
| align   | 行内容水平对齐 | bordercolor      | 行的边框颜色   |
| valign  | 行内容垂直对齐 | bordercolorlight | 行的亮边框颜色 |
| bgcolor | 行的背景颜色   | bordercolordark  | 行的暗边框颜色 |

```html
<table>
  <tr align="left | center | right" valign="top | middle | bottom">
    <td>...</td>
    ...
  </tr>
</table>
```

### 表格单元格的属性

| 属性值      | 说明               | 属性             | 说明               |
| ----------- | ------------------ | ---------------- | ------------------ |
| align       | 单元格内容水平对齐 | bordercolorlight | 单元格的亮边框颜色 |
| valign      | 单元格内容垂直对齐 | bordercolordark  | 单元格的暗边框颜色 |
| bgcolor     | 单元格的背景颜色   | rowspan          | 单元格跨行         |
| background  | 单元格背景图像     | colspan          | 单元格跨列         |
| bordercolor | 单元格的边框颜色   | width            | 单元格宽度         |
|             |                    | height           | 单元格高度         |

### 表格单元格跨列属性

```html
<td colspan=“列数”>...</td>
```

### 表单标记

```html
<form method="POST" action="">
	<input  type="text" name=""/>
	<textarea name="" rows="" cols=""></textarea>
	<select name="">
		<option value="" selected></option>
		<option value=""></option>
	</select>
</form>
```

 代码中第 2 行是单行文本输入框、第3 行是多行文本域、第4~7 行是下拉列表框.

| 属性    | 值            | 说明                                                         |
| ------- | ------------- | ------------------------------------------------------------ |
| name    | name          | 规定表单的名称                                               |
| action  | url           | 规定当提交表单时， 向何处发送表单数据                        |
| method  | get&#124;post | 规定如何发送表单数据。 post 方法主要包含名称／值对， 并且无须包含于action 属性的 URL 中。 get 方法把名称／值对加在 action 的 URL 后面并且把新的 URL 送至服务器， 不推荐使用 |
| enctype | MIME_type     | 规定表单数据在发送到服务器之前应该如何编码                   |

### 表单定义域和域标题

```html
<form>
	<fieldset>
		<legend align="left|center|right">域标题内容</legend>
	</fieldset>
</form>
```

### 表单信息输入

```html
<input name="" type=""/> 
```

| 属性 | 值                                                           | 说明                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| name | name                                                         | 定义 input 元素的名称                                        |
| type | text&#124;password&#124;checkbox&#124;radio&#124;image&#124;submit&#124;reset&#124;button&#124;file &#124;hidden | 规定 input 元素的类型。 text单行文本输入框；password:密码输入框；checkbox复选框；radio单选按钮；image 图像按钮；submit提交按钮；reset 重置按钮； button普通按钮；file文件选择框；hidden 隐藏框 |

### 单行文本输入框

```html
<input name="" type="text" maxlength="" size="" value="" readonly /> 
```

| 属性      | 值             | 说明                                        |
| --------- | -------------- | ------------------------------------------- |
| name      | name           | 定义 input 元素的名称                       |
| maxlength | number         | 规定输入字段中的字符的最大长度              |
| size      | number_of_char | 定义输入字段的宽度。 其值小于或等于最大长度 |
| value     | value          | 规定 input 元素的默认值                     |
| readonly  | readonly       | 规定文本框中内容只读， 不能修改和编辑       |

### 密码输入框

```html
<input name="" type="password" maxlength="" size=""/>
```

| 属性      | 值             | 说明                                        |
| --------- | -------------- | ------------------------------------------- |
| name      | name           | 定义 input 标记的名称                       |
| maxlength | number         | 规定输入字段中的字符的最大长度              |
| size      | number_of_char | 定义输入字段的宽度。 其值小于或等于最大长度 |

### 复选框

```html
<input name="" type="checkbox" value="" checked="checked"/> 
```

| 属性    | 值      | 说明                  |
| ------- | ------- | --------------------- |
| name    | name    | 定义 input 标记的名称 |
| value   | value   | 规定 input 标记的值   |
| checked | checked | 预先选定复选框        |

### 单选桉钮

```html
<input name="" type="radio" value="" checked="checked"/>
```

| 属性    | 值      | 说明                  |
| ------- | ------- | --------------------- |
| name    | name    | 定义 input 标记的名称 |
| value   | value   | 规定 input 标记的值   |
| checked | checked | 预先选定单选按钮      |

### 图像桉钮

```html
<input name="" type="image" src="" width="" height=""/> 
```

| 属性   | 值     | 说明                               |
| ------ | ------ | ---------------------------------- |
| name   | name   | 定义input标记的名称                |
| src    | URL    | 定义以提交按钮形式显示的图像的 URL |
| width  | width  | 规定图像的宽度， 单位为像素        |
| height | height | 规定图像的高度， 单位为像素        |

### 提交桉钮

```html
<input name="" type="submit" value=“提交”/>
```

| 属性  | 值    | 说明                  |
| ----- | ----- | --------------------- |
| name  | name  | 定义 input 标记的名称 |
| value | value | 规定 input 标记的值   |

### 重置桉钮

```html
<input name="" type="reset" value="">
```

| 属性  | 值    | 说明                  |
| ----- | ----- | --------------------- |
| name  | name  | 定义 input 标记的名称 |
| value | value | 规定 input 标记的值   |

### 普通按钮

```html
<input name="" type="button" value="" onclick=""/> 
```

| 属性    | 值       | 说明                                        |
| ------- | -------- | ------------------------------------------- |
| name    | name     | 定义 input 标记的名称                       |
| value   | value    | 规定 input 标记的值                         |
| onclick | 事件代码 | 绑定事件代码、 自定义函数或直接使用脚本代码 |

### 文件选择桓

```html
<input name="" type="file"> 
```

### 隐藏桓

```html
<input name="" type="hidden" value="" />
```

| 属性  | 值    | 说明                  |
| ----- | ----- | --------------------- |
| name  | name  | 定义 input 标记的名称 |
| value | value | 规定 input 标记的值   |

### 多行文本输入框

```html
<textarea name="" rows="" cols="" wrap=""/>初始信息内容</textarea>
<textarea rows="" cols="" wrap="soft|hard"></textarea><!-- HTML5定义－－＞
```

| 属性 | 值                                       | 说明                                                         |
| ---- | ---------------------------------------- | ------------------------------------------------------------ |
| name | name                                     | 定义textarea标记的名称                                       |
| rows | number                                   | 规定文本区内的可见行数                                       |
| cols | number                                   | 规定文本区内的可见宽度                                       |
| wrap | wrap&#124;virtual&#124;physical&#124;off | wrap属性规定当在表单中提交时，文本区域中的文本如何换行 wrap——文本区会包含一行文本，用户必须将光标移动到右边才能看到全部文本， 这时将把一行文本传送给服务器；virual——将实现文本区内的 自动换行，但在传输给服务器时，文本只在用户按下Enter键的地方进 行换行，其他地方没有换行的效果；physical——将实现文本区内的自动换行，并以这种形式传送给服务器； off——不会自动换行，输入内容超出 文本域右界时，文本将向左滚动，必须按Enter键才能将插入点移到下 一行。 HTML5中，soft表示提交时不换行，hard表示提交时换行 |

### 下拉列表框

```html
<select name="" size="" multiple>
	<option value="" selected>文字信息</option>
	<option value=""></option>
	...
</select>
```

| 标记名称 | 属性     | 值       | 说明                           |
| -------- | -------- | -------- | ------------------------------ |
| select   | name     | name     | 定义 select 标签的名称         |
| select   | size     | number   | 规定下拉列表框中可见选项的数目 |
| select   | multiple | multiple | 规定可选择多个选项             |
| option   | value    | value    | 规定列表项的值                 |
| option   | selected | selected | 设置预选列表项                 |

