
    ext = {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#707070"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#a4a3a3",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }




    particlesJS('particles', ext, function() {
      console.log('callback - particles.js config loaded');
    });

    function navbar_font() {
      if (!$('#navbarTogglerDemo02').is(":hidden")) {
        $('.nav-link').removeClass('nav-link-mobile')
        $('.navbar-brand').removeClass('navbar-brand-mobile')
      } else {
        $('.nav-link').addClass('nav-link-mobile')
        $('.navbar-brand').addClass('navbar-brand-mobile')
      }
    }


    function aboutme() {
      $('#name-row').removeClass('name-row-scroll');
      document.getElementById('name-row').innerHTML = "     <div class='col'></div>    <div class='col-10 col-md-10 col-sm-8 col-lg-4' id='about-sum'>      <p>        <h2 id='about-title-h2'>Hi, I'm Chaitenya. </h2>I am a sophomore pursuing Computer Science at University of California, Davis. I'm currently a full time student, also working on entreprenurial ideas and my book Data Structures in Modern Languages. Apart from this, I have interned for various companies in the past working in the fields of cyber security, networking and engineering.      </p>    </div>    <div class='col'></div>     "

    }

    function profile() {
      $('#name-row').removeClass('name-row-scroll');
      document.getElementById('name-row').innerHTML = "     <div class='col'></div>        <div class='col-lg-3 col-md-4 col-sm-6'>            <div class='container' id='name-box'>        <img src='public/img/Avatar.jpg' id='avatar' class='mx-auto d-block'>        <h2 id='name'>Chaitenya Gupta</h2>        <h6 id='name-des'>CS Major @ UC Davis 2022, Published Researcher and Co-Author, DSIML</h6>                <h2 class='row' id='icon-row'>          <div class='col'></div>          <div class='col-3'>            <a class='fa fa-linkedin' aria-hidden='true' href='https://www.linkedin.com/in/chaitenyagupta/'></a>          </div>          <div class='col-3'>            <a class='fa fa-github' aria-hidden='true' href='https://github.com/Chaitenyag'></a>          </div>                    <div class='col'></div>        </h2>      </div>    </div>    <div class='col'></div>     "
    }

    function cv() {
      $('#name-row').addClass('name-row-scroll');
      document.getElementById('name-row').innerHTML = `
    <div class='col'></div>
    <div class='col-lg-8 col-sm-10 col-md-10 col-12' id='resume'>
      <h2 id='cv-title'><b> Chaitenya Gupta </b></h2>
      <h6 id='cv-email'> <i> gupta [at] ucdavis [dot] edu </i></h6>

      <hr>

      <div class="row" style='text-align:left'>
        <div class="col-12 col-md-12 col-sm-12 col-lg-6">

    <h4 id='cv-subtitle'><b>Work Experience </b></h4>
    <ul>

    <li>
      <h5 id='cv-h5'><b>IT Intern @ Al Habtoor Group (2017 - 2017)</b></h5>
      <p id='cv-p'>Worked in cyber security and assisted customers with troubleshooting computer issues</p>
    </li>

    <li>
      <h5 id='cv-h5'><b>IT Intern @ Mahindra & Mahindra (2016 - 2016)</b></h5>
      <p id='cv-p'> Offered relevant information on the products and services of the company, and communicated with the IT team to discuss process and performance</p>
    </li>

    <li>
      <h5 id='cv-h5'><b>Engineering Intern @ Movenpick Hotel & Apartments (2016 - 2016)</b></h5>
      <p id='cv-p'>Analyzed the Audio Video (AV) connections and departmental documents</p>
    </li>


    </ul>

    <hr>


    <h4 id='cv-subtitle'><b>Research Experience </b></h4>
    <ul>

    <li>
      <h5 id='cv-h5'><b>Project Bitrac (2017 - 2017)</b></h5>
      <p id='cv-p'>Serves as an intermediate between a paralytic patient and his surroundings.</p>
    </li>


    </ul>

    <hr>


    <h4 id='cv-subtitle'><b>Project Experience </b></h4>
    <ul>

    <li>
      <h5 id='cv-h5'><b>Project Gesture (2017 - 2017)</b></h5>
      <p id='cv-p'>The Project uses finger gestures and real-time object detection to allow the user to interact with his surroundings. http://bit.ly/pgcg - Project Video</p>
    </li>

    <li>
      <h5 id='cv-h5'><b>Project Seizure (2018 - 2019)</b></h5>
      <p id='cv-p'>It is an economic approach towards notifying the occurrence of seizures in a patient. Team leader (Made in a group of three). Used python for the back-end and also used Twilio's API. For the front-end we used PHP, HTML, CSS and Google Maps API</p>
    </li>

    <li>
      <h5 id='cv-h5'><b>Data Stuctures in Modern Languages (2019 - Present)</b></h5>
      <p id='cv-p'>Implementing common data structures in safe, modern Rust and Go and writing a book about the same.</p>
    </li>


    </ul>

    <hr>

        </div>
        <div class="col-12 col-md-12 col-sm-12 col-lg-6">

    <h4 id='cv-subtitle'><b>Skills</b></h4>
    <ul>

    <li id='cv-h6'>
      <h6 class='skill-title'><b>Programming Languages:</b></h6> C, C++, Python, SQL
    </li>

    <li id='cv-h6'>
      <h6 class='skill-title'><b>OS:</b></h6> Unix, MacOS, Linux
    </li>

    <li id='cv-h6'>
      <h6 class='skill-title'><b>Tools and Frameworks:</b></h6> ViM, LaTeX, Git, Google Test
    </li>

    <li id='cv-h6'>
      <h6 class='skill-title'><b>Other Experience:</b></h6> Member of Control Team in ONELOOP (UC DAVIS' HYPERLOOP TEAM)
    </li>

    </ul>
    <hr>


    <h4 id='cv-subtitle'><b>Education </b></h4>
    <ul>

    <li>
      <h5 id='cv-h5'><b>University of California, Davis (2018 - Present)</b></h5>
      <p id='cv-p'>BS, Computer Science</p>
    </li>


    </ul>

    <hr>


    <h4 id='cv-subtitle'><b>Awards and Other Achievements</b></h4>
    <ul>

    <li id='cv-h6'>
      <h6 class='skill-title'><b>New York University High School Forensics Cyber Security Awareness Weekr:</b></h6> 1st Place
    </li>

    <li id='cv-h6'>
      <h6 class='skill-title'><b>International Journal of Engineering and Management Research (IJEMR):</b></h6> Published Research Paper
    </li>

    </ul>
    <hr>


    <h4 id='cv-subtitle'><b>Languages</b></h4>
    <h6 class='skill-title'>English, Hindi</h6>
    <hr>

        </div>
      </div>

    </div>
    <div class='col'></div>
     `
    }


    function startup() {
      navbar_font();
      profile();
    }

    window.onload = startup();

    $(document).ready(function () {
      $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
      });
    })
