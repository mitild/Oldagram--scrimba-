const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const likeBtn = document.getElementById("like-btn")
let likesTrack = document.getElementById("likes-track")
const likeBtn2 = document.getElementById("like-btn2")
let likesTrack2 = document.getElementById("likes-track2")
const likeBtn3 = document.getElementById("like-btn3")
let likesTrack3 = document.getElementById("likes-track3")
let newLike = 0
let newLike2 = 0
let newLike3 = 0

likeBtn.addEventListener("click", function() {
    likesTrack.innerHTML = `${newLike++} likes`
})

likeBtn2.addEventListener("click", function() {
    likesTrack2.innerHTML = `${newLike2++} likes`
})

likeBtn3.addEventListener("click", function() {
    likesTrack3.innerHTML = `${newLike3++} likes`
})