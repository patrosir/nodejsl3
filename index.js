const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      var i;
      var overdue_lst = [];
      for (i in all) {
        if (all[i].dueDate < today) {
          overdue_lst.push(all[i]);
        }
      }
      return overdue_lst;
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      var i;
      var Todays_due_lst = [];
      for (i in all) {
        if (all[i].dueDate === today) {
            Todays_due_lst.push(all[i]);
        }
      }
      return Todays_due_lst;
    }
  
    const dueLater = () => {
      var i;
      var Later_due_lst = [];
      for (i in all) {
        if (all[i].dueDate > today) {
            Later_due_lst.push(all[i]);
        }
      }
      return Later_due_lst;
    }
  
    const toDisplayableList = (list) => {
     
      var k;
      var show_data = []
      for (k=0;k<list.length;k++) {
        if (list[k].completed === false) {
          //`[ ] ${i.title} ${i.dueDate}`
          if (list[k].dueDate===today) {
            show_data.push(`[ ] ${list[k].title}`)
          }
          else {
            show_data.push(`[ ] ${list[k].title} ${list[k].dueDate}`)
          }
        }
        else {
          // `[x] ${i.title} ${i.dueDate}`
          if (list[k].dueDate===today) {
            show_data.push(`[x] ${list[k].title}`)
          }
          else {
            show_data.push(`[x] ${list[k].title} ${list[k].dueDate}`)
          }          
        }
      }
      
      return show_data.join("\n");
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")