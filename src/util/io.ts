/**
 * This file defines utility functions for input/output operations
 */

// Function to get user input
// export function getUserInput(promptText: string): string | null {
//     return prompt(promptText); // Prompt the user for input
// }

/**
 * This file defines utility functions for input/output operations
 */

import readline from 'readline';

// Function to get user input using the readline interface
export function getUserInput(promptText: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(promptText, (answer) => {
            rl.close();
            resolve(answer);  // Resolve the promise with the user input
        });
    });
}
