# classes
Employee(name, id, email)
Engineer(name, id, email, gh_username)
Intern(name, id, email, school)
Manager(name, id, email, officeNumber)

# Inquirer
# First Inquirer 
  questions/ManagerInfo.js
    return Manager class(val.name, val.id, val.email, val.office_number)

# Second Inquirer
  addAMember.js
    return 'intern' or 'engineer' or 'finish'

# loop
  if 'intern' is returned by addAMember.js
    questions/intern_info.js
      return Intern class(val.name, val.id, val.email, val.school)
  
  else if 'engineer' is returned by addAMember.js
    questions/engineer_info.js
      return Engineer class(val.name, val.id, val.email, val.gh_username)

  else if 'finish' is returned by addAMember.js
    pass

# push returned Intern class and Engineer class in Array
  InternArray.push(returned Intern class)
  EngineerArray.push(returned Engineer class)

  -> pass each array to html using JSON.stringify()

# Generate Html

Receive InternArray and EngineerArray
-> Put Array's value into html 
using for loop
generatehtml/generate_html.js

# index.html File
Index. html file 
contains 
  One Manager
  and Some Interns and Engineers

# Test
Test contains validation of some datas
      
