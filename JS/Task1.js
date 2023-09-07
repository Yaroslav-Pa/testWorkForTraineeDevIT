const deepEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

const object1 = { name: "nikola", hub: 1 };
const object2 = { name: "niko", hub: 112 };

const answer = deepEqual(object1, object2);
console.log(answer);
