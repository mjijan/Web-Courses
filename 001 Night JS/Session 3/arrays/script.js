var students = ["Taha" , "Gaith" , "Ahmad" , "Zaid" , "Elian" , "Rageed" , "Mahmood" , "antoine" , "Ali" , "aghiad"];

for (var i=0 ; i<students.length ; i++  )
    document.getElementById("container").innerHTML += `<div class="student">${students[i]}</div>`;
