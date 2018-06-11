
$(document).ready(function () {
	var SELECTED_CLASS = "selected";
	var TABLE_SELECTOR = 'table.listResults';

	// we want to select :radio and :checkbox, but there is no :is() selector, so we're using existing :not()
	// not ideal but I don't have a better idea for now :/
	var INPUT_SELECTOR = 'input:not([type=image],[type=button],[type=submit])';
	var CELL_WITH_INPUT_SELECTOR = 'td:first-child>'+INPUT_SELECTOR;
	var LINE_WITH_INPUT_SELECTOR = "tbody>tr>"+CELL_WITH_INPUT_SELECTOR;


	$(document).on('click', TABLE_SELECTOR+':has('+LINE_WITH_INPUT_SELECTOR+')', function (event) {
		var $eventTarget = $(event.target);
		if ($eventTarget.is("a, button")) {
			return;
		}
		if ($eventTarget.parent().is('a, button')) {
			return;
		}
		if ($eventTarget.is("input, select, option")) {
			return;
		}
		if ($eventTarget.is("img")) { // too hard to determine if an event handler is attached so => nazi style
			return;
		}

		var $lineClicked = $eventTarget.closest("tr");
		var $lineClickedCheckbox = $lineClicked.find(CELL_WITH_INPUT_SELECTOR);
		$lineClickedCheckbox.click();
	});

	$(document).on('change', TABLE_SELECTOR+':has('+LINE_WITH_INPUT_SELECTOR+')', function (event) {
		var $eventTarget = $(event.target);
		if (!$eventTarget.is(INPUT_SELECTOR)) {
			return;
		}

		var $selectedLine = $eventTarget.closest("tr");
		$selectedLine.toggleClass(SELECTED_CLASS);
	});

	// check_all event is fired for tableSorter JQuery plugin
	$(document).on("check_all", TABLE_SELECTOR+':has('+LINE_WITH_INPUT_SELECTOR+')', function () {
		$(this).find("tbody>tr").toggleClass(SELECTED_CLASS);
	});
});

