const bcrypt = require("bcrypt"); 
const saltRound = 10; 
const hashGenerate = async (plainPassword) => {
    const salt = await bcrypt.genSalt(saltRound); 
    const hash = await bcrypt.hash(plainPassword, salt); 
    return hash;  
}
// compare hash and user give password  
const hashValidator = async (plainPassword, hashedPassword) => {
    const result = await bcrypt.compare(plainPassword, hashedPassword);
    return result;
};

module.exports.hashGenerate = hashGenerate; 
module.exports.hashValidator = hashValidator; 