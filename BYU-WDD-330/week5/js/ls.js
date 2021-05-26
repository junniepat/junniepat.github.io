
    export function getLS(id) {
        let toDoList = JSON.parse(localStorage.getItem(id) || "[]");
        return toDoList
    }

  export function saveLS(id, data) {
    data = JSON.stringify(data);

     localStorage.setItem(id, data)
  }

export function cleanLS() {
    localStorage.clear();
}
