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


function showPage(list, page) {
   const startIndex = [0];
   const endIndex = [41];
   
   const studentList = document.querySelector(".class-list"); 
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const studentItem = `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
           <h3>${[name].first.last}</h3>
           <span class="email">${[email]}</span>
         </div>
         <div class="joined-details">
           <span class="date"> Joined ${[registered].date.age}</span>
         </div>
       </li>`;
     } 
    }
    studentList.insertAdjacentHTML('beforeend', html);
}
showPage(data, 1);



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
