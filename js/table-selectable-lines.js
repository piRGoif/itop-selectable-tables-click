
$(document).ready(function () {
	var SELECTED_CLASS = "selected";
	var TABLE_SELECTOR = 'table.listResults';

	// we want to select :radio and :checkbox, but there is no :is() selector, so we're using existing :not()
	// not ideal but I don't have a better idea for now :/
	var INPUT_SELECTOR = 'input:not([type=image],[type=button],[type=submit])';

	var FIRST_CELL_WITH_INPUT_SELECTOR = 'td:first-child>'+INPUT_SELECTOR;
	var LINE_WITH_INPUT_IN_FIRST_CELL_SELECTOR = "tbody>tr>"+FIRST_CELL_WITH_INPUT_SELECTOR;
	var CELLS_WITH_INPUT_SELECTOR = 'td>'+INPUT_SELECTOR;
	var LINE_WITH_INPUTS_SELECTOR = "tbody>tr>"+CELLS_WITH_INPUT_SELECTOR;


	// Tables with inputs inside cells
	$(document).on('click', TABLE_SELECTOR+':has('+LINE_WITH_INPUTS_SELECTOR+')', function (event) {
		var $eventTarget = $(event.target);
		if (shouldExitHandler($eventTarget)) {
			return;
		}

		var $cellClicked = $eventTarget.closest("td");
		var $cellClickedInput = $cellClicked.find(INPUT_SELECTOR);
		if ($cellClickedInput.length === 1) {
			$cellClickedInput.click();
		}
	});


	// Tables with one input in the first cell to select lines
	$(document).on('click', TABLE_SELECTOR+':has('+LINE_WITH_INPUT_IN_FIRST_CELL_SELECTOR+')', function (event) {
		var $eventTarget = $(event.target);
		if (shouldExitHandler($eventTarget)) {
			return;
		}

		var $lineClicked = $eventTarget.closest("tr");
		var $lineClickedInput = $lineClicked.find(FIRST_CELL_WITH_INPUT_SELECTOR);
		$lineClickedInput.click();
	});

	$(document).on('change', TABLE_SELECTOR+':has('+LINE_WITH_INPUT_IN_FIRST_CELL_SELECTOR+')', function (event) {
		var $eventTarget = $(event.target);
		if (!$eventTarget.is(INPUT_SELECTOR)) {
			return;
		}

		updateLines($eventTarget);
	});

	// check_all event is fired for tableSorter JQuery plugin
	$(document).on("check_all", TABLE_SELECTOR+':has('+LINE_WITH_INPUT_IN_FIRST_CELL_SELECTOR+')', function () {
		$(this).find("tbody>tr").toggleClass(SELECTED_CLASS);
	});
	// update when clicking on the header checkbox/radio input (no event fired, and line updates using .prop() :
	// we need to catch it ourselves !)
	$(document).on("click", TABLE_SELECTOR+'>thead>tr>th:first-child>input:checkbox', function () {
		//FIXME for line that are not changing state we are wrongly toggling the selection CSS class...
		// will be solved after integration in iTop !
		$(this).closest("table").find("tbody>tr").toggleClass(SELECTED_CLASS);
	});


	/**
	 * Our custom handlers chould run only if clicking on somewhere without event already attached !
	 * @param $eventTarget
	 * @returns {boolean} true if our custom handler shouldn't be run
	 */
	function shouldExitHandler($eventTarget) {
		if ($eventTarget.is("a, button")) {
			return true;
		}
		if ($eventTarget.parent().is('a, button')) {
			return true;
		}
		if ($eventTarget.is("input, select, option")) {
			return true;
		}
		if ($eventTarget.is("img")) { // too hard to determine if an event handler is attached so excluding all !
			return true;
		}

		return false;
	}



	function updateLines($inputChanged) {
		var $selectedLine = $inputChanged.closest("tr");

		if ($inputChanged.is('input:radio')) {
			// didn't find a proper event fired when radio is deselected... so doing this !
			$selectedLine
				.closest('table')
				.find('tr')
				.removeClass(SELECTED_CLASS);
		}

		$selectedLine.toggleClass(SELECTED_CLASS);
	}
});
