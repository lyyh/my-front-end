## 浏览器多进程与多线程
Google Chrome的每个标签页都是一个进程。其他浏览器每个标签页都是一个线程。
#### 安全性
多线程之间共享相同的资源和地址空间，线程之间存在着恶意修改或者获取非授权数据的可能。多进程之间不会共享资源和内存地址，所以不存在安全性的问题。
#### 健壮性
由于多线程共享同一个进程的地址空间和相关资源。所以当一个线程crash(崩溃)的时候，可能会导致相应的地址空间或者资源出现问题，从而导致其他线程也崩溃。而多进程不存在这个问题，因为不同的地址空间和资源，当一个进程崩溃时，并不会影响当其他进程。
#### 性能
进程的启动和关闭、切换，相比较于线程会有更多的开销。

## 浏览器内核
所谓的“浏览器内核”无非指的是一个浏览器最核心的部分——“Rendering Engine”，直译这个词汇叫做“渲染引擎”，不过我们也常称其为“排版引擎”、“解释引擎”。这个引擎的作用是帮助浏览器来渲染网页的内容，将页面内容和排版代码转换为用户所见的视图。有时候我们所说的“浏览器内核”甚至“渲染引擎”，其实除了渲染引擎，也悄悄包含了javascript引擎，如WebKit，它由渲染引擎WebCore和javascript引擎JSCore组成。  常见的浏览器内核（或者说渲染引擎）有很多个，如Trident、Gecko、WebKit等等，不同的内核对网页编写语法的解释也有不同，进而导致同一个页面在不同内核的浏览器下显示出来的效果也会有所出入，这也是前端工程师需要让作品兼容各种浏览器的原因。 我们常常喜欢把浏览器内核与某浏览器名称直接挂钩起来，如IE内核、Chrome内核，其实是不全面的说法。比如Opera在7.0版本到12.16版本中采用的是独立研发的Presto引擎，但在后续跟随了Chrome的脚步加入了WebKit大本营，放弃了Presto；另外即使名称相同，但版本不同的引擎也可能存在较大差别。比如IE6使用的是Trident早期版本，存在许多bug，性能也较低。而最新的IE11所使用的Trident7.0版本已经可以支持WebGL（3D绘图标准）以及HTML5大部分标准。

### webkit  
WebKit前身是KDE小组的KHTML引擎，可以说WebKit是KHTML的一个开源的分支。当年苹果在比较了Gecko和KHTML后，选择了后者来做引擎开发，是因为KHTML拥有清晰的源码结构和极快的渲染速度。
因为WebKit本身主要是由两个引擎构成的，一个正是渲染引擎“WebCore”，另一个则是javascript解释引擎“JSCore”，它们均是从KDE的渲染引擎KHTML及javascript解释引擎KJS衍生而来。

IE: Trident内核
safari:WebKit
Chrome/Chromium:
        谷歌Chrome/Chromium浏览器从08年创始至今一直使用苹果公司的WebKit作为浏览器内核原型，是WebKit的一个分支，我们可以称之为Chromium引擎（注意我们这里说的是Chromium引擎，而不是Chromium浏览器）。

        这里顺便介绍下Chrome和Chromium两个浏览器的区别——Chromium浏览器是谷歌为发展自家的浏览器Chrome而开启的计划，所以Chromium相当于Chrome的工程版或称实验版（尽管Chrome自身也有β版阶段），新功能会率先在Chromium上实现，待验证后才会应用在Chrome上。Chromium一天最多可以更新十几二十个版本，实验性的新特性都会现在这里放出，但是Chromium本身其实并不稳定；而Chrome总共有四个更新分支：Canary、Dev、Beta、Stable，稳定性依次增强。

        我们说回引擎。Chromium引擎虽然是属于WebKit的分支，却把WebKit的代码梳理得可读性提高很多，所以以前可能需要一天进行编译的代码，现在只要两个小时就能搞定。因此Chromium引擎和其它基于WebKit的引擎所渲染页面的效果也是有出入的。基于以上原因，有的地方会把Chromium引擎跟WebKit区分开来，有的地方则直接把Chromium引擎归为WebKit（比如维基百科），其实都有其道理。

        然而在13年发布的Chrome 28.0.1469.0版本开始，Chrome放弃Chromium引擎转而使用最新的Blink引擎（基于WebKit2——苹果公司于2010年推出的新的WebKit引擎），Blink对比上一代的引擎精简了代码、改善了DOM框架，也提升了安全性。

