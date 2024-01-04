// function x(y){
//     console.log("x")
//     y();
// }

// function y(){
//     console.log('y');
// }
// x(y);
/*
const posts = [{title:'POST1'}];
function create2ndPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({title:'POST2'})
            resolve();
        },2000)
    })
}
function deletePost(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    if(posts.length>0){
        const p = posts.pop();
        resolve(p);
    }else{
        reject("Erroe")
    }
},2000)
    })
}
create2ndPost();
for(let i =0;i<posts.length;i++){
    console.log(posts[i].title)
}
//.then(deletePost)

function updateLastActivityTime(){
    return new Promise((resolve,reject)=>{
        
    })
}*/
 let time = new Date().getHours();
 console.log(time);