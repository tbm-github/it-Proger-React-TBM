
export  const fetchTodos = () => {
const result = fetch("http://localhost:3000/api/tasks")
return result.then(res => {if( res.ok) {return res.json()}});
}
