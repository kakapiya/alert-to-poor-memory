//方法要写在对象定义之前
var f = function(){
    // console.log('1');
    
}
var getYear = ()=>{
	// console.log('year');
}
var name = 'wangshiqi'
var obj = {f,name,getYear}

//方法记得加括号
obj.f()
obj.getYear()

