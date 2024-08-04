
var students = ["Israa", "Khodor", "Pierre", "Abd Allah", "Mohammad", "Mozaher", "Zoher"];
var averages = [55, 99, 89, 68, 75, 78, 100];
var max_avg = 0;
var max_stu;

for (var i = 0; i < students.length; i++)
    console.log(students[i] + " : " + averages[i]);

function max() {
    for (var i = 0; i < students.length; i++) {
        if (averages[i] > max_avg) {
            max_avg = averages[i];
            max_stu = students[i];
        }
    }
    document.getElementById("result2").innerHTML = max_stu + " : " + max_avg;
}

function print_all() {
    document.getElementById("result1").innerHTML = "";
    for (var i = 0; i < students.length; i++) {
        document.getElementById("result1").innerHTML += students[i] + ":" + averages[i] + ", ";
    }
}

function add_stu() {
    var stu_name = document.getElementById("stu_name").value;
    var stu_avg = document.getElementById("stu_avg").value;
    students.push(stu_name);
    averages.push(stu_avg);

    document.getElementById("stu_name").value = "";
    document.getElementById("stu_avg").value = "";

    print_all();
}