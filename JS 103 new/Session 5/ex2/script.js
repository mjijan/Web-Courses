var students = ["Mohammad" , "Hamzah" , "Ahmad" , "Obay","Diaa"];
var averages = [88,33,91,100,12];
function print_students()
{
    document.getElementById("container").innerHTML = "";
    for (var i = 0 ; i<students.length ; i++)
    {
        var fail_result = "succeeded";
        if (averages[i] < 50)
            fail_result = "failed";

            var result = "<div class='card'>" + students[i] ;
            result += "<div class='"+fail_result+"'>" + averages[i] + "</div></div>";
            document.getElementById("container").innerHTML += result;
    }
}

