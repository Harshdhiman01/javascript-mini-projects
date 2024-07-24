rows = int(input("please enter the total rows :"))
k = 2*rows-2
print ("left angle triangle star pattern")
for i in range(rows):
    for j in range(k):
        print(end=" ")
    k = k-2
    for j in range(i+1):
        print("*", end=" ")
        
    print()