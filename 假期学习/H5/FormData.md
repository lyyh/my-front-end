## FormData
XMLHttpRequest 2定义了表单类型FormData类型，FormData为序列化表单已经创建与表单格式相同的数据用于通过XHR传输）提供了便利。  
使用FormData实现不刷新文件上传，完成ajax表单提交  
### 方便之处
使用FormData的方便之处体现在不必明确地在XHR对象上设置请求头部。XHR对象能够识别传入的数据类型是FormData的实例，并配置适当的头部信息。  
### 使用form表单初始化FormData对象方式上传文件
```
<form id="uploadForm" enctype="multipart/form-data">
    <input id="file" type="file" name="file"/>
    <button id="upload" type="button">upload</button>
</form>
```

```
$.ajax({
    url: '/upload',
    type: 'POST',
    cache: false,
    data: new FormData($('#uploadForm')[0]),
    processData: false,
    contentType: false
}).done(function(res) {
}).fail(function(res) {});
```

### 使用FormData对象添加字段方式上传文件
```
<div id="uploadForm">
    <input id="file" type="file"/>
    <button id="upload" type="button">upload</button>
</div>
```

```
var formData = new FormData();
formData.append('file', $('#file')[0].files[0]);
$.ajax({
    url: '/upload',
    type: 'POST',
    cache: false,
    data: formData,
    processData: false,
    contentType: false
}).done(function(res) {
}).fail(function(res) {});
```


