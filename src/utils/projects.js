import { projects } from "../data/projects";

function getCurrentProject(id) {
    if (!id || id > projects.length) { return; }
    return projects.find(x => x.id === id - 1);
}

export { getCurrentProject }
