---
layout: default
permalink: /test-home-page-2/
---
<style>
        body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }
        .nav-container {
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
        }
        .nav-separator {
            border: none;
            height: 3px;
            background-color: #333;
            margin: 20px 0;
        }
        
        .icon-nav {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 24px; /* Optimal spacing between icons */
            flex-wrap: wrap;
            padding: 16px 0;
        }
        
        .icon-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
            border-radius: 8px;
            transition: all 0.2s ease;
            text-decoration: none;
        }
        
        .icon-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        .icon-link img {
            width: 43px;
            height: 43px;
            display: block;
        }
        
        /* Responsive spacing */
        @media (max-width: 600px) {
            .icon-nav {
                gap: 20px;
            }
        }
        
        @media (max-width: 400px) {
            .icon-nav {
                gap: 16px;
            }
            
            .icon-link img {
                width: 36px;
                height: 36px;
            }
        }
    </style>
</head>
<body>
    <div class="nav-container">
        <hr class="nav-separator">
        <nav class="icon-nav">
            <a href="https://ellisjalia.com" class="icon-link">
                <img src="/assets/icons/menu.png" alt="Home">
            </a>
            <a href="https://ellisjalia.com/essays" class="icon-link">
                <img src="/assets/icons/quill.png" alt="Essays">
            </a>
            <a href="https://ellisjalia.com/art" class="icon-link">
                <img src="/assets/icons/paint-palette.png" alt="Art">
            </a>
            <a href="https://ellisjalia.substack.com/" class="icon-link">
                <img src="/assets/icons/newsletter.png" alt="Newsletter">
            </a>
            <a href="https://ellisjalia.com/about" class="icon-link">
                <img src="/assets/icons/unknown.png" alt="About">
            </a>
        </nav>
        <hr class="nav-separator">
    </div>
</body>
</html>
