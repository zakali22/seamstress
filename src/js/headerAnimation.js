const headers = document.querySelectorAll('.header div')

const duplicateHeaderText = function(){
    headers.forEach(headerDiv => {
        let textElement = headerDiv.querySelector('p')
        for(let i = 0; i <= 100; i++){
            let pTag = document.createElement('P')
            pTag.append(textElement.innerHTML)
            headerDiv.append(pTag)
        }
    })
}

// Create gsap timeline
const fadeInAnimation = new TimelineMax({
    onComplete: function(){
        /** CSS Marquee if needed */
        // headers.forEach(header => { 
        //     header.classList.add('marqueeAnim')
        // })
        addMarqueeMovement(); // Once the fadeInAnimation timeline is finished run the marquee
    }
});
fadeInAnimation
    .set(headers, {opacity: 0})
    .to(headers, {opacity: 1, stagger: 0.5, delay: 1, duration: 2});

/** JS Marquee */
const addMarqueeMovement = function(){
    const headerTopTl = new TimelineMax({repeat: -1});
    const headerBottomTl = new TimelineMax({repeat: -1});

    headerTopTl
        .to(headers[0], {x: (headers[0].clientWidth * -1), duration: 400, ease: 'linear'});

    headerBottomTl
        .to(headers[1], {x: (headers[0].clientWidth * -1), duration: 300, ease: 'linear'})
}


// On load duplicate the text on the headers
window.addEventListener('DOMContentLoaded', () => {
    duplicateHeaderText();
})
