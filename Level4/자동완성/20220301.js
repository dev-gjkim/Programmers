const words = ["word", "war", "warrior", "world"];


const solution = (words) => {

    class Node {
        constructor(value, cnt) {
            this.value = value;
            this.cnt = cnt;
            this.child = new Map()
        }
    }
    const trie = new Node('', 0)
    for (const word of words) {
        let currentNode = trie;
        for (const str of word) {
            if (!currentNode.child.has(str)) {
                currentNode.child.set(str, new Node(currentNode.value + str))
            }
            currentNode.cnt = (currentNode.cnt || 0) + 1;
            currentNode = currentNode.child.get(str)
        }
        currentNode.cnt = (currentNode.cnt || 0) + 1;
    }

    let answer = 0;

    for(const word of words){
        let currentNode = trie;
        for(const str of word){
            answer++;
            if(currentNode.child.get(str).cnt <= 1){
                break;
            }
            currentNode = currentNode.child.get(str)
        }
    }
    return answer
}

