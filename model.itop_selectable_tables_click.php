<?php

class SelectableTablesClickApplication implements iPageUIExtension
{
	/**
	 * Add JS file to allow selectables lines to be toggled clicking anywhere in the line
	 *
	 * @inheritdoc
	 */
	public function GetNorthPaneHtml(iTopWebPage $oPage)
	{
		$oPage->add_linked_stylesheet(utils::GetCurrentModuleUrl().'/css/table_selectable_lines.css');
		$oPage->add_linked_script(utils::GetCurrentModuleUrl().'/js/table_selectable_lines.js');
	}

	public function GetSouthPaneHtml(iTopWebPage $oPage)
	{
		// nothing to do !
	}

	public function GetBannerHtml(iTopWebPage $oPage)
	{
		// nothing to do !
	}
}