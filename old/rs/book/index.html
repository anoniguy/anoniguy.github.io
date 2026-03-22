<?php
$successMsg = "";
$errorMsg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    if ($name && filter_var($email, FILTER_VALIDATE_EMAIL) && $message) {
        $to = "markleontaridis@gmail.com"; // Replace with your real email
        $subject = "Contact Form Message from $name";
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: contact@soundspace.com";

        if (mail($to, $subject, $body, $headers)) {
            $successMsg = "Thanks, $name! Your message has been sent. We'll get back to you soon.";
        } else {
            $errorMsg = "Oops! Something went wrong. Please try again later.";
        }
    } else {
        $errorMsg = "Please fill out all fields correctly.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SoundSpace Studios</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #121212;
            color: white;
        }
        header {
            background: linear-gradient(135deg, #ff00cc 0%, #3333ff 100%);
            padding: 2rem;
            text-align: center;
        }
        .logo {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        nav {
            display: flex;
            justify-content: center;
            gap: 2rem;
            padding: 1rem;
            background-color: #222;
        }
        nav a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }
        .hero {
            height: 60vh;
            background: url('studio-bg.jpg') center/cover;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        .hero-content {
            background-color: rgba(0,0,0,0.7);
            padding: 2rem;
            border-radius: 10px;
        }
        .cta-button {
            display: inline-block;
            background: #ff00cc;
            color: white;
            padding: 1rem 2rem;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 1rem;
            transition: all 0.3s;
            cursor: pointer;
            border: none;
        }
        .cta-button:hover {
            transform: scale(1.05);
            background: #3333ff;
        }
        .contact {
            padding: 4rem 2rem;
            text-align: center;
        }
        .contact form {
            margin-top: 2rem;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
        }
        .contact input, .contact textarea {
            width: 100%;
            padding: 0.75rem;
            margin-bottom: 1rem;
            border-radius: 8px;
            border: none;
        }
        footer {
            background-color: #111;
            text-align: center;
            padding: 2rem;
            margin-top: 2rem;
        }
        .message {
            font-weight: bold;
            margin-top: 1rem;
        }
        .success {
            color: #00ff99;
        }
        .error {
            color: #ff5555;
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">SoundSpace Studios</div>
        <p>Your creative playground for music and video production</p>
    </header>
    <nav>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </nav>

    <div class="hero">
        <div class="hero-content">
            <h1>Record. Produce. Create.</h1>
            <p>Everything you need to bring your sound to life</p>
            <a href="#contact" class="cta-button">Contact Us</a>
        </div>
    </div>

    <div class="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Got questions? Send us a message below:</p>
        <form method="POST" action="#contact">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email" required>
            <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
            <button type="submit" class="cta-button">Send Message</button>

            <?php if ($successMsg): ?>
                <div class="message success"><?= $successMsg ?></div>
            <?php elseif ($errorMsg): ?>
                <div class="message error"><?= $errorMsg ?></div>
            <?php endif; ?>
        </form>
    </div>

    <footer>
        <p>&copy; 2023 SoundSpace Studios. All rights reserved.</p>
        <p>123 Studio Lane, Music City | (555) 123-4567 | info@soundspace.com</p>
    </footer>
</body>
</html>
