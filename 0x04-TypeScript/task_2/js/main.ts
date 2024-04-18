interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "";
  }
  getCoffeeBreak(): string {
    return "";
  }
  workDirectorTasks() {
    return "Wokr Director";
  }
}
class Teacher implements TeacherInterface {
  workFromHome() {
    return "";
  }
  getCoffeeBreak(): string {
    return "";
  }
  workTeacherTasks() {
    return "Work Teacher";
  }
}
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) return new Teacher();
  return new Director();
}

function isDirector(employee: Director | Teacher) {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) return (employee as Director).workDirectorTasks();
  return (employee as Teacher).workTeacherTasks();
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") return "Teaching Math";
  if (todayClass === "History") return "Teaching History";
}



