const devSkills = [
    { skill: 'JavaScript', learned: true },
    { skill: 'HTML', learned: true },
    { skill: 'CSS', learned: true },
    { skill: 'jQuery', learned: true },
    { skill: 'NodeJS', learned: true },
    { skill: 'ExpressJS', learned: false },
    { skill: 'React', learned: false },
    { skill: 'MongoDB', learned: false },
    { skill: 'Mongoose', learned: false },
];

function update(id, skill) {
    devSkills.splice(id, 1, skill);
}

function getAll() {
    return devSkills;
}

function getOne(id) {
    return devSkills[id];
}

function create(skill) {
    devSkills.push(skill)
}

function deleteOne(id) {
    devSkills.splice(id, 1);
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};