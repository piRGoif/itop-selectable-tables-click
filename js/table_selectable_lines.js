//TODO blue background color for selected lines

var $tablesWithSelectableLines = $("table").find("tbody>tr>td>input:checkbox").closest("table");
//FIXME error if none found
$tablesWithSelectableLines.off(); //FIXME only here for scratchpad use
$tablesWithSelectableLines.css("cursor", "pointer");
$tablesWithSelectableLines.on("click", "tbody>tr", function(event) {
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