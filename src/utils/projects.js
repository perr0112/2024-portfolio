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

    if (id === 1) {
        return projects[projects.length - 1];
    } else {
        return projects[id - 2];
    }

}

export { getCurrentProject, getNextProject }
