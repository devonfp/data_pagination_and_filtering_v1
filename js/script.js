/*
Treehouse Techdegree: Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab
   Reach out in your Slack community if you have questions
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

// The list parameter will represent the array of student data. (42 students)
// page parameter represents the page number that we want to display. 

function showPage(list, page) {
   
  /*calculates the index for the first and last student to display on the page */
  const startIndex = (page * 9) -9;
   const endIndex = (page * 9) -1; 

   
   const studentList = document.querySelector(".student-list"); 
   studentList.innerHTML = ''; 
   // ^removes any existing students that might have been displayed on previous pages.
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i <= endIndex) {
         const studentItem = `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date"> Joined ${list[i].registered.date}</span>
         </div>
       </li>`;
       studentList.insertAdjacentHTML('beforeend', studentItem); 
       //^ this inserts studentItem into the HTML directlty after studentList class.
     } console.log(list[i])
       
    }
}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
 
   const numOfPages = Math.ceil(list.length/9); // = 4.6 rounded to 5. 5 pages.
   const linkList =  document.querySelector('.link-list');
   linkList.innerHTML = '';

   for (let i = 1; i <= numOfPages; i++) {
     const button = `<li>
     <button type="button">${[i]}</button>
   </li>`;
   linkList.insertAdjacentHTML('beforeend', button);
   }

   const firstPagBtn = document.querySelector('button'); 
   firstPagBtn.className = 'active';

   linkList.addEventListener('click', (e) => {
      
      const eClicked = e.target;
      
      if (eClicked.tagName === 'BUTTON') {
      firstPagBtn.className = '';
      showPage(list, eClicked.textContent);
   }

 console.log(list);
})}

// Call functions
showPage(data, 1);
addPagination(data);


