from os import waitstatus_to_exitcode

phoneBook = {}

def add_name(name, number):
    phoneBook[name] = number
    print(f"{name} added to the phone book")

def search_name(name):
    if name in phoneBook:
        print(f"{name} : {phoneBook[name]}")
    else:
        print(f"{name} not found")

def delete_name(name):
    if name in phoneBook:
        del phoneBook[name]
        print(f"{name} deleted from the phone book")
    else:
        print(f"{name} not found")

while True:

    choice = int(input("""Enter your choice from the given options
  1. Add Name
  2. Search Name
  3. Delete Name
  4. Exit
  Enter your choice : """))

    if choice == 1:
       name = input("Enter the name: ")
       number = input("Enter the number: ")
       add_name(name, number)
    elif choice == 2:
       name = input("Enter the name to search: ")
       search_name(name)
    elif choice == 3:
       name = input("Enter the name to delete: ")
       delete_name(name)
    elif choice == 4:
        break
    else:
        print("Invalid input")