document.getElementById('dropMenu').addEventListener('change', gallery);

function gallery(){
    let option= document.getElementById('dropMenu').value;
    switch(option){
        case "kids":
            document.querySelector('.kidsGallery').style.display="block"
            document.querySelector('.allGallery').style.display="none"
            document.querySelector('.skinCareGallery').style.display="none"
            document.querySelector('.videoGallery').style.display="none"
            document.querySelector('.modelGallery').style.display="none"
            break;
        case "all":
            document.querySelector('.kidsGallery').style.display="none"
            document.querySelector('.allGallery').style.display="block"
            document.querySelector('.skinCareGallery').style.display="none"
            document.querySelector('.videoGallery').style.display="none"
            document.querySelector('.modelGallery').style.display="none"
            break;
        case "skinCare":
            document.querySelector('.kidsGallery').style.display="none"
            document.querySelector('.allGallery').style.display="none"
            document.querySelector('.skinCareGallery').style.display="block"
            document.querySelector('.videoGallery').style.display="none"
            document.querySelector('.modelGallery').style.display="none"  
            break;
        case "videos":
            document.querySelector('.kidsGallery').style.display="none"
            document.querySelector('.allGallery').style.display="none"
            document.querySelector('.skinCareGallery').style.display="none"
            document.querySelector('.videoGallery').style.display="block"
            document.querySelector('.modelGallery').style.display="none" 
            break;
        case "3dModel":
            document.querySelector('.kidsGallery').style.display="none"
            document.querySelector('.allGallery').style.display="none"
            document.querySelector('.skinCareGallery').style.display="none"
            document.querySelector('.videoGallery').style.display="none"
            document.querySelector('.modelGallery').style.display="block"
            break;
        default:
            document.querySelector('.kidsGallery').style.display="none"
            document.querySelector('.allGallery').style.display="none"
            document.querySelector('.skinCareGallery').style.display="none"
            document.querySelector('.videoGallery').style.display="none"
            document.querySelector('.modelGallery').style.display="none"
    }
}

function playVideo(div, video_id) {
  let video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video + '&autoplay=1';
  document.getElementById(div).style.display = 'block';
}

function hideVideo(div, video_id) {
  let video = document.getElementById(video_id).src;
  let cleaned = video.replace('&autoplay=1', '');
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = 'none';
}

