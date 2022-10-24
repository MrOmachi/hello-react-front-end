class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// const a = new Node('a')
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

const a = new Node("2");
const b = new Node("5");
const c = new Node("11");
const d = new Node("4");
const e = new Node("8");
const f = new Node("1");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// const breathFirstPrint=(root)=>{
//     let queue = [root];
//     while (queue.length>0) {
//         const curr = queue.shift()
//         console.log(curr.val)
//         if(curr.left!==null){
//             queue.push(curr.left)
//         }
//         if (curr.right !== null) {
//           queue.push(curr.right);
//         }
//     }
// }

// const bfs = (root, target) => {
//   let queue = [root];
//   while (queue.length > 0) {
//     const curr = queue.shift();
//     if(curr.val===target){
//         return true
//     }
//     console.log(curr.val);
//     if (curr.left !== null) {
//       queue.push(curr.left);
//     }
//     if (curr.right !== null) {
//       queue.push(curr.right);
//     }
//   }

//   return false
// };

// breathFirstPrint(a);
// bfs(a,c)

const sumTree = (root) => {
  let queue = [root];
  let sum = 0;
  while (queue.length > 0) {
    const curr = queue.shift();
    sum += curr.val;
    console.log(curr.val);
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }

  return sum;
};
sumTree(a);
