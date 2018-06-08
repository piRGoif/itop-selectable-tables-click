
$(document).ready(function () {
	var SELECTED_CLASS = "selected";
	var TABLE_SELECTOR = 'table.listResults';
	var LINE_SELECTION_CHECKOXES_SELECTOR = "tbody>tr>td:first-child>input:checkbox";


	$(document).on('click', TABLE_SELECTOR+':has('+LINE_SELECTION_CHECKOXES_SELECTOR+')', function (event) {
		var $eventTarget = $(event.target);
		if ($eventTarget.is("a")) {
			return;
		}
		if ($eventTarget.is("button")) {
			return;
		}

		var $lineClicked = $eventTarget.closest("tr");
		var $lineClickedCheckbox = $lineClicked.find("td>input:checkbox");
		$lineClickedCheckbox.click();
	});

	$(document).on('change', TABLE_SELECTOR+':has('+LINE_SELECTION_CHECKOXES_SELECTOR+')', function (event) {
		var $eventTarget = $(event.target);
		var $selectedLine = $eventTarget.closest("tr");
		$selectedLine.toggleClass(SELECTED_CLASS);
	});

	// check_all event is fired for tableSorter JQuery plugin
	$(document).on("check_all", TABLE_SELECTOR+':has('+LINE_SELECTION_CHECKOXES_SELECTOR+')', function () {
		$(this).find("tbody>tr").toggleClass(SELECTED_CLASS);
	});
});

