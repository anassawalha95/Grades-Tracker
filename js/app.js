'use strict'

var d = document;

var submissionListener = d.getElementById("submit")
submissionListener.addEventListener('click', tableRenderer)

var tableContainer = d.getElementById("grades-container");

var students = []

function saveLocalStorage() {
    var storge = window.localStorage;

    if (storge.getItem('students') != null) {
        storge.setItem('students', JSON.stringify(students))
    } else {
        storge.removeItem('students')
        storge.setItem('students', JSON.stringify(students))

    }




}


student.prototype.grade = function () {
    var randomNumber = Math.floor(Math.random() * 100 + 1)

    return randomNumber
}


var id = 0;
function student(name, course) {
    this.id = id
    this.name = name;
    this.course = course;
    this.grade = student.prototype.grade();
    students.push(this)
    id++;


    saveLocalStorage()
}




tableRenderer()
function tableRenderer(event) {

    if (event != null)
        event.preventDefault();
    tableContainer.innerHTML = ""
    var table = d.createElement("table")
    var thead = d.createElement("tr")


    var theadTd1 = d.createElement("th")
    var theadTd2 = d.createElement("th")
    var theadTd3 = d.createElement("th")

    var studentName = d.getElementById("studentName")

    var studentCourse = d.getElementById("studentCourse")
    if (event != null)
        new student(studentName.value, studentCourse.value)

    theadTd1.textContent = 'Student Name'
    theadTd2.textContent = 'Student Grade'
    theadTd3.textContent = 'Course'

    thead.appendChild(theadTd1)
    thead.appendChild(theadTd2)
    thead.appendChild(theadTd3)

    table.appendChild(thead)


    dataRenderer(table);


    tableContainer.appendChild(table)
}



function dataRenderer(table) {
    var data = JSON.parse(localStorage.getItem('students'))

    data.map((value, key) => {
        var tr = d.createElement("tr")
        var td1 = d.createElement("td")
        var td2 = d.createElement("td")
        var td3 = d.createElement("td")
        td1.textContent = value.name
        td2.textContent = value.course
        td3.textContent = value.grade
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        table.appendChild(tr)
    })


}