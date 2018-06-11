
$(document).ready(function () {
	var SELECTED_CLASS = "selected";
	var TABLE_SELECTOR = 'table.listResults';
	var LINE_SELECTION_CHECKOXES_SELECTOR = "tbody>tr>td:first-child>input:checkbox";


	$(document).on('click', TABLE_SELECTOR+':has('+LINE_SELECTION_CHECKOXES_SELECTOR+')', function (event) {
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
		var $lineClickedCheckbox = $lineClicked.find("td>input:checkbox");
		$lineClickedCheckbox.click();
	});

	$(document).on('change', TABLE_SELECTOR+':has('+LINE_SELECTION_CHECKOXES_SELECTOR+')', function (event) {
		var $eventTarget = $(event.target);
		if (!$eventTarget.is("input:checkbox")) {
			return;
		}

		var $selectedLine = $eventTarget.closest("tr");
		$selectedLine.toggleClass(SELECTED_CLASS);
	});

	// check_all event is fired for tableSorter JQuery plugin
	$(document).on("check_all", TABLE_SELECTOR+':has('+LINE_SELECTION_CHECKOXES_SELECTOR+')', function () {
		$(this).find("tbody>tr").toggleClass(SELECTED_CLASS);
	});
});

