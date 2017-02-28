1.使用Eventproxy emit 和 after API爬取规定页数上的信息，并使用cheerio获取每篇招聘广告的url地址。
2.发现url过多，使用async.mapLimit 控制并发数量。访问每篇招聘广告，并用cheerio获取招聘广告的具体信息，并做信息分类。
3.最后做数据分析，平均，比例