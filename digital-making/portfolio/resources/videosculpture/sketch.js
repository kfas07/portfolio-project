 // this is the final project I did for codeCademys p5.js course 

// image paths and their associated variables
let cloudPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/cloud.mp4';
let starsPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/stars.mp4';
let staticPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/static.mp4';
let humanPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/human.mp4';

// variables defining videos
let cloudVideo, starsVideo, staticVideo, humanVideo;
let videos;
let outsideVideos;

// variable creating the tv screen grid
let margin = 20;
let numOfScreensTall = 4;
let numOfScreensWide = 4;

let counter = 1;

function setup() {
  createCanvas(600, 500);
  // loading videos to the associated video variable
  cloudVideo = createVideo(cloudPath);
  starsVideo = createVideo(starsPath);
  staticVideo = createVideo(staticPath);
  humanVideo = createVideo(humanPath);
  
  // videos array
  videos = [cloudVideo, starsVideo, staticVideo, humanVideo];
  
  // iterate videos to loop, mute, and hide
  for (let i = 0; i < videos.length; i++) {
    let video = videos[i];
    video.volume(0);
    video.loop();
    video.hide();
  }
  // outsideVideos array
  outsideVideos = [cloudVideo, starsVideo, staticVideo];
}

function draw() {
  background(0);
  
  // width and height for each tv screen in the grid
  let w = (width - margin * (numOfScreensWide + 1)) / numOfScreensWide;
  let h = (height - margin * (numOfScreensWide + 1)) / numOfScreensWide;
  
  // Create a 4x4 grid of screens with a margin of 20px
  for (let i = 0; i < numOfScreensWide; i++) { 
    for (let j = 0; j < numOfScreensTall; j++) {
    
      // current x, y position where this tv screen should be drawn
      let x = margin + i * (w + margin);
      let y = margin + j * (h + margin);
      
      // white rectangle 
      fill(255);
      rect(x, y, w, h);
      
      // filling tv screens with a video, based on its (i,j) position
    if (i === 1 && j === 1) {
      image(humanVideo, x, y, w, h, 0, 0, humanVideo.width / 2, humanVideo.height / 2);
    } else if (i === 1 && j === 2) {
      image(humanVideo, x, y, w, h, 0, humanVideo.height / 2, humanVideo.width / 2, humanVideo.height / 2);
    } else if (i === 2 && j ===1) {
      image(humanVideo, x, y, w, h, humanVideo.width / 2, 0, humanVideo.width / 2, humanVideo.height / 2);
    } else if (i === 2 && j === 2) {
      image(humanVideo, x, y, w, h, humanVideo.width / 2, humanVideo.height / 2, humanVideo.width / 2, humanVideo.height / 2);
    } else {
      // we are on an outside screen
      let selectedIndex = (i + j * counter) % outsideVideos.length;
      let selectedVideo = outsideVideos [selectedIndex];
      image(selectedVideo, x, y, w, h);
      }
    }
  }
}

// videos on the outside change when mouse is clicked
function mouseClicked() {
  counter++;
}