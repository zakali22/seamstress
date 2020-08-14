const imagePanels = document.querySelectorAll('.split-panels__image')

imagePanels.forEach(imagePanel => {
    let images = imagePanel.querySelectorAll('img')
    let imageCount = images.length;
    // let zIndexCount = imageCount;
    images.forEach(image => {
        image.style.zIndex = imageCount
    })
    imagePanel.addEventListener('click', () => {
        if(imageCount > 0){
            images[imageCount - 1].style.zIndex = 0;
            imageCount--;
        } else {
            imageCount = images.length;
            images.forEach(image => {
                image.style.zIndex = imageCount
            })
            images[imageCount - 1].style.zIndex = 0;
            imageCount--;
        }
    })
})