
const posts = [{title:'POST1'},{title:'POST2'}]

function getPost(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((item,index)=>{
            output += `${item.title}`+" ";
        })
        console.log(output);
    },1000)
}
// but the continue use of callback will lead to two major 
// problems 1)Callback of hell and 2)inersion of control , so two overcome we will use 
// the Concept of promis . Basically using promis will only attch the function and not 
// give the control of one function to other completely.
//=======Use of Promises=============

function createPost(post){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject("Error:Something went wrong")
            }
        },2000)
    })  
}
createPost({title:'POST3'})
.then(getPost);


