// ==UserScript==
// @name        SalesGenieGrabber
// @author      Matthew Gillespie
// @date        2014-10-14
// @namespace   gillespiem@braindeadprojects.com
// @include     https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
// @require     https://code.jquery.com/jquery-1.11.1.min.js
// @version 1.0
// @grant       none

window.customerCSV="";

/**
 * Function to remove the annoying mozNoSelectjunk, and open up a new page with the contents of a table.
 */
function waxTheMozillasBack(e)
{
  if (e.keyCode == 111)
  {
    $("#mozNoSelect").remove();

    $("#resultsGridView > tbody > tr ").each(function()
    {
        $(this).find("td").each(function()
        {
            if ( $(this).children().length == 0)
            {
                window.customerCSV = window.customerCSV.concat($(this).text());
            }
            else
            {
                window.customerCSV = window.customerCSV.concat($(this).children().last().text());
            }
            
            window.customerCSV = window.customerCSV.concat("|");
        });
        
        window.customerCSV = window.customerCSV.concat("\n<br>");
    });
    
    var new_window = window.open();
    $(new_window.document.body).html(window.customerCSV);
  }
}

window.addEventListener("keydown", waxTheMozillasBack, true);
// ==/UserScript==
