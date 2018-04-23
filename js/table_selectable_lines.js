$(document).ready(function () {
	var $lineSelectionCheckboxes = $("table").find("tbody>tr>td>input:checkbox");

	var $tablesWithSelectableLines = $lineSelectionCheckboxes.closest("table");
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
});
