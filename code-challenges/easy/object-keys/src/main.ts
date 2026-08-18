const ob = {
    name: "ty",
    age: 20
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getProperty(ob, "name"));
