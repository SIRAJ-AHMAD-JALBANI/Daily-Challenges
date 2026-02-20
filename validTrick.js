function isValidTrick(trickName) {
    const first_words = ["Misty", "Ghost", "Thunder", "Solar", "Sky", "Phantom", "Frozen","Polar"]
    const second_words = ["Twister", "Icequake", "Avalanche","Vortex", "Snowstorm", "Frostbite", "Blizzard", "Shadow"]
    let words = trickName.split(" ")
    const firstword = words[0]
    const secondword = words[1]
    if(first_words.includes(firstword) && second_words.includes(secondword)){
      return true
    }
    return false
}
