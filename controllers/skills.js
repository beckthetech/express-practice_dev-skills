const SkillModel = require('../models/skills');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
    req.body.learned = req.body.learned === 'on';
    SkillModel.update(req.params.id, req.body);
    res.redirect('/skills');
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: SkillModel.getOne(req.params.id),
        idx: req.params.id
    });
}

function deleteSkill(req, res) {
    SkillModel.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    req.body.learned = false;
    SkillModel.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new');
}

function index(req, res) {
    res.render('skills/index', {
        skills: SkillModel.getAll(),
        title: "Developer Skills"
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: SkillModel.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}