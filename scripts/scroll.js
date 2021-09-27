const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false
});

sr.reveal(`#hero-tag, #hero-sub-tag`,{delay: 200});
sr.reveal(`#aboutme`,{origin: 'top', delay: 200});
sr.reveal(`.pic-chase`,{origin: 'right', delay: 200});
sr.reveal(`#aboutme-para`,{origin: 'bottom', delay: 200});
sr.reveal(`.skill-name`,{origin: 'bottom', delay: 400});
sr.reveal(`.icon-skill`,{origin: 'top', delay: 400});
sr.reveal(`.skill-name-p`,{origin: 'left', delay: 500});
sr.reveal(`.list-title`,{origin: 'right', delay: 500});
sr.reveal(`.skill-details`,{origin: 'bottom', delay: 500});
sr.reveal(`.work-t`,{origin: 'top', delay: 200});
sr.reveal(`.work-p`,{origin: 'bottom', delay: 200});
sr.reveal(`.is-3by2`,{origin: 'bottom', delay: 200});
