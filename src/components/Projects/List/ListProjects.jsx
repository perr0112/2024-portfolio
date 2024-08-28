import './ListProjects.scss';

import { useEffect, useState, useCallback } from 'react';

import ProjectItem from './Item/ProjectItem';
import Minimap from '../Minimap/Minimap';
import { projects, TAGS } from '../../../data/projects';

const sortedProjects = [...projects].sort((a, b) => a.id - b.id);

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
    
    const [typeShow, setTypeShow] = useState('Minimap');

    const handleTypeShow = useCallback((e) => {
        console.log(e);
        setTypeShow(e);
    });

    return (
        <div className="projects-content">
            
            {/* <div className="filters" data-target="false">
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
            </div> */}

            <div className="type-show">
                <div className="type --1" data-active={typeShow === 'Minimap'} onClick={() => handleTypeShow('Minimap')}>
                    Minimap
                </div>
                <div className="type --2" data-active={typeShow === 'Cards'} onClick={() => handleTypeShow('Cards')}>
                    Cards
                </div>
            </div>

            {/* <div className="projects-filters">
                
            </div> */}

            <div className="list-projects">
                <div className="line line-projects" />
                {typeShow === 'Cards' && sortedProjectsTags.map((data, index) =>
                    <ProjectItem key={index} data={data} />
                )}

                {typeShow === 'Minimap' && <Minimap projects={sortedProjects} />}
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
