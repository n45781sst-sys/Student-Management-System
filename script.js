class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => {
            return sum + grade;
        }, 0);

        return total / this.grades.length;
    }
    getGrade(average) {

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }
    getFinalResult() {
        let average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}
let studentsList = [

    new Student(101, "Ahmed", [90, 85, 95], 95),

    new Student(102, "menna", [45, 48, 42], 80),

    new Student(103, "Ali", [70, 75, 80], 90),

    new Student(104, "nada", [40, 45, 48], 85)

];
function runSystem() {

    console.clear();

    console.log("=================================");
    console.log(" STUDENT MANAGEMENT SYSTEM ");
    console.log("=================================");

    console.log("----- ALL STUDENTS REPORT -----");

    studentsList.forEach(student => {

        let average = student.calculateAverage();

        console.log({
            Name: student.name,
            Average: average.toFixed(2),
            Grade: student.getGrade(average),
            Result: student.getFinalResult()
        });

    });

    let strugglingStudents = studentsList.filter(student => {

        let average = student.calculateAverage();

        return average >= 40 && average <= 49;

    });

    let graceStudents = strugglingStudents.map(student => {

        let oldAverage = student.calculateAverage();

        let newAverage = oldAverage + 5;

        return {
            id: student.id,
            name: student.name,
            oldAverage: oldAverage,
            newAverage: newAverage,
            grade: student.getGrade(newAverage)
        };

    });

    let totalNewAverages = graceStudents.reduce((sum, student) => {

        return sum + student.newAverage;

    }, 0);

    let graceAverage = graceStudents.length > 0
        ? totalNewAverages / graceStudents.length
        : 0;

    console.log("---------------------------------");
    console.log(" STUDENTS WHO RECEIVED GRACE MARKS ");
    console.log("---------------------------------");

    console.table(graceStudents);

    console.log("---------------------------------");

    if (graceStudents.length > 0) {
        console.log(
            "Average After Grace Marks:",
            graceAverage.toFixed(2)
        );
    } else {
        console.log("No struggling students found.");
    }

    console.log("=================================");
    console.log(" SYSTEM COMPLETED SUCCESSFULLY ");
    console.log("=================================");

}