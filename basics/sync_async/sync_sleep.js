console.log("start");

function sleep(milliSeconds){
	var startTime = new Date().getTime();
	while(new Date().getTime() < startTime + milliSeconds);

	console.log("sleepが完了しました。");
}

sleep(5000);

console.log("end");

//処理の途中で5秒間sleep

