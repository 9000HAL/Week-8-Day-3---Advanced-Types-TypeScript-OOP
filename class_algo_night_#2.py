"""

Two Number Sum:
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.
NOTE: that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
You can assume that there will be at most one pair of numbers summing up to the target sum.
Sample Input:
array = [3, 5, -4, 8, 11, 1, -1, 6]
target_sum = 10
Sample Output:
[-1, 11] The numbers can be in any order


research: By initializing two variables pointer_one and pointer_two and evaluating their values with respect to the given target, 
we can find pairs in an array that sum up to a certain number with a O(n) time complexity.



def two_pointer(array):
    left = 0
    right = len(array) -1
    while left <= right:
        array[left], array[right], = array[left], array[right]


"""




array = [3, 5, -4, 8, 11, 1, -1, 6]



def number_sum(array, target_sum):
    array.sort()
    print(array)
    left = 0
    right = len(array) -1
    output = []
    while left < right:
        left_right = array[left] + array[right]
        if left_right == target_sum:
            output.append(array[left])
            output.append(array[right])
            return output
        elif left_right > target_sum:
                left += 1
        else:
                right -= 1
        return []
           


print(number_sum(array, 8))