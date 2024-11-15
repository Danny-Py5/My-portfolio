let contentContainer = document.querySelector('.contentContainer');
function showSkills(clicked){
    if (clicked === 'personal-info') {       
        contentContainer.innerHTML = `
        <article class='personal-info-container'>
            <section class="info">
                <section>
                    <p class="text-head">Name</p> 
                    <p>Daniel Olatunde</p>
                </section>
                <section>
                    <p class="text-head">Location</p>  
                    <p>Nigeria Ibadan</p>
                </section>
            </section>

            <section class="info">
                <section>
                    <p class="text-head">Phone</p> 
                    <p>+2348165521344</p>
                </section>
                <section>
                    <p class="text-head">Age</p>
                    <p>20</p>
                </section>
            </section>

            <section class="info">
                <section class="text-head">
                    <p class="text-head">Email</p>
                    <p>olatundedaniel943@gmail.com</p>
                </section>
            </section>
        </article>`
    } else if (clicked === 'skills'){
        contentContainer.innerHTML = `<h4>I'm proficient in:</h4> 
            <ol>
                <li><span>Programming languages:</span><p>Python, Javascript</p></li>
                <li><span>Development languages</span><p>HTML/CSS</p></li>
                <li><span>Development framework:</span> <p>Django</p></li>
                <li><span>Database:</span> <p>MySQL, sqlight3<p></li>
            </ol>`
    } else if (clicked === 'interests') {
        contentContainer.innerHTML = `<h4>In my free time, I enjoy:</h4>
            <ol>
                <li>Learning new programming languages and frameworks</li>
                <li>Building personal projects and contributing to open-source initiatives</li>
                <li>Participating in coding challenges and hackathons</li>                        
                <li>Reading about the latest tech trends and innovations</li>                      
            </ol>`
    } else if(clicked === 'personal-info') {
        contentContainer.innerHTML = `
        <p>Personal INFO:</p>
        `
    } else {
        contentContainer.innerHTML = ` 
        <ol>
            <li>
                <p class='goal-content'>My goal is to become a skilled developer and contribute to projects that make a positive impact</p>
            </li>
        </ol>`
    }
};

function sendMail() {
    const param = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        name: document.getElementById('phone').value,
        name: document.getElementById('subject').value,
        name: document.getElementById('message').value,
    }

    emailjs.send('service_tmorebs', 'template_x6zs8el', param).then(alert('Your email has been sent'));
}

document.querySelector('.submit-btn').addEventListener('click', sendMail)








