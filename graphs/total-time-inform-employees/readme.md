- Company has n employees with unique ID's from 0 to n-1. The head of company has the ID of headID can be any of those ids. if we have 8 employees: 0,1,2,3,4,5,6,7 their id's.

  headId=4 can be anythign 0-7

- You will receive a managers array where managers[i] is the ID of the manager for employee i. Each employee has one direct manager. The company head has no manager (managers[headID]=-1). It is guaranteed the subordination relationship will have a tree structure. All trees are graphs and trees are directed in once direction

The head of company wants to inform all employees of news. He will inform his direct subordinates who will inform thier direct subordinates and so on until everyone knows the news.

You will receive an inform time array where infromTime[i] is the time it takes for employee i to inform all their direct subordinates. Return the total number of minutes it takes to inform all employees of the news.

// employers=[0,1,2,3,4,5,6,7]
// headID=4

- managers=[2,2,4,6,-1,4,4,5] - managerID 2 is the manager of employee 0,1 - managerID 4 is the manager of employee 2,5,6 - managerID 6 is the manager of employee 3 - managerID -1 is the head of the company. its emoployee id is 4 and it is the root of the tree - managerID 5 is the manager of employee 7
  // managers -1 is the head of the company. its id is 4. it is the root.

//Employees can have only one manageer
// Every employee has a manager except the head of the company. That makes graph connected
