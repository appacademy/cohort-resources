// Scope: "The scope of a variable is the region of a program where it can be accessed."

function scopeExample() {
    // SCOPE A; variables: x
    const x = "x";

    // the code block is denoted by { and }
    // this is what the "block" in "block scoped" refers to
    if (true) {
        // SCOPE B; variables: x, y
        const y = "y";

        if (true) {
            // SCOPE C; variables: x, y, and z
            const z = "z";
        }
    }
}
