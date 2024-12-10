<?php
  include("formdb.php");
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Renier Marquez Portfolio</title>

    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  </head>

  <body>
    
    <div class="navbar-container">
      <nav class="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <span></span>
      </nav>
    </div>

    <div id="home">
      <div class="landing-page">
        <div class="text-container">
          <p class="text">Hi! I'm Renier Marquez</p>
          <p class="text-info">Aspiring <span>
            Web Developer
          </span></p>
          <div class="landing-buttons">
            <button class="button download-button">
              Download CV
            </button>
            <button class="button contact-button">
              Contact me
            </button>
          </div>
        </div>
        <div class="hero-container">
          <div class="shape">
            <img class="hero" src="pictures/mypicture-removebg-preview.png">
          </div>
        </div>
      </div>
    </div>

    <div id="about">
      <div class="sub-heading-container about-animation">
        <p class="sub-header">
          Get to know more
        </p>
        <p class="sub-title">
          About Me
        </p>
      </div>

      <div class="about-me-centered">
        <div class="about-me-container">
          <div class="about-img-container">
            <img src="pictures/removed_bg-2x2.png" alt="my-img" class="about-img">
          </div>
          
          <div class="details-container">
            <div class="more-details-container">
              <div class="education-container">
                <div class="education-icon-container">
                  <img src="icons/education.png" class="education-icon">
                </div>
                  <p class="education">
                  Education
                  </p>
  
                  <p class="education-details">
                   3rd year BSIT at Data Center College of the Philippines
                  </p>
  
                  <p class="education-major">
                   Major in Web Development
                  </p>
              </div>
              <div class="experience-container">
                <div class="experience-icon-container">
                  <img src="icons/expertise.png" class="experience-icon">
                </div>
                  <p class="experience">
                    Expertise
                  </p>
  
                  <p class="experience-skills">
                    4 months HTML and CSS
                  </p>
  
                  <p class="experience-skills">
                    2 months JavaScript
                  </p>
  
                  <p class="experience-skills">
                   2 weeks Git and Github
                  </p>
              </div>
            </div>

            <div class="my-hobbies-container">
              <span class="left-line-hobbies"></span>
              <p class="my-hobbies">
                My hobbies
              </p>
              <span class="right-line-hobbies"></span>
            </div>
            <div class="hobbies-list-container">
              <div class="section1">
                <ul>
                  <li>Playing Video Games</li>
                  <li>Netflix and Chill</li>
                  <li>Reading Manga/Manhwa</li>
                </ul>
              </div>
              <div class="section2">
                <ul>
                  <li>Reading Books</li>
                  <li>Working out</li>
                  <li>Watching Anime</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
     
    </div>

    <div id="skills">
      <div class="sub-heading-container skill-animation">
        <p class="sub-header">
          Acquire a knowledge of
        </p>
        <p class="sub-title">
          My Skills
        </p>
      </div>

      <div class="tech-used-container">
        <p class="tech-used">Technologies </p>
      </div>

      <div class="skills-grid">
        <div class="technology-container">
          <div class="skill-pic-container">
            <img class="skill-pic" src="icons/html-5.png">
          </div>

          <div class="skill-title-container">
            <p class="skill-title">HTML</p>
          </div>
        </div>

        <div class="technology-container">
          <div class="skill-pic-container">
            <img class="skill-pic" src="icons/css-3.png">
          </div>

          <div class="skill-title-container">
            <p class="skill-title">CSS</p>
          </div>
        </div>

        <div class="technology-container">
          <div class="skill-pic-container">
            <img class="skill-pic" src="icons/javacript.png">
          </div>

          <div class="skill-title-container">
            <p class="skill-title">JavaScript</p>
          </div>
        </div>

        <div class="technology-container">
          <div class="skill-pic-container">
            <img class="skill-pic" src="icons/c-sharp.png">
          </div>

          <div class="skill-title-container">
            <p class="skill-title">C - Sharp</p>
          </div>
        </div>

        <div class="technology-container">
          <div class="skill-pic-container">
            <img class="skill-pic" src="icons/github.png">
          </div>

          <div class="skill-title-container">
            <p class="skill-title">Github</p>
          </div>
        </div>

        <div class="technology-container">
          <div class="skill-pic-container">
            <img class="skill-pic" src="icons/python.png">
          </div>

          <div class="skill-title-container">
            <p class="skill-title">Python</p>
          </div>
        </div>

        <div class="technology-container">
          <div class="skill-pic-container">
            <img class="skill-pic" src="icons/git.png">
          </div>

          <div class="skill-title-container">
            <p class="skill-title">GIT</p>
          </div>
        </div>

        <div class="technology-container">
          <div class="skill-pic-container">
            <img class="skill-pic" src="icons/photoshop.png">
          </div>

          <div class="skill-title-container">
            <p class="skill-title">Photoshop</p>
          </div>
        </div>
      </div>

      <div class="skill-services-container">
        <p class="skill-services">Services </p>
      </div>

      <div class="services-container">
        <div class="services web-service">
          <div class="services-pic-container">
            <img class="web-development" src="icons/web-development.png">
          </div>

          <div class="web-dev-container">
            <p class="web-dev">
              Web Development
            </p>
          </div>
        </div>

        <div class="services game-service">
          <div class="services-pic-container">
            <img class="photo-editing" src="icons/game-development.png">
          </div>

          <div class="photo-edit-container">
            <p class="photo-edit">
              Game Development
            </p>
          </div>
        </div>

        <div class="services edit-service">
          <div class="services-pic-container">
            <img class="photo-editing" src="icons/photo-editing.png">
          </div>

          <div class="photo-edit-container">
            <p class="photo-edit">
              Photo Editing
            </p>
          </div>
        </div>
      </div>
    </div>
    

    <div id="projects">
      <div class="sub-heading-container project-animation">
        <p class="sub-header">
          Where creativity meets code, featuring my
        </p>
        <p class="sub-title">
          Projects
        </p>
      </div>

      <div class="project-container">
        <div class="project-flex kapya-cafe">
          <div class="project-relative kapya-laptop">
            <img class="project-relative-pic" src="pictures/laptop-bg.png">

            <div class="project-absolute">
              <img class="project-absolute-pic" src="pictures/KAPYA-CAFE.png">
            </div>
          </div>

          <div class="project-details-container">
            <div class="project-title-container">
              <p class="project-title kapya-cafe-title">
                KAPYA CAFE
              </p>
            </div>

            <div class="prog-lang-used kapya-prog-lang">
              <div class="prog-lang-container">
                <div class="html-dot dot"></div>
                <p class="prog-lang">
                  HTML
                </p>
              </div>

              <div class="prog-lang-container">
                <div class="css-dot dot"></div>
                <p class="prog-lang">
                  CSS
                </p>
              </div>
            </div>
            
            <div class="project-desc-container">
              <p class="project-desc kapya-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veritatis, fuga a in quas dignissimos quaerat molestias, qui esse at inventore distinctio fugiat error impedit et, suscipit aliquid quia assumenda!
              </p>
            </div>
            
            <div class="project-button">
              <button class="view-button kapya-button">
                View Project <span>&#10138;</span>
              </button>
            </div>

          </div>
        </div>


        <!-- right side project -->
        <div class="project-flex todo-list">

          <div class="project-details-container">
            <div class="project-title-container">
              <p class="project-title todo-list-title">
                To-Do List
              </p>
            </div>

            <div class="prog-lang-used todo-list-prog-lang">
              <div class="prog-lang-container">
                <div class="html-dot dot"></div>
                <p class="prog-lang">
                  HTML
                </p>
              </div>

              <div class="prog-lang-container">
                <div class="css-dot dot"></div>
                <p class="prog-lang">
                  CSS
                </p>
              </div>

              <div class="prog-lang-container">
                <div class="js-dot dot"></div>
                <p class="prog-lang">
                  JavaScript
                </p>
              </div>
            </div>
            
            <div class="project-desc-container">
              <p class="project-desc todo-list-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veritatis, fuga a in quas dignissimos quaerat molestias, qui esse at inventore distinctio fugiat error impedit et, suscipit aliquid quia assumenda!
              </p>
            </div>
            
            <div class="project-button">
              <button class="view-button todo-list-button">
                View Project <span>&#10138;</span>
              </button>
            </div>

          </div>


          <div class="project-relative todo-list-laptop">
            <img class="project-relative-pic" src="pictures/laptop-bg.png">

            <div class="project-absolute">
              <img class="project-absolute-pic" src="pictures/todo-list.png">
            </div>
          </div>

        </div>

        <!-- left side project -->
        <div class="project-flex rock-paper-scissor">
          <div class="project-relative rock-paper-scissor-laptop">
            <img class="project-relative-pic" src="pictures/laptop-bg.png">

            <div class="project-absolute">
              <img class="project-absolute-pic" src="pictures/rock-paper-scissor.png">
            </div>
          </div>

          <div class="project-details-container">
            <div class="project-title-container">
              <p class="project-title rock-paper-scissor-title">
                Rock Paper Scissor
              </p>
            </div>

            <div class="prog-lang-used rock-paper-scissor-prog-lang">
              <div class="prog-lang-container">
                <div class="html-dot dot"></div>
                <p class="prog-lang">
                  HTML
                </p>
              </div>

              <div class="prog-lang-container">
                <div class="css-dot dot"></div>
                <p class="prog-lang">
                  CSS
                </p>
              </div>

              <div class="prog-lang-container">
                <div class="js-dot dot"></div>
                <p class="prog-lang">
                  JavaScript
                </p>
              </div>
            </div>
            
            <div class="project-desc-container">
              <p class="project-desc rock-paper-scissor-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veritatis, fuga a in quas dignissimos quaerat molestias, qui esse at inventore distinctio fugiat error impedit et, suscipit aliquid quia assumenda!
              </p>
            </div>
            
            <div class="project-button">
              <button class="view-button rock-paper-scissor-button">
                View Project <span>&#10138;</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div id="contact">
      <div class="sub-heading-container contact-animation">
        <p class="sub-header">
          Keep in touch
        </p>
        <p class="sub-title">
          Contact us
        </p>
      </div>

      <div class="contact-container">
        <div class="contact-left">
          <div class="lets-talk-container">
            <p class="lets-talk">
              Let's talk
            </p>
          </div>

          <div class="contact-desc-container">
            <p class="contact-desc">
              To request help or assistance. Contact us directly or fill out the form and we will get back to you promptly.
            </p>
          </div>

          <div class="form-container">
            <form action="index.php" method="post">
              <div class="name-container">
                <input type="text" name="firstName" placeholder="First Name" class="first-name">
                <input type="text" name="lastName" placeholder="Last Name" class="last-name">
              </div>

              <div class="contact-info-container">
                <input type="email" name="email" placeholder="Email" class="email">
                <input type="text" name="phoneNum" placeholder="Phone" class="phone">
              </div>

              <div class="message-container">
                <textarea name="message" class="message" placeholder="Message"></textarea>
              </div>

              <div class="submit-button-container">
                <input type="submit" value="SUBMIT" name="submit" class="submit-button">
              </div>

            </form>
          </div>
        </div>

        <div class="contact-right">
          <div class="mail-sent-pic-container">
            <img src="pictures/mail-pic.png" class="mail-sent-pic">
          </div>

          <div class="contact-icons-container">
            <div class="location-container">
              <img src="icons/location.png" class="location-icon">
              <p class="location">
                Baguio City, Benguet, Philippines
              </p>
            </div>

            <div class="contact-number-container">
              <img src="icons/phone.png" class="contact-number-icon">
              <p class="contact-number">
                +63 926 6021 789
              </p>
            </div>

            <div class="social-media-container">
              <img src="icons/facebook.png" class="fb-icon">
              <img src="icons/linkedin.png" class="linkedin-icon">
              <img src="icons/discord.png" class="discord-icon">
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js" integrity="sha512-aNMyYYxdIxIaot0Y1/PLuEu3eipGCmsEUBrUq+7aVyPGMFH8z0eTP0tkqAvv34fzN6z+201d3T8HPb1svWSKHQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script src="script.js"></script>
  </body>
</html>

<?php

  if (isset($_POST["submit"])) {

    if (empty($_POST["firstName"]) || empty($_POST["lastName"]) || empty($_POST["email"]) || empty($_POST["phoneNum"]) || empty($_POST["message"])) {
      echo "Please fill up the form.";
    }
    else {
      $firstName = $_POST["firstName"];
      $lastName = $_POST["lastName"];
      $email = $_POST["email"];
      $phone = $_POST["phoneNum"];
      $message = $_POST["message"];

      $sql = "INSERT INTO contacts (firstName, lastName, email, phone, message) VALUES ('$firstName', '$lastName', '$email', '$phone', '$message')";

      try{
        mysqli_query($conn, $sql);
        echo "<script>
              alert('Message registered. Thank you for reaching out!');
             </script>";
      }
      catch(mysqli_sql_exception) {
        echo "<script>
              alert('Could not register message.');
              </script>";
      }
    }
  }
?>