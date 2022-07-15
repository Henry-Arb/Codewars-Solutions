// DESCRIPTION:
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

//My Solution
function formatDuration(seconds) {
    // Complete this function
    if (seconds > 0) {
        //Checks how many years/days/hours/minutes fit into the provided amount of seconds.
        const Y = Math.floor(seconds / 31536000);
        const D = Math.floor(seconds / 86400 - Y * 365);
        const H = Math.floor(seconds / 3600 - D * 24 - Y * 8760);
        const M = Math.floor(seconds / 60 - H * 60 - D * 1440 - Y * 525600);
        const S = seconds - M * 60 - H * 3600 - D * 86400 - Y * 31536000;

        //Checks if the number provided is greater than 1. If that is the case then add "s" to the end of the unit name. If unit is 0 which is falsy, return null otherwise return human readable format.
        const plural = num => num === 1 ? '' : 's';
        const YY = Y ? Y + ' year' + plural(Y) : null;
        const DD = D ? D + ' day' + plural(D) : null;
        const HH = H ? H + ' hour' + plural(H) : null;
        const MM = M ? M + ' minute' + plural(M) : null;
        const SS = S ? S + ' second' + plural(S) : null;
        
        //checks if any of the values are null, returns a new array only containing non-null values.
        const nonNullValues = [YY, DD, HH, MM, SS].filter(Boolean);
        
        //removes the last time unit from the non-null array. if it's the only value return it and if it's not then join all values of the array with a , and add the last value with "and" 
        const last = nonNullValues.pop();
        return nonNullValues.length === 0
            ? last
            : nonNullValues.join(', ') + ' and ' + last;
    }
    else {
        return "now"
    }
}