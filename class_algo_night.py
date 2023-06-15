"""
Clock, No Multiplying
Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.
Sample Input:
 h = 0
 m = 1
 s = 1
(def clock(0,1,1))
Sample Output:
61000
Input constraints:
0 <= h <= 23
 0 <= m <= 59
 0 <= s <= 59
**NO MULTIPLYING**

Remember its about who gets back with a working solution first, time complexity does not matter!




def clock(minutes, seconds):



    while hours > 0:
        minutes += 60
        hours -= 1

    while minutes > 0:
        seconds += 60
        minutes -= 1

    
    return f"{seconds}000"


print(clock(1, 6))

"""

#see SCREENSHOT-----------------------------------------------------