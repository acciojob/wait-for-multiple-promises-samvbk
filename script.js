//your JS code here. If required.
const table = document.querySelector(".table");

const startTime = performance.now();

const promise1 = new Promise((resolve) => {
	const seconds = Math.floor(Math.random()*3)+1;

	setTimeout(() => {
		resolve({
			task:"task 1",
			time:seconds
		});
	},seconds * 1000);
});

const promise2 = new Promise((resolve) => {
	const seconds = Math.floor(Math.random() *3)+1;

	setTimeout(() => {
		resolve({
			task:"task 2",
			time:seconds
		});
	},seconds*1000);
});

const promise3 = new Promise((resolve) =>{
	const seconds = Math.floor(Math.random() *3)+1;

	setTimeout(() => {
		resolve({
			task:"task 3",
			time:seconds
		});
	},seconds*1000);
});

Promise.all([promise1,promise2,promise3])
	.then((results) => {
		const totalTime = (performance.now() - startTime)/1000;
		table.innerHTML = "";

		results.forEach((result) => {
			const row = document.createElement("tr");

			const taskCell = document.createElement("td");
			taskCell.textContent = result.task;

			const timeCell = document.createElement("td");
			timeCell.textContent = result.time;

			row.appendChild(taskCell);
			row.appendChild(timeCell);

			table.appendChild(row);
		});

		const totalRow = document.createElement("tr");

		const totalCell = document.createElement("td");
		totalCell.textContent = "Total";

		const totalTimeCell = document.createElement("td");
		totalTimeCell.textContent = totalTime.toFixed(2) + "seconds";

		totalRow.appendChild(totalCell);
		totalRow.appendChild(totalTimeCell);

		table.appendChild(totalRow);
	});