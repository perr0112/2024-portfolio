import './ListProjects.scss';

import { useEffect, useState } from 'react';

import ProjectItem from './Item/ProjectItem';
import { projects, TAGS } from '../../../data/projects';

const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

const ListProjects = () => {

    const [selectedTags, setSelectedTags] = useState([]);
    const [sortedProjectsTags, setSortedProjectsTags] = useState(sortedProjects);

    const handleTagClick = (tagName) => {
        setSelectedTags((prevSelectedTags) => {
            if (prevSelectedTags.includes(tagName)) {
                return prevSelectedTags.filter(tag => tag !== tagName);
            } else {
                return [...prevSelectedTags, tagName];
            }
        });
    };

    useEffect(() => {
        if (selectedTags.length === 0) {
            setSortedProjectsTags(sortedProjects);
        } else {
            const filtered = sortedProjects.filter(project =>
                selectedTags.every(tag => project.tags.includes(tag))
            );
            setSortedProjectsTags(filtered);
        }
    }, [selectedTags]);

    useEffect(() => {
        console.log(selectedTags);
    }, [selectedTags])

    return (
        <div className="projects-content">

            <div className="filters" data-target="false">
                <div className="tags-avalaible">
                    {TAGS.map((tag, index) =>
                        <Tag
                            key={index}
                            name={tag}
                            isActive={selectedTags.includes(tag)}
                            onClick={() => handleTagClick(tag)}
                        />
                    )}
                </div>
            </div>

            <div className="list-projects">
                {sortedProjectsTags.map((data, index) =>
                    <ProjectItem key={index} data={data} />
                )}
            </div>

        </div>
    )
}

const Tag = ({ name, isActive, onClick }) => {
    return (
        <div
            className="tag"
            data-active={isActive}
            onClick={onClick}
        >
            {name}
        </div>
    )
}

export default ListProjects;
