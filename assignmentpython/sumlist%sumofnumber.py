def sumOfList(numbers):
    sum = 0
    for i in numbers:
        sum += i
    return sum


iterations = int(input("Enter number of Elements you want to enter : "))
lis = []
for i in range(iterations):
    aa = int(input(f"Enter {i+1} Element :"))
    lis.append(aa)


print(sumOfList(lis))



#sum of numbers

def sumOfNumbers(number):
  sum = 0
  for i in number:
    sum += i
  return sum

print(sumOfNumbers([1,2,3,4,5]))