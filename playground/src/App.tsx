
function App() {
	return (
		<div>
			<button data-track-click="submit_button">
        		Submit
      		</button>
			<div
				data-track-hover="red_block"
				style={{"width": "300px", "backgroundColor": "red", "height": "300px"}}
			>
				<span data-track-click="span*1">first block</span>
				<button data-track-click="button*1">1</button>
				<button data-track-click="button*2">2</button>
				<button data-track-click="button*3">3</button>
				<button data-track-click="button*4">4</button>
				<div data-track-click="div*1">first div</div>
				<div data-track-click="div*2">second div</div>
				<div data-track-click="div*3">third div</div>
			</div>
			<div style={{'width': '300px', "backgroundColor": "blue", "height": "300px"}}>
				<span data-track-click="span*2">second block</span>
				<button data-track-click="button*1.1">1.1</button>
				<button data-track-click="button*2.1">2.1</button>
				<button data-track-click="button*3.1">3.1</button>
				<button data-track-click="button*4.1">4.1</button>
				<div data-track-click="div*1.2">first div - 2</div>
				<div data-track-click="div*2.2">second div - 2</div>
				<div data-track-click="div*3.2">third div - 2</div>
			</div>
		</div>
	);
};

export default App;
