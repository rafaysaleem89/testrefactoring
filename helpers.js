const crypto = require("crypto");

exports.generateKey = (data) => {
    if(!data) return;
  
    if (typeof data !== "string") {
       data = JSON.stringify(data)
    }
    return crypto.createHash("sha3-512").update(data).digest("hex");
}