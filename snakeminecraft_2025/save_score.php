<?php 
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Récupérer les données envoyées
        $data = json_decode(file_get_contents('php://input'), true);
        $name = $data['name'] ?? '';
        $score = $data['score'] ?? 0;

        // Valider les données
        if (empty($name) || !is_numeric($score)) {
            throw new Exception('Données invalides');
        }

        // Lire les scores existants
        $scoresFile = 'scores.json';
        if (!file_exists($scoresFile)) {
            $scores = ['scores' => []];
        } else {
            $jsonData = file_get_contents($scoresFile);
            $scores = json_decode($jsonData, true) ?? ['scores' => []];
        }

        // Ajouter le nouveau score
        $scores['scores'][] = [
            'name' => htmlspecialchars($name),
            'score' => (int)$score,
            'date' => date('Y-m-d H:i:s') // Ajouter la date
        ];

        // Trier les scores par ordre décroissant
        usort($scores['scores'], function($a, $b) {
            return $b['score'] - $a['score'];
        });

        // Limiter à 500 scores maximum
        if (count($scores['scores']) > 500) {
            $scores['scores'] = array_slice($scores['scores'], 0, 500);
        }

        // Sauvegarder les scores triés dans le fichier
        if (file_put_contents($scoresFile, json_encode($scores, JSON_PRETTY_PRINT)) === false) {
            throw new Exception('Erreur lors de la sauvegarde');
        }

        // Renvoyer tous les scores au client
        echo json_encode(['success' => true, 'scores' => $scores['scores']]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
}
?>
