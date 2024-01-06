/*console.log('person 1 : shows the tickets');
console.log('person 2 : shows the tickets');

const promisWifebringingThetickets = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('tickets');
    },3000)
})

 const getPopcorn = promisWifebringingThetickets
.then((ticket)=>{
    console.log('Wife : Here is the ticket');
    console.log('Husband : we shd go in');
    console.log('Wife : No i am hungry');
    return new Promise((resolve,reject)=>{resolve(`popcorn , ${ticket}`)})
});

 const getButter = getPopcorn.then((ticketandpopcorn)=>{
    console.log('Husband :I got some popcorn');
    console.log('Husband : we shd go in now');
    console.log('Wife : No I need some butter on my popcorn');
    return new Promise((resolve,reject)=>{resolve(`${ticketandpopcorn}  and butter`)})
})

getButter.then((ticket)=>{
    console.log(ticket);
})

console.log('person 4 : shows the tickets');
console.log('person 5 : shows the tickets');*/


/////==============The same above code can be written as ===================

console.log('Person1: show the tickets');
console.log('Person2: show the tickets');

async function preMovie(){
   /* const promisWifebringingThetickets = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`tickets`);
        },2000)
    })
     const gotTickets = await promisWifebringingThetickets;
     console.log(`Husband: We have ${gotTickets} now we shd go in`);
     console.log('Wife : No I am Hungry');
     const getPopcorn = new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve(`popcorn`);
        },2000)
     })

     const gotPopcorn = await getPopcorn;
     console.log(`HUsband: here is your ${gotPopcorn}`);
     console.log('Now we shd go in');
     console.log('Wife: No i need some butter on popcorns');
    
     const getButter = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Butter');
        })
     })
    const gotButter = await getButter;
     console.log(`Wife: Lets enjoy movie with  ${gotButter}`)*/

     const promisWifebringingThetickets = new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve('tickets');
        })
     },2000);

     const getPopcorn = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve('popcorn')},2000);
    })

    
    const getButter = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve('Butter')},2000);
    })

    const tickets = await promisWifebringingThetickets;

    console.log(`Wife: I got the ${tickets}`);
    console.log('Husband : we shd go in');
    console.log('Wife : No i am hungry');

   
    
    const popcorn = await getPopcorn;
    console.log(`Husband: I got the ${popcorn}`);
    console.log('Husband : Now we shd go in');
    console.log('Wife: No i need some butter on popcorns');

     const butter  = await getButter;
     console.log(`Husband : I got the ${butter}`);
     console.log('Anything else darling');
     console.log('Wife: No we are gettig late');
     console.log(`Husband: okay lets enjoy movie with ${popcorn} and ${butter}`)
     return tickets;
}
preMovie().then((tic)=>console.log(`Person 3: Shows the ${tic}`));
console.log('Person 4: Shows the tickets');
console.log('Person 5: shows the tickets');