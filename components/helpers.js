// https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript/37096512
export function secondsToHms(d) {
	d = Number(d);
	var h = Math.floor(d / 3600);
	var m = Math.floor(d % 3600 / 60);
	var s = Math.floor(d % 3600 % 60);

	var hDisplay = h > 0 ? h + (h == 1 ? "h" : "h") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? "m" : "m") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
	return hDisplay + mDisplay + sDisplay;
}