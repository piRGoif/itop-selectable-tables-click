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
		$oPage->add_saas('env-'.utils::GetCurrentEnvironment()
			.'/'.utils::GetCurrentModuleDir(0)
			.'/css/table-selectable-lines.scss');
		$oPage->add_linked_script(utils::GetCurrentModuleUrl().'/js/table-selectable-lines.js');
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