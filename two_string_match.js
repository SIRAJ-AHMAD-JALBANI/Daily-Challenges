function compare(secret, guess) {
  let n = secret.length;
  let result = Array(n).fill("0");

  // Step 1: Count how many times each letter appears in secret
  let freq = {};
  for (let ch of secret) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Step 2: First assign "2" (correct position)
  for (let i = 0; i < n; i++) {
    if (guess[i] === secret[i]) {
      result[i] = "2";
      freq[guess[i]]--;       // use this letter
    }
  }

  // Step 3: Assign "1" (correct letter, wrong position)
  for (let i = 0; i < n; i++) {
    // skip if already "2"
    if (result[i] === "2") continue;

    let letter = guess[i];

    // If letter exists in leftover frequency
    if (freq[letter] > 0) {
      result[i] = "1";
      freq[letter]--;         // use one copy
    }
  }

  // Everything else remains "0"
  return result.join("");
}

console.log(compare("APPLE", "POPPA"));  // "10201"
