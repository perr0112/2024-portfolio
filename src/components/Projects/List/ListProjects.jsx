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
    
    const [typeShow, setTypeShow] = useState('Minimap');

    const handleTypeShow = useCallback((e) => {
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

            <div className="type-show" data-target="false">
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
                <div className="line line-projects" data-target="false" />
                {typeShow === 'Cards' && sortedProjectsTags.map((data, index) =>
                    <ProjectItem key={index} data={data} />
                )}

                {typeShow === 'Minimap' && <Minimap projects={sortedProjects} />}
            </div>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum doloribus laudantium tempore tenetur quasi facilis enim aut, eaque voluptatem. Eaque veniam voluptate exercitationem laudantium voluptatibus provident alias, cum dolorem.
            Eaque, veritatis! Vero odit minus, tempore nulla obcaecati voluptas nobis tenetur sequi quos voluptates perferendis aut, molestiae dignissimos architecto ipsum cumque distinctio eos optio excepturi. Alias veniam ratione quibusdam excepturi.
            Optio ducimus est nihil dolor inventore facilis numquam dolorem possimus, fugiat delectus voluptatibus in natus soluta vel accusantium reprehenderit debitis, necessitatibus obcaecati tempore eaque aliquam quidem dignissimos sapiente! A, praesentium!
            Accusamus, vitae ipsum officiis eligendi maxime nobis dolores error fugiat quidem ad cumque doloremque iste laudantium, eveniet expedita unde nostrum fuga cupiditate quae cum, mollitia nulla? Fugiat magni cum tempora.
            Voluptates eligendi nam, magnam doloribus provident nisi placeat sunt asperiores adipisci vero culpa nihil quam eius. Inventore, doloribus in fuga praesentium assumenda autem eveniet iste ut, et ducimus illo atque?
            Quasi consectetur voluptatem dolorum nihil molestias, perspiciatis dicta ullam eligendi! Quas officiis aut voluptate, veritatis, itaque iusto reiciendis assumenda corporis odio pariatur adipisci! Voluptas eveniet sunt magnam incidunt eaque officia!
            Error quia tempora quis aut nulla nostrum maxime laboriosam neque expedita veniam esse tenetur libero consequuntur quod consectetur excepturi quam laudantium similique ullam, repellat eveniet recusandae voluptates iure! Tempore, aut!
            Aut dolore, eaque necessitatibus odio error quo quasi recusandae facilis sed facere maxime quaerat asperiores consequuntur sapiente repellat quibusdam, qui ullam unde dicta modi. Delectus iste quis blanditiis! Culpa, iure!
            Aperiam saepe mollitia ducimus. Facere expedita commodi impedit error alias labore saepe ratione, totam mollitia quos temporibus rem. Magnam ex assumenda adipisci totam at quo, dignissimos eaque unde ratione est?
            Nihil aut veritatis quisquam deleniti voluptas recusandae asperiores, enim obcaecati delectus id ipsam earum facere nam rerum vel laboriosam dignissimos sunt sint perferendis explicabo! Perferendis velit quos minima similique inventore.

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
