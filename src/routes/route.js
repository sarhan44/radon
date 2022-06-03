const express = require('express');
const lodash = require('lodash');
const router = express.Router();




// =======================[Assignment - Get API ]===========================>>>


// =======[ 1 ]======>>

router.get('/movies', function (req, res) {
    const movie = ['Captain America', 'Iron Man', 'Avengers', 'Spiderman']
   
    res.send(movie)
    console.log("Response Sent")//message for console

});

// =======[ 2 ]======>>

router.get('/movies/:indexNumber', function(req, res){
    const movie = ['Captain America', 'Iron Man', 'Avengers', 'Spiderman']
     res.send('Movie name is '+ movie[req.params.indexNumber])
    console.log("API IS WORKING")//message for console
})  
// =======[ 3 ]======>>

router.get('/movies/:indexNumber', function(req, res){
    const movie = ['Captain America', 'Iron Man', 'Avengers', 'Spiderman']
    
    let index = movie[req.params.indexNumber]
        if(index !== movie.length){
            res.send(index || "Ops 404 Error - Please Enter Valid Number")
        }
        console.log("Response Sent")//message for console
})

// =======[ 4 ]======>>

router.get('/films', function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       
       res.send(films)
       console.log("Response Sent")//message for console
})



// =======[ 5 ]======>>

router.get('/films/:filmId', function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       let index = films[req.params.filmId - 1]
        if(index !== films.length){
            res.send(index|| "Ops 404 Error - Please Enter Valid ID")
        }
       
       console.log("Response Sent")//message for console
})




// 4 :-<<====<<====<<======= Assignment/nodejs-modules =====>>===>>===>>=====>>

router.get('/hello', function (req , res){
    const months = ["January", "Februray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const chunky = lodash.chunk(months , 3)
    res.send(chunky)
    console.log("Response Sent")//message for console
})

router.get('/odd', function (req , res){
    const oddNum = [1,3,5,7,9,11,13,15,17,19]
    const taily = lodash.tail(oddNum, 9)
    console.log ("Response Sent")//message for console
    res.send(taily)
})

router.get('/number', function (req , res){
    const e = [1,2,3]
    const a = [3,4,5]
    const b = [4,5,6] 
    const c = [6,7,8] 
    const d = [7,8,9]
    const merge = lodash.union(a,b,c,d,e)
    console.log("Response Sent")//message for console
    res.send(merge)
})


router.get('/objectPairs', function (req , res){
    const a =  [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]

    const pairs = lodash.fromPairs(a)
    console.log("Response Sent")//message for console

    res.send(pairs)
})

// =======>====>===[ Missing Number - Pritesh Sir ]====>====>

router.get('/sol1', function(req,res){
  
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let missingNumber
    ///LOGIC WILL GO HERE 
        for (i=0;i<arr.length-1;i++){
    if( arr[i]+1 !=arr[i+1]){
    missingNumber=arr[i]+1
        res.send(  { data: "the missing number is"+ missingNumber  }  );
    }
    }
})

router.get("/sol2", function (req, res) {
 //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr1= [3, 4, 5, 7, 8, 9]
    let missingNumber
    for (i=0;i<arr1.length-1;i++){
        if( arr1[i]+1 !=arr1[i+1]){
    missingNumber = arr1[i]+1
        
    res.send(  { data:  "the missing no is" + missingNumber  }  );
        }
    }
 
});



module.exports = router;
// adding this comment for no reason