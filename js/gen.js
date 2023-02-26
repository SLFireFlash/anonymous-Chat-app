function tokenGen(length = 4) {
  let tokenId = "text";
  for (let i = 0; i < length; i++) {
    tokenId += Math.floor(Math.random() * 10);
  }
  return tokenId;
}

tokenGen(); // generates a 4-digit token
tokenGen(6); // generates a 6-digit token
