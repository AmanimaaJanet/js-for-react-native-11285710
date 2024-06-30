//task 3
// userInfo.js

/**
 * Creates user profiles from original names and modified names.
 * @param {string[]} originalNames - The array of original names.
 * @param {string[]} modifiedNames - The array of modified names.
 * @returns {Object[]} - The array of user profiles.
 */
function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error('Both arrays must be of the same length');
    }
    
    return originalNames.map((originalName, index) => ({
        id: index + 1,
        originalName,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage
const originalNames = ["Yaa", "Jenny", "Kofi", "Abel", "David"];
const modifiedNames = ["YAA", "jenny", "KOFI", "able", "DAVID"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);
// Output:
// [
//   { id: 1, originalName: 'Yaa', modifiedName: 'YAA' },
//   { id: 2, originalName: 'Jenny', modifiedName: 'jenny' },
//   { id: 3, originalName: 'Kofi', modifiedName: 'KOFI' },
//   { id: 4, originalName: 'Abel', modifiedName: 'abel' },
//   { id: 5, originalName: 'David', modifiedName: 'DAVID' }
// ]