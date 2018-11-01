var express = require('express');
var router = express.Router();
var _= require('lodash');

var products=[];
products.push({name:"ZTE U880",price:899.8});
products.push({name:"HuWei 荣耀8",price:1899.8});
products.push({name:"iPhone 7 Plus 128G",price:5899.8});

/* 产品 */
router.get('/', function(req, res, next) {
	var str=JSON.stringify(products);
  //将product视图与指定的对象渲染后输出到客户端
  res.render('product', { title: '天狗商城', pdts:products,msg:str});
});

/* 产品 */
router.get('/rest', function(req, res, next) {
  res.json(products);
});

//获得产品根据Id
//router.get('/:id/:category',function(request,res,next){
	//res.send(request.params.id+","+request.params.category);
//});

router.get('/edit/:index', function(req, res, next) {
	var pdt=products[parseInt(req.params.index)];
	res.render('product', { title: '天狗商城', pdts:products,msg:"",obj:pdt});
});

router.get('/:id',function(request,res,next){
	res.send("name:"+request.query.name);
});

router.post('/add',function(request,res,next){
	var entity={name:request.body.name,price:request.body.price};
	products.push(entity);
	  //将product视图与指定的对象渲染后输出到客户端
	  res.render('product', { title: '天狗商城', pdts:products,msg:"添加成功"});
});



module.exports = router;
