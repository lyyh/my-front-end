在使用jquery.pjax的使用，想直接请求html文件，但是jquery.pjax在里面加了一层对html标签的过滤，若检测到含有html标签则使用location.href.replace替换当前url，如url后面没有接hash值则不存入历史记录中。因此若要请求Html文件，则在文件中不能出现html标签，若想出现html标签，则去更改里面的源码。

针对html、head标签的过滤
var $head = $(parseHTML(data.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]))
var $body = $(parseHTML(data.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]))



var container = extractContainer(data, xhr, options)

if (!container.contents) {
       locationReplace(container.url)
       return
}