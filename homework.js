const student = {
    hirwa: {
        fullname: "Hirwa Jean Eric",
        courses: [
            english = {
                points: 75,
                teacher: "John Doe"
        },
            maths = {
                points: 80,
                teacher: "Jane Doe"
        }]
    },
    sam: {
        fullname: "Izabayo Samuel",
        courses: [
            english = {
                points: 65,
                teacher: "John Doe"
        },
            maths = {
                points: 87,
                teacher: "Jane Doe"
        }]
    },
    minerve: {
        fullname: "Mark Minerve",
        courses: [
            english = {
                points: 43,
                teacher: "John Doe"
        },
            maths = {
                points: 50,
            teacher: "Jane Doe"
        }]
    }
};

const subjects = {
    english: {
        passrate: 65
    },
    maths: {
        passrate: 55
    }
};

let StudentDetails = (studentName) => { 
    if (student[studentName] == undefined) {
         return 'student not found'   
    } else {
        return student[studentName]
    }
}

let subjectPassrate = (subjectName) =>{
    if (subjects[subjectName] == undefined) {
        return 'subject not found'
    } else {
        return subjects[subjectName]
    }
}

let checkPassed = (studentName, subjectName) => {
    let thestudent = StudentDetails(studentName);
    let thecourse = subjectPassrate(subjectName);
    let {fullname, courses} = thestudent;
    let result;

    if (subjectName == "english") {
        result = (thestudent.courses[0].points >=  thecourse.passrate) ? `${fullname} has Passed ${subjectName}` : `${fullname} has Failed`;
    } else {   
        result = (thestudent.courses[1].points >=  thecourse.passrate) ? `${fullname} has Passed ${subjectName}` : `${fullname} has Failed`;
    }
    console.log(result);
}
console.log("\n");
checkPassed("sam","maths");
x