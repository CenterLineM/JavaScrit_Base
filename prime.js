function isPrim(n) {
	for (var i = 1; i < n; i++) {
		if (n%i == 0){
			return false;
		}
		break;
	}

	return true;
}

console.log("isPrim(7)= " +isPrim(7));
console.log("isPrim(1000)= " +isPrim(1000));


for (var p = 1; p < 1000; p++) {
	if (isPrim(p))
		console.log("isPrim(" + p + ")");

}
// 程式有點問題 !?

