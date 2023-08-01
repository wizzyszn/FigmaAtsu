const  backgroundImages = [
    "../images/background.png",
    "../images/foreground1.png",
    
]


const imageUrls = backgroundImages.map(
    (urls) =>`url('${urls}')`
).join(",")

console.log(imageUrls.toString(2))