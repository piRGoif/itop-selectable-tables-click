$(document).ready(function () {
	var LINE_SELECTION_CHECKOXES_SELECTOR = "tbody>tr>td>input:checkbox";
	var SELECTED_CLASS = "selected";

	var $lineSelectionCheckboxes = $("table").find(LINE_SELECTION_CHECKOXES_SELECTOR);
	var $tablesWithSelectableLines = $lineSelectionCheckboxes.closest("table");

	$tablesWithSelectableLines.addClass("table-with-selectable-lines");
	$tablesWithSelectableLines.css("cursor", "pointer");
	$tablesWithSelectableLines.on("click", "tbody>tr", function (event) {
		var $eventTarget = $(event.target);
		if ($eventTarget.is("a")) {
			return;
		}
		if ($eventTarget.is("button")) {
			return;
		}

		var $lineCheckbox = $eventTarget.closest("tr").find("td>input:checkbox");
		$lineCheckbox.click();
	});
	$tablesWithSelectableLines.on("change", LINE_SELECTION_CHECKOXES_SELECTOR, function(event) {
		var $eventTarget = $(event.target);
		var $selectedLine = $eventTarget.closest("tr");
		$selectedLine.toggleClass(SELECTED_CLASS);
	});

	// check_all event is fired for tableSorter JQuery plugin
	$tablesWithSelectableLines.on("check_all", function() {
		$(this).find("tbody>tr").toggleClass(SELECTED_CLASS);
	});
});
