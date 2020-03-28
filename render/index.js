var MyDate = require('./render/date')
var lessons = require('./render/lessons')
var fs = require('fs')

let notification = new Notification('标题', {
	body: '通知正文内容'
})


let getDay = () => {
	var d = new Date();
	var weekday = new Array(7);
	weekday[0] = "周日";
	weekday[1] = "周一";
	weekday[2] = "周二";
	weekday[3] = "周三";
	weekday[4] = "周四";
	weekday[5] = "周五";
	weekday[6] = "周六";
	var x = document.getElementById("week_day");
	x.innerHTML = weekday[d.getDay()]
	var y = document.getElementById("week");
	y.innerHTML = `第${MyDate.week}周`

}


var promise = new Promise((resolve, reject)=>{
	fs.readFile('./data/MyLessons.json')
});

var obj = JSON.parse(data)
// console.log(JSON.stringify(obj))
console.log(obj['mon'][0].name)

//执行
getDay()