a = int(input("Enter a number"))
b = int(input("Enter b number"))
choice =int(input("""Enter your choice from the given options
1. Addition
2. Subtraction
3. Devision
4. Multiplication
5. Modulo
6. Exit
Enter your choice : """))
if choice == 1:
  print("addition of two numbers are :",a+b)
elif choice == 2:
  print("subtraction of two numbers are :",a-b)
elif choice == 3:
  try:
    print("division of two numbers are :",a/b)
  except Exception as e:
    print(e)
elif choice == 4:
  print("multiplication of two numbers are :",a*b)
elif choice == 5:
  print("modulo of two numbers are :",a%b)
elif choice == 6:
  print("exit")
else:
  print("invalid input")