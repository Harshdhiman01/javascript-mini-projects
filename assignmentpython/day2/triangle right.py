rows = int(input("please enter the total rows :"))
print ("right angle triangle star pattern")
for i in range (1, rows +1):
    for j in range(1, i+1):
        print ('*', end = ' ')
    print()
    