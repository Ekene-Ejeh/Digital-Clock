function showTime() {
	let date = new Date(); // to get the current date
	let hours = date.getHours(); // to get the current hour 0-23hrs
	let minutes = date.getMinutes(); // to get the current minutes 0-59mins
	let seconds = date.getSeconds(); // to get the current seconds 0-59secs

	let formatHours = convertFormat(hours);

	hours = checkTime(hours);

	hours = addZero(hours);
	minutes = addZero(minutes);
	seconds = addZero(seconds);

	document.getElementById(
		"clock"
	).innerHTML = `${hours} : ${minutes} : ${seconds}${formatHours}`;
}

function convertFormat(time) {
	let timeFormat = "AM";
	if (time >= 12) {
		timeFormat = "PM";
	}
	return timeFormat;
}

function checkTime(time) {
	if (time > 12) {
		time = time - 12;
	}
	if (time === 0) {
		time = 12;
	}
	return time;
}

function addZero(time) {
	if (time < 10) {
		time = "0" + time;
	}
	return time;
}
showTime();
setInterval(showTime, 1000);
