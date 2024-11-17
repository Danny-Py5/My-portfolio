let contentContainer = document.querySelector(".contentContainer");
function showSkills(clicked) {
  if (clicked === "personal-info") {
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
        </article>`;
  } else if (clicked === "skills") {
    contentContainer.innerHTML = `<h4>I'm proficient in:</h4> 
            <ol>
                <li><span>Programming languages:</span><p>Python, Javascript</p></li>
                <li><span>Development languages</span><p>HTML/CSS</p></li>
                <li><span>Development framework:</span> <p>Django</p></li>
                <li><span>Database:</span> <p>MySQL, sqlite3<p></li>
            </ol>`;
  } else if (clicked === "interests") {
    contentContainer.innerHTML = `<h4>In my free time, I enjoy:</h4>
            <ol>
                <li>Learning new programming languages and frameworks</li>
                <li>Building personal projects and contributing to open-source initiatives</li>
                <li>Participating in coding challenges and hackathons</li>                        
                <li>Reading about the latest tech trends and innovations</li>                      
            </ol>`;
  } else if (clicked === "personal-info") {
    contentContainer.innerHTML = `
        <p>Personal INFO:</p>
        `;
  } else {
    contentContainer.innerHTML = ` 
        <ol>
            <li>
                <p class='goal-content'>My goal is to become a skilled developer and contribute to projects that make a positive impact</p>
            </li>
        </ol>`;
  }
}

function sendMail() {
  // Collect input values
  const param = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  // Send email using EmailJS
  emailjs
    .send("service_tmorebs", "template_x6zs8el", param)
    .then((response) => {
      alert("Your email has been sent successfully!");
      clearInputs(param);
    })
    .catch((error) => {
      console.error("Email failed to send:", error);
      alert("Failed to send your email. Please try again.");
      clearInputs(param);
    });
}

function clearInputs(param) {
  for (key in param) {
    document.getElementById(`${key}`).value = '';
  }
}

// Add event listener to the button
document.querySelector(".submit-btn").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  sendMail();
});

const on = document.getElementById("toggle-on");
const off = document.getElementById("toggle-off");

let isOn = false; // Using `let` to allow changing the value

document.querySelectorAll(".switch").forEach((togglebutton) => {
  togglebutton.addEventListener("click", () => {
    // Toggle the value of isOn
    isOn = !isOn;

    if (isOn) {
      on.style.display = "inline"; // Show "on" SVG
      off.style.display = "none"; // Hide "off" SVG
      changeTo(true);
    } else {
      off.style.display = "inline"; // Show "off" SVG
      on.style.display = "none"; // Hide "on" SVG
      changeTo(false);
    }
  });
});

function changeTo(light) {
  const stylesOn = `
  --BGCOLOR: white;
  --header-bg: rgb(0, 19, 20);
  --IMAGE-BOX-SHADOW: var(--header-bg);
   --IMAGE-BOX-SHADOW-HOVER: rgba(0, 19, 20, 0.5);
   --FONT-COLOR: #222;
   --home-img-bg: var(--header-bg);
   --INFO-COLOR: #444;
   --BUTTON-BORDER-COLOR: var(--SPAN-FONT-COLOR);
  --service-card-bg-img: linear-gradient(
    to bottom,
    var(--header-bg),
    rgb(49, 49, 49)
  );
  `;

  const stylesOff = ``;

  if (light) {
    document.documentElement.style.cssText = stylesOn;
  } else {
    document.documentElement.style = stylesOff;
  }
}
