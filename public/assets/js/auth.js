<!-- login.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>RR Online – Log in</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="/assets/css/rr-style.css" />
</head>
<body class="rr-page rr-index">
  <div class="rr-overlay">
    <div class="rr-shell">
      <header class="rr-header">
        <div class="rr-logo">RR <span>Online</span></div>
        <nav class="rr-nav">
          <a href="/index.html">Home</a>
          <a href="/pages/signup.html">Sign up</a>
        </nav>
      </header>

      <main class="rr-panel">
        <h1 class="rr-hero-title">Log in</h1>
        <form class="rr-form" id="rr-login-form">
          <div class="rr-field">
            <label for="rr-login-email">Email</label>
            <input id="rr-login-email" type="email" required />
          </div>
          <div class="rr-field">
            <label for="rr-login-password">Password</label>
            <input id="rr-login-password" type="password" required />
          </div>
          <button class="rr-btn" type="submit">Log in</button>
        </form>
      </main>

      <footer class="rr-footer">
        RR Online · Log in
      </footer>
    </div>
  </div>

  <script src="/assets/js/auth.js"></script>
</body>
</html>
