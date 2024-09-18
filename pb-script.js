// let startValue = true;

if (document.readyState === 'loading') {
	// Loading hasn't finished yet
	document.addEventListener('DOMContentLoaded', startScript());
} else {
	// `DOMContentLoaded` has already fired
	startScript();
}

function startScript() {
	let width = 0;
	let timer;
	const startButton = document.querySelector('#start-button');
	const stopButton = document.querySelector('#stop-button');
	const resetButton = document.querySelector('#reset-button');

	const progressBar = document.querySelector('#pb-content');

	function progress() {
		if (width === 100) {
			startButton.disabled = true;
			stopButton.disabled = true;
			clearInterval(timer);
		} else if (timer) {
			width++;
			progressBar.style.width = width + '%';
			progressBar.innerHTML = width + '%';
		}
	}
	startButton.addEventListener('click', function () {
		timer = setInterval(progress, 100);
		startButton.disabled = true;
		stopButton.disabled = false;
		resetButton.disabled = false;
	});

	stopButton.addEventListener('click', function () {
		clearInterval(timer);
	});

	resetButton.addEventListener('click', function () {
		width = 0;
		progressBar.style.width = 0 + '%';
		progressBar.innerHTML = '';
		startButton.disabled = false;
		stopButton.disabled = true;
		resetButton.disabled = true;
		clearInterval(timer);
	});
}
