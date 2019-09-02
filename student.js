


class Student {
   constructor(name) {
       this.name = name;
       this.schedule = {};
       this.course = {};
   }

   setName(name) {
       this.name = name;
   }

   
   addCourse(course,year){
       this.course[this.course] = year;
   }

   addSchedule(day, time) {
       this.schedule[day] = time;
   }

}

module.exports = Student;