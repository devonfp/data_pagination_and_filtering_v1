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
   const startIndex = (page * 9) -9;
   const endIndex = (page * 9) -1;
   
   const studentList = document.querySelector(".student-list"); 
   studentList.innerHTML = '';
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
     } //console.log(list[i])
    }
}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
 
   const numOfPages = Math.ceil(list.length/9);
   const linkList =  document.querySelector('.link-list');
   linkList.innerHTML = '';

   for (let i = 1; i <= numOfPages; i++) {
     const button = `<li>
     <button type="button">${numOfPages}</button>
   </li>`;
   linkList.insertAdjacentHTML('beforeend', button);
   }

   const firstPagBtn = document.querySelector('button'); 
   firstPagBtn.className = 'active';

   linkList.addEventListener('click', (e) => {
      
      const eClicked = e.target;
      
      if (eClicked.tagName === 'BUTTON') {
      firstPagBtn.className = '';
      eClicked.className = 'active';
      showPage(list, eClicked.textContent);
   }

 console.log(list);
})}

// Call functions
showPage(data, 1);
addPagination(data);
