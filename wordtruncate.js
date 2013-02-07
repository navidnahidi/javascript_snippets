  /**
   * Method to truncate words by number of characters
   * @param basetext string to truncate
   * @characterlimit int Number of characters
   * @appendStr string (Optional) string to append to large strings
   */
  function wordTruncate: function (basetext, characterlimit, appendStr) {
    	if (typeof basetext !== 'string')
        	return '';

    	if (typeof appendStr == 'undefined')
        	appendStr = '...';

    	// Return string if less than character limit
    	if (basetext.length <= characterlimit)
        	return basetext;

    	// Get the last character defined by limit
    	basetext = basetext.substring(0, characterlimit + 1); 
    	// Get substring with last index of whitespace
    	basetext = basetext.substring(0, Math.min(basetext.length, basetext.lastIndexOf(" ")));
    	// Append trailing string
   	 basetext = basetext + appendStr;
    	return basetext;
}
