def difference(arr1, arr2):
    output = []
    for value in arr1:
        if not value in arr2:
            output.append(value)
    for value in arr2:
        if not value in arr1:
            output.append(value)
    return output


print(difference([1, 2, 3], [3, 4, 5]))