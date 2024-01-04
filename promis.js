/*let posts = [{title:'POST1'}];

function createPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({title:'POST2'});
            resolve();
        },1000)
    })
}
function updateUserlastActivityTime(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        const updatedTime = new Date().getHours();
        resolve();
       })
    })
}

Promise.all([createPost,updateUserlastActivityTime]).then((upadatedTime)=>{
    console.log(upadatedTime);
})
*/

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
    setTimeout(()=>{
        posts.push(post);
    },2000)
}
createPost({title:'POST3'});
getPost();
//note : here post3 will be not printted becoz createpost is taking longer than getpost 
//so to resolve this we will use callback