const imagePanels = document.querySelectorAll('.split-panels__image')

imagePanels.forEach(imagePanel => {
    let images = imagePanel.querySelectorAll('img')
    let imageCount = images.length;
    // let zIndexCount = imageCount;

    /*** If I want to go backwards on each click
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
    }) ***/


    /***  If I want to go forward in each click -- My version **/
    // let zIndexCount = 0;
    // imageCount = 0;
    // imagePanel.addEventListener('click', () => {
    //     if(imageCount < images.length){
    //         images[imageCount].style.zIndex = zIndexCount;

    //         imageCount++;
    //         zIndexCount++;
    //     } else {
    //         imageCount = 0;
    //         images[imageCount].style.zIndex = zIndexCount;
    //         imageCount++;

    //     }
    // })


    /** Effecient version going forward */
    // let zIndexCount = 0;
    // imageCount = 0;
    // imagePanel.addEventListener('click', () => {
    //     // Increment z-index
    //     zIndexCount++;
        
    //     // Change the z-index of a specific image
    //     images[imageCount].style.zIndex = zIndexCount;

    //     // Increment imageCount to go to the next image
    //     imageCount++;
    //     // Set the imageCount to the remainder of images left
    //     imageCount = imageCount % images.length;
        
    // })

    /** Effecient version going backwards */
    imageCount = images.length;
    let zIndexCount = imageCount;
    images.forEach(image => {
        image.style.zIndex = zIndexCount
    })
    imagePanel.addEventListener('click', () => {
        // Increment z-index
        zIndexCount--;
        
        // Change the z-index of a specific image
        images[imageCount - 1].style.zIndex = zIndexCount;

        // Increment imageCount to go to the next image
        imageCount--;
        // Set the imageCount to the remainder of images left
        // imageCount = imageCount % images.length;
        if(imageCount <= 0 ) {
            console.log("Image count => ", imageCount)
            imageCount = images.length
            zIndexCount = images.length
            images.forEach(image => {
                image.style.zIndex = zIndexCount
            })
        }
    })
})