var images, texts, id;

function onLoad(image, text, index){
    images = image;
    texts = text;
    id = index;
    let image_length = image.length;
    let text_length = text.length;
    document.getElementById('image0').style.display = 'inline';
    for (let i = 1; i < image_length; i++){
        document.getElementById('image' + i.toString()).style.display = 'none';
    }
    for(let i = 0; i < text_length; i++){
        if((i + 1)%2 === 0){
            let current = document.getElementById('text' + i.toString());
            if((i+1)%4 === 0){
                current.style.backgroundColor = '#E37A5E';
            }else{
                current.style.backgroundColor = '#333333';
            }
            current.style.padding = '5%';
            current.style.color = 'white';
            if(i === text_length - 1){
                current.style.marginBottom = '5%';
            }

        }
    }
}

function forward(){
    images = document.getElementsByClassName('image-container');
    for(let i = 0; i < images.length; i++){
        if (images[i].style.display === 'inline'){
            images[i].style.display = 'none';
            if(i === images.length - 1){
                images[0].style.display = 'inline';
            }else{
                images[i+1].style.display = 'inline';
            }
            break;
        }
    }
}

function back(){
    images = document.getElementsByClassName('image-container');
    for(let i = 0; i < images.length; i++){
        if (images[i].style.display === 'inline'){
            images[i].style.display = 'none';
            if(i === 0){
                images[images.length - 1].style.display = 'inline';
            }else{
                images[i-1].style.display = 'inline';
            }
            break;
        }
    }
}

function newWorld(){
    location.href = 'new-world?id=' + id.toString();
}

function gridItemClick(index){
  location.href = 'city?id=' + index.toString();
}

function donate(){
    location.href='donate';
}

document.getElementById('forward').addEventListener('click', forward);
document.getElementById('back').addEventListener('click', back);
document.getElementById('button-past').addEventListener('click', newWorld);
document.getElementById('footer-donate').addEventListener('click', donate);