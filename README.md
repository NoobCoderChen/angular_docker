# angular_docker
一个简单的angularCRUD应用  

## 运行前的准备
//由于使用的是json-server来作为服务器 所以要先安装json-server  
//json-server安装十分简单  

1.安装nodejs: https://nodejs.org/en/  
  
2.打开命令行,输入`npm install -g json-server`  
  现在json-server已经安装成功了  
    
3.进入服务器工作目录(项目中的json-server目录)创建文件 db.json  
  文件内容:  
  ```
  {
  "articles": [
    {
      "id": 1,
      "title": "Android AsyncTask Example",
      "category": "Android"
    }
  ]
}
```
  
4.开始运行json-server,命令行进入服务器工作目录,输入:  
`json-server --watch db.json -p 8111`  
  (-p 8111 是在angular项目src/app/app.ervice.ts中指定的json-server的端口号)  
    
5.浏览器打开http://localhost:8111/articles 即可看见db.json文件中的内容显示了出来  
//准备工作完成  

## 从dockerhub拉取镜像
`docker pull chenzijian0326/angular_docker:v1.0`  

## 运行镜像
`docker run --rm --name=angular-demo -it -v F:/angular/angular/demo:/app -p 4200:4200 chenzijian0326/angular_docker:v1.0 /bin/bash`  

F:/angular/angular/demo 是本地angular项目的根目录  
:/app 在docker中的工作目录

![angular_start_in_docker](https://github.com/NoobCoderChen/angular_docker/blob/master/error_img/angular_start_in_docker.jpg)  
此时已成功运行chenzijian0326/angular_docker:v1.0镜像  

### 运行angular应用
`ng serve --host=0.0.0.0`  

![ng_serve](https://github.com/NoobCoderChen/angular_docker/blob/master/error_img/ng_serve.jpg) 

### 编译报错  
#### rxjs_error_TS1005  
![rxjs_error_TS1005](https://github.com/NoobCoderChen/angular_docker/blob/master/error_img/rxjs_error_TS1005.jpg)  
Reason:  
rxjs版本问题  

Solution:  
```
npm uninstall rxjs --save  

npm install rxjs@6.3.3 --save  

```

