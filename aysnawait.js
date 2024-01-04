//async await is basically to handle responses

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



async function start(){
    await createPost({title:'POST3'});
    getPost();
}
start();



//aysnawait.js