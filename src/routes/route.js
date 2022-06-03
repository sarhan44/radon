const express = require('express');
const lodash = require('lodash');
const router = express.Router();




// =======================[Assignment - Get API ]===========================>>>


// =======[ 1 ]======>>

router.get('/movies', function (req, res) {
    const movie = ['Captain America', 'Iron Man', 'Avengers', 'Spiderman']
   
    res.send(movie)
});

// =======[ 2 ]======>>

// router.get('/movies/:indexNumber', function(req, res){
//     const movie = ['Captain America', 'Iron Man', 'Avengers', 'Spiderman']
//      res.send('Movie name is '+ movie[req.params.indexNumber])
//     console.log("API IS WORKING")
// })  
// =======[ 3 ]======>>

router.get('/movies/:indexNumber', function(req, res){
    const movie = ['Captain America', 'Iron Man', 'Avengers', 'Spiderman']
    
    let index = movie[req.params.indexNumber]
        if(index !== movie.length){
            res.send(index || "Ops 404 Error - Please Enter Valid Number")
        }
        console.log("Response Sent")
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
       console.log("Response Sent")
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
       
       console.log("Response Sent")
})




// 4 :-<<====<<====<<======= Assignment/nodejs-modules =====>>===>>===>>=====>>

router.get('/hello', function (req , res){
    const months = ["January", "Februray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const chunky = lodash.chunk(months , 3)
    res.send(chunky)
    console.log("Response Sent")
})

router.get('/odd', function (req , res){
    const oddNum = [1,3,5,7,9,11,13,15,17,19]
    const taily = lodash.tail(oddNum, 9)
    console.log ("Response Sent")
    res.send(taily)
})

router.get('/number', function (req , res){
    const e = [1,2,3]
    const a =  [3,4,5]
    const b = [4,5,6] 
    const c = [6,7,8] 
    const d = [7,8,9]
    const merge = lodash.union(a,b,c,d,e)
    console.log("Response Sent")
    res.send(merge)
})


router.get('/objectPairs', function (req , res){
    const a =  [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]

    const pairs = lodash.fromPairs(a)
    console.log("Response Sent")

    res.send(pairs)
})





module.exports = router;
// adding this comment for no reason