<?php
// Charger tous les scores
$scoresData = json_decode(file_get_contents('scores.json'), true);
$scores = $scoresData['scores'];
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Tous les Scores - Snake Minecraft</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body{
            overflow-y: visible;
        }

        .back-button {
            margin: 20px 0;
        }
        
        .scores-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .scores-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        
        .scores-table th, .scores-table td {
            padding: 10px;
            text-align: left;
            border: 2px solid #727272;
        }
        
        .scores-table th {
            background-color: #505050;
            color: white;
        }
        
        .scores-table tr:nth-child(even) {
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <div class="scores-container">
        <div class="back-button">
            <a href="index.php" class="minecraft-btn min-btn">← Retour au jeu</a>
        </div>
        
        <h1>🏆 Tous les Scores</h1>
        
        <table class="scores-table">
            <thead>
                <tr>
                    <th>Rang</th>
                    <th>Nom</th>
                    <th>Score</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($scores as $index => $score): ?>
                    <tr>
                        <td><?php echo $index + 1; ?></td>
                        <td><?php echo htmlspecialchars($score['name']); ?></td>
                        <td><?php echo $score['score']; ?></td>
                        <td><?php echo date('d/m/Y H:i', strtotime($score['date'])); ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</body>
</html> 