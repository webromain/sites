<?php
// Traitement de la soumission du score
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $scoreData = json_decode(file_get_contents('php://input'), true);
    $score = isset($scoreData['score']) ? trim($scoreData['score']) : null;
    $name = isset($scoreData['name']) ? trim($scoreData['name']) : 'Anonyme';
    
    if ($score !== null && $score !== '') {
        // Charger les scores existants
        $scoresData = json_decode(file_get_contents('scores.json'), true);
        if (!$scoresData) {
            $scoresData = ['scores' => []];
        }
        
        // Ajouter le nouveau score
        $scoresData['scores'][] = [
            'name' => $name,
            'score' => (int)$score,
            'date' => date('Y-m-d H:i:s')  // Ajouter la date du score
        ];
        
        // Trier les scores par ordre décroissant
        usort($scoresData['scores'], function($a, $b) {
            return $b['score'] - $a['score'];
        });
        
        // Sauvegarder tous les scores dans le fichier
        file_put_contents('scores.json', json_encode($scoresData, JSON_PRETTY_PRINT));
        
        // Récupérer les 20 meilleurs scores pour l'affichage
        $topScores = array_slice($scoresData['scores'], 0, 20);
        
        header('Content-Type: application/json');
        echo json_encode(['scores' => $topScores]);
        exit;
    }
}


// Pour l'affichage initial, on ne charge que les 10 premiers scores
$scoresData = json_decode(file_get_contents('scores.json'), true);
$scores = array_slice($scoresData['scores'], 0, 10);
$highScore = !empty($scoresData['scores']) ? $scoresData['scores'][0]['score'] : 0;
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Snake Minecraft</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game-container">
        <div class="game-main">
            <div class="score-container">
                <div>Score: <span id="score">0</span></div>
                <div>Meilleur Score: <span id="highScore"><?php echo $highScore; ?></span></div>
            </div>
            <canvas id="gameCanvas"></canvas>
            <div id="gameMessage" class="game-message"></div>
            <div class="controls">
                <button id="resetBtn" class="minecraft-btn min-btn">Réinitialiser</button>
                <button id="pauseBtn" class="minecraft-btn min-btn">Pause</button>
                <button id="autoBtn" class="minecraft-btn min-btn">Mode Auto</button>
                <button onclick="window.location.href = 'snake-cyberpunk-2025/index.html';" class="minecraft-btn min-btn">Snake Cyberpunk <span style="font-size: 0.8rem;">(expo)</span></button>
            </div>
        </div>
        <div class="leaderboard">
            <h2>🏆 Meilleurs Scores</h2>
            <div id="leaderboardList" class="leaderboard-list">
                <?php if (!empty($scores)): ?>
                    <?php foreach ($scores as $index => $score): ?>
                        <?php
                        $medalClass = '';
                        $medal = '';
                        switch($index) {
                            case 0: 
                                $medalClass = 'gold';
                                $medal = '🥇';
                                break;
                            case 1: 
                                $medalClass = 'silver';
                                $medal = '🥈';
                                break;
                            case 2: 
                                $medalClass = 'bronze';
                                $medal = '🥉';
                                break;
                        }
                        ?>
                        <div class="leaderboard-item <?php echo $medalClass; ?>">
                            <span class="leaderboard-rank"><?php echo $medal . ($index + 1); ?>.</span>
                            <span class="leaderboard-name"><?php echo htmlspecialchars($score['name']); ?></span>
                            <span class="leaderboard-score"><?php echo $score['score']; ?></span>
                        </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <div class="leaderboard-item">
                        <span class="leaderboard-name">Aucun score</span>
                    </div>
                <?php endif; ?>
            </div>
            <div class="view-all-scores">
                <a href="all-scores.php" class="minecraft-btn min-btn">Voir tous les scores</a>
            </div>
        </div>
        <div class="instructions full-width">
            <p style="color: red;">!Important (Beta): Jouer sur PC, version mobile pour le moment indisponible</p>
            <h2>Instructions:</h2>
            <p>🎮 Mode Clavier: Utilisez les flèches pour diriger le serpent</p>
            <p>🖱 Mode Auto: Le serpent joue automatiquement</p>
            <p>⏸️ Pause: Appuyez sur Espace ou P pour mettre en pause</p>
        </div>
    </div>
    <script src="game.js"></script>
</body>
</html> 