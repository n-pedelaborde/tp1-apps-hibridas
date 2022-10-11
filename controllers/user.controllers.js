import * as ProjectsServices from "../services/projects.services.js"

// estaría bueno que solo traiga los que public==true
function allProjects(req, res) {
    ProjectsServices.findProjects()
        .then(function (projects) {
            res.render("main", { projects })
        })
}

export {
    allProjects
}