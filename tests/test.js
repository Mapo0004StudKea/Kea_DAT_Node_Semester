function genericPerformer(name, action) {
return action(name);
}

const codingAction = (name) => `${name} elsker at kode`;
console.log(genericPerformer('Martin', codingAction));