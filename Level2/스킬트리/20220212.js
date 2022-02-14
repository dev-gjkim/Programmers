const skill = "CBD";
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];


const solution = (skill, skill_trees) => {
    return skill_trees.filter((tree) => skill.indexOf(tree.split('').filter(s => skill.includes(s)).join('')) === 0).length;
}
