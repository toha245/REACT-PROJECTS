// export default function ToDo({task, isDone}){
//     return(
//         <li style={{listStyle: 'none'}}>Task : {task}</li>
//     )
// }

// export default function ToDo ({task, isDone}){
//     if(isDone){
//         return <li>Done : {task}</li>
//     }
//     else{
//         return <li>Pending : {task}</li>
//     }
// }

// export default function ToDo ({task, isDone, time=0}){
//     if(isDone){
//         return <li>Done : {task} Duration : {time}</li>
//     }
//     else{
//         return <li>To be done : {task}</li>
//     }
// }


// practice
// export default function Data ({name, birth, date}){
//     return(
//         <div style={{listStyle: "none", margin: "10px", border: "2px solid green", padding: "10px", borderRadius: "10px"}}>
//             <li>Name: {name}</li>
//             <li>Birth: {birth}</li>
//             <li>date: {date}</li>
//         </div>
//     )
// }


// conditional rendering: 3 ternary
// condition ? true : false

// export default function ToDo({task, isDone, time = 0}){
//     return isDone ? <li>Done: {task} time: {time}</li> : <li>Not Done : {task}</li>
// }

// conditional rendering : 4 &&
// export default function ToDo({task, isDone, time = 0}){
//     return isDone && <li>Done Tasks: {task} time: {time}</li>
// }

// conditional rendering : 5 ||
// export default function ToDo({task, isDone, time = 0}){
//     return isDone || <li> Not Done Tasks: {task} time: {time}</li>
// }


// conditional rendering: 6 use variable 
export default function ToDo ({task, isDone, time}){
    // const displayTime = time ? time : 100;
    let listItem;
    if(isDone){
        listItem = <li>Done : {task} time: {time ? 'I am done' : 'not done yet'}</li>;
    }
    else{
        listItem = <li>Pending : {task}</li>
    }
    return listItem;
}