// student record arrays
const studentRecords = [
 {
  name : "John Doe",
  age : 25,
  score: 50
},
{
  name : "Thelma Workings",
  age : 28,
  score: 70
},
{
  name : "Grace Smith",
  age : 20,
  score: 50
},
{
  name: "Amos Thomas",
  age: 50,
  score: 40
}
]
//displaying all students
function getStudentRecord(displayAll){
      return displayAll
    }
    console.table(getStudentRecord(studentRecords))
    
//displaying the highest score
function getStudentScore(highscore) {
    let scores = highscore[1]   
   for (let highsc of highscore){
    if (highsc.score > scores.score)
      scores = highsc
   }
   return scores.name 
}
console.log("Student with highest score: " + getStudentScore(studentRecords))

//Total average of student scores
function getAverageScore(average){
  let total = 0
   
  for (const avg of average){
    total = total + avg.score
     }
    return total/average.length
}
console.log("Students average score: " + getAverageScore(studentRecords))

//Students who scored atleast 50
function getLeastNum(studentRec){
  let least = [ ]
  for (let num of studentRec){
     if (num.score >= 50){
      least.push(num.name)
     }
  }
  return least.join(", ")
  }
  console.log("Students who scored atleast 50: " + getLeastNum(studentRecords))



// Employee Salary
const employee = [
  {
   name: "Emeka Okoro",
   department: "IT",
   salary: 800
  },
  {
   name: "Obi Emma",
   department: "Finance",
   salary: 1000
  },
  {
   name: "Joy Umeh",
   department: "Human Resource",
   salary: 400
  },
  {
   name: "Thelma Obiagu",
   department: "IT",
   salary: 1200
  }
]

//Employee record details
function getAllRecord(allRecord){
  return allRecord       
}
console.table(getAllRecord(employee))

//Total salary paid
function getTotalSalary(salary){
   let total = 0

   for (const num of salary){
    total = total + num.salary
   }
   return total
}
console.log("Total salary paid: $" + getTotalSalary(employee))

//Employee with highest salary
function getHighestSalary(highest){
  let highsalary = highest[0]
  for (const num of highest){
    if (num.salary > highsalary.salary){
        highsalary = num
    }
  }
  return highsalary
}

console.table(getHighestSalary(employee))

//Employees in IT department
function getItDepartment(itDepartment){
  let check = []
    for(const it of itDepartment){
      if ("IT".includes(it.department)){
            check.push(it.name)
      }
    }
  return check.join(", ")
}
console.log("Employees in IT dept: " + getItDepartment(employee))


//shopping Cart
const cart = [
  {
   productName: "Chanel Bag",
   price: 250,
   quantity: 1
  },
  {
   productName: "Perfume",
   price: 500,
   quantity: 3
  },
  {
   productName: "Donut",
   price: 150,
   quantity: 5
  },
  {
   productName: "Rolex",
   price: 1000,
   quantity: 1
  },
  {
   productName: "Television",
   price: 750,
   quantity: 1
  }  

]

//Total amount to pay
function getTotalAmount(price){
  let count = 0
  for (const total of price){
    count += total.price   
  }
  return count
}
console.log("Total amount to pay: $" + getTotalAmount(cart))

//Display items in cart
function getAllItems(cart){
  let display = []
  for (let num of cart){
  display.push(num.productName)
  }  
  return display
}
console.table(getAllItems(cart))

//get most expensive product
function getExpensiveProduct(cost){
  let check = cost[0]
  for(const num of cost){
    if (num.price > check.price){
    check.price = num.price
    }
  }
  return check.productName
}
console.log("Most expensive product: "+getExpensiveProduct(cart))

//Adding new product to cart
function getNewProduct(cart){
  cart.unshift({productNames: "Air condition",
  price: 450,
  quantity: 1})
      
  return cart
}
console.table(getNewProduct(cart))

//Library Books
const book = [
  {
    title: "Mcbeth",
    author: "John King",
    isAvailable: "Yes"
  },
  {
    title: "Tales of Nania",
    author: "Iheanyi Agoha",
    isAvailable: "Yes"
  },
  {
    title: "Off Road",
    author: "Chioma Agu",
    isAvailable: "No"
  },
  {
    title: "Lost in time",
    author: "Dan Ushman",
    isAvailable: "Yes"
  },
  {
    title: "Lion King",
    author: "Harry Jones",
    isAvailable: "No"
  },
  {
    title: "Lost lands",
    author: "Will smith",
    isAvailable: "Yes"
  },
]

//Display all books
function getAllBooks(allBooks){
  let display = []
  for (const books of allBooks){
    display.unshift(books.title)     
  }
  return display
}
console.table(getAllBooks(book))


//Show available books
function getAvailableBooks(available){
  let display = []
  for (const books of available){
    if (books.isAvailable === "Yes"){
      display.push(books.title)
    } 
  }
  return display
}
console.log("Available Books: " + getAvailableBooks(book))


//search for book by title
function getBookByTitle(getBook, titles){
  for (const book of getBook)
  if (book.title.toLowerCase() === titles.toLowerCase()){
    return book
  } 
  return "Not Available"
}
console.table(getBookByTitle(book, "lion king"))

//Count the available books
function getAvailableBooksnumber(books){
  let count = 0
  for (const num of books){
    if (num.isAvailable === "Yes"){
      count++
    }
  }
  return "Available books: " + count
}
console.log(getAvailableBooksnumber(book))

//Football team Stats
const players = [
  {
    name: "Kelechi Ugwu",
    position: "left wing",
    goals: 5
  },
  {
    name: "Ifeanyi Agu",
    position: "Midfield",
    goals: 3
  },
  {
    name: "Obinna umeh",
    position: "forward Left",
    goals: 4
  },
  {
    name: "Dan smith",
    position: "Center forward",
    goals: 7
  },
  {
    name: "Joel Obi",
    position: "right wing",
    goals: 6
  },
  {
    name: "Olanike oyade",
    position: "left wing",
    goals: 8
  },
]

//display all players
function getAllPlayers(allPlayers){
  let names = []
  for (const player of allPlayers){
    names.unshift(player.name)
  }
  return "Name of all players: "+names.join(", ")
}
console.log(getAllPlayers(players) )
console.log()


//player with the most goals
function getPlayermostgoals(players){
  let highest = players[0]
  for (const num of players){
    if (num.goals > highest.goals){
      highest = num
    }
  }
  return "Name of highest goal scorer: "+highest.name;
}
console.log(getPlayermostgoals(players))
console.log()

//Total goals scored by the team
function getTotalGoals(goals){
  let count = 0
  for (const num of goals){
    count += num.goals
  }
  return "Total goals: "+count
}
console.log(getTotalGoals(players))
console.log()

//players who scored more than 5 goals
function getPlayerWithMostGoals(mostGoals){
  let display = []
  for (const num of mostGoals){
    if (num.goals > 5){
      display.push(num.name)
    }
  }
  return "Players with most goals: " +display.join(", ")
}
console.log(getPlayerWithMostGoals(players))