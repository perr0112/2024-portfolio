import { projects } from "../data/projects";

function getCurrentProject(id) {
    // if (id < 0 || id === 0 || id >= projects.length) {
    //     return;
    // }
    return projects.find((x) => x.id == id);
}

/* Depending on current id */
function getNextProject(id) {
    // if (id === -1) {
    //     return;
    // }

    // if (id === projects.length) {
    //     return projects[0];
    // } else {
    //     return projects[id];
    // }
    /* Depending on current id */
    if (id === -1) {
        return;
    }

    console.log('id', id);

    if (id !== projects.length) {
        return projects[id];
    } else {
        return projects[0];
    }

}

export { getCurrentProject, getNextProject }
