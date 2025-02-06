<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donation Website</title>
    <style>
        *{
            margin:0;
            padding:0;
        }
        body {
            font-family: Arial, sans-serif;
           
            background-color: #f9f9f9;
            color: #333;
        }
        nav{
            position: fixed;
            top:0;
            left:0;
            width: 100%;
            height:50px;
            color:white;
            background: linear-gradient(50deg,rgb(98, 1, 66),rgb(1, 9, 68));
            text-align:center;
            text-decoration:none;
           
            
        }
nav a{
    color:white;
    text-decoration:none;
    font-size:20px;
    font-weight:bold;
    line-height:2;
}

        h2 {
            text-align: center;
            margin: 100px 0 20px;
            color: #333;
        }

        .image-gallery {
            margin-bottom:200px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .image-card {
            margin-left:50px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            width: 50%;
        }

        .image-card:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .image-card img {
            width: 100%;
            height: auto;
            max-height: 200px;
            /* object-fit: cover; */
        }

        .image-description {
            padding: 15px;
            font-size: 18px;
            font-style: italic;
            color: #666;
        
        }

        .image-description strong {
            display: block;
            margin-bottom: 5px;
            font-size: 16px;
            color: #333;
        }

        footer {
            text-align: center;
            margin: 30px 0;
            color: #777;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .image-gallery {
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
               
                gap: 15px;
                
            }

            .image-description {
                font-size: 12px;
            }
            .image-card{
                width: 300px;
          margin-left:0px;

            }
        }

        @media (max-width: 480px) {
            h1, h2 {
                font-size: 18px;
            }

            .image-gallery {
                grid-template-columns: 1fr;
                gap: 10px;
            }

            .image-description {
                padding: 10px;
                font-size: 12px;
            }

            footer {
                font-size: 12px;
            }
            .image-card{
                width: 250px;
          margin-left:0px;

            }
        }
    </style>
</head>
<body> 

<nav>

        <a href="../Htmlfile/index1.html">Home</a> 
    
    </nav>
    

    <div id="images-section">
        <h2>How Your Donations Helped</h2>
        <div class="image-gallery">
            <?php
            // Ensure uploads directory exists
            $dir = "uploads/";
            if (is_dir($dir)) {
                // Get all files in the uploads directory
                $images = scandir($dir);

                foreach ($images as $image) {
                    if ($image !== "." && $image !== "..") {
                        // Check file extension for valid image types
                        $file_ext = strtolower(pathinfo($image, PATHINFO_EXTENSION));
                        if (in_array($file_ext, ['jpg', 'jpeg', 'png', 'gif'])) {
                            // Check for corresponding description file
                            $descriptionFile = $dir . pathinfo($image, PATHINFO_FILENAME) . '.txt';
                            $description = file_exists($descriptionFile) 
                                ? file_get_contents($descriptionFile) 
                                : 'No description available.';

                            // Display image and description
                            echo "<div class='image-card'>";
                            echo "<img src='" . htmlspecialchars($dir . $image, ENT_QUOTES, 'UTF-8') . "' alt='Donation Image'>";
                            echo "<p class='image-description'><strong>Description:</strong> " . htmlspecialchars($description, ENT_QUOTES, 'UTF-8') . "</p>";
                            echo "</div>";
                        }
                    }
                }
            } else {
                echo "<p style='text-align: center; color: red;'>Uploads directory not found.</p>";
            }
            ?>
        </div>
    </div>

    <footer>
        &copy; <?php echo date('Y'); ?> Donation Website. All rights reserved.
    </footer>
</body>
</html>