function calculateStartDelays(jumpScores) {
  const bestScore = Math.max(...jumpScores);

  return jumpScores.map(score => 
    Math.ceil((bestScore - score) * 1.5)
  );
}