opera:
Opera
        Opera浏览器，是一款挪威Opera Software ASA公司制作的支持多页面标签式浏览的网络浏览器。是跨平台浏览器可以在Windows、Mac和Linux三个操作系统平台上运行。Opera浏览器创始于1995年4月，到2014年3月4日，官方发布的个人电脑用的最新版本为Opera20。

        Opera的一个里程碑作品是Opera7.0，因为它使用了Opera Software自主开发的Presto渲染引擎，取代了旧版Opera 4至6版本使用的Elektra排版引擎。

        Presto加入了动态功能，例如网页或其部分可随着DOM及Script语法的事件而重新排版。Presto在推出后不断有更新版本推出，使不少错误得以修正，以及阅读Javascript效能得以最佳化，并成为当时速度最快的引擎。 

        然而为了减少研发成本，Opera在2013年2月宣布放弃Presto，转而跟随Chrome使用WebKit分支的Chromium引擎作为自家浏览器核心引擎。

        在Chrome与2013年推出Blink引擎（也是基于WebKit的分支）之后，Opera也紧跟其脚步表示将转而使用Blink作为浏览器核心引擎。

Firefox
        Mozilla Firefox是一个开源网页浏览器，原名是Firebird，2004年2月9日，Mozilla Firebird决定改称Mozilla Firefox。Firefox浏览器使用的是Gecko内核，其发展历程如下：

        1997年，网景收购了DigitalStyle。当时，网景浏览器在各方面的表现已经比不上她的主要竞争对手Internet Explorer。网景开始研发下一代的排版引擎，并期望把新的排版引擎应用于下一版本的网景浏览器上。 

        1998年初，Mozilla计划开始执行。这个新的排版引擎名为Raptor，以开发源码的方式发放于互联网上。后来，因为商标问题，Raptor改名为NGLayout（即next generation layout之意）。而最后NGLayout就被网景重新命名为Gecko。 

        2003年7月15日时代华纳解散了网景公司，大部分开发者被解雇。Mozilla基金会亦在当天成立，继续推动着Gecko的发展。时至今天，Gecko仍继续由Mozilla的雇员和义工所维护和发展。 



            最后还是再谈谈javascript引擎（后面统称JS引擎）这东西。我们上述的渲染引擎主要是负责HTML、CSS以及其他一些东西的渲染，而JS引擎则主要负责对javascript的渲染，一个JS引擎的好坏决定了一个浏览器对脚本的加载和执行速度，也影响了其跑分。

        下方列出各种主流浏览器各自的JS引擎，了解下即可：

Firefox：
SpiderMonkey：第一款JavaScript引擎，由Brendan Eich在Netscape Communications时编写，用于Mozilla Firefox 1.0～3.0版本。

Rhino：由Mozilla基金会管理，开放源代码，完全以Java编写。

TraceMonkey：基于实时编译的引擎，其中部份代码取自Tamarin引擎，用于Mozilla Firefox 3.5～3.6版本。

JaegerMonkey：德文Jäger原意为猎人，结合追踪和组合码技术大幅提高性能，部分技术借凿了V8、JavaScriptCore、WebKit：用于Mozilla Firefox 4.0以上版本。

IonMonkey：可以对JavaScript编译后的结果进行优化，用于Mozilla Firefox 18.0以上版本。

OdinMonkey：可以对asm.js进行优化，用于Mozilla Firefox 22.0以上版本。

Chrome：
V8：开源，由Google丹麦开发，是Google Chrome的一部分。

注：我们上面提到Chrome是基于WebKit的分支，而WebKit又由渲染引擎“WebCore”和JS解释引擎“JSCore”组成，可能会让你搞不清V8和JSCore的关系。你可以这样理解——WebKit是一块主板，JSCore是一块可拆卸的内存条，谷歌实际上认为Webkit中的JSCore不够好，才自己搞了一个V8 JS引擎，这就是Chrome比Safari在某些JS测试中效率更高的原因。

IE：
Chakra：中文译名为查克拉，用于Internet Explorer 9的32位版本及IE10+。

Opera：
Linear A：用于Opera 4.0～6.1版本。

Linear B：用于Opera 7.0～9.2版本。

Futhark：用于Opera 9.5～10.2版本。

Carakan：由Opera软件公司编写，自Opera10.50版本开始使用。

其它：
KJS：KDE的ECMAScript/JavaScript引擎，最初由Harri Porten开发，用于KDE项目的Konqueror网页浏览器中。

Narcissus：开放源代码，由Brendan Eich编写（他也参与编写了第一个SpiderMonkey）。

Tamarin：由Adobe Labs编写，Flash Player 9所使用的引擎。

Nitro（原名SquirrelFish）：为Safari 4编写。


参考文档:
http://www.cnblogs.com/vajoy/p/3735553.html