/*
 * Copyright (c) 2015 Tarang Khandelwal
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
var substitutor = (function()
{
     var regEx=/{([^{]*?)}/g;
               
	 var checkForSubstitutors=function(str){
        return regEx.test(str);
    }

    var getSubstitueValue = function(context)
    {
        return function(regexMatch, placeholder)
        {
            console.log(context,regexMatch,placeholder,"context,regexMatch,placeholder")
            var splitArray=placeholder.split(".")
            console.log(splitArray)
            var currentContext=context;
            while(splitArray.length){
                    var item=splitArray.shift();
                    if(typeof(currentContext)==="object" && item in currentContext)
                        currentContext=currentContext[item];
                    else 
                        return;
            }
            return currentContext;
        };
    };

    return function(input, context)
    {
			while(checkForSubstitutors(input)){
               input=input.replace(regEx, getSubstitueValue(context)); 
            }
        return input
    };
})();