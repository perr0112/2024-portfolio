const PreviewProject = ({ data, children }) => {
    return (
        <div className="content__project">
            <img
                src={process.env.PUBLIC_URL + `/assets/pictures/works/${data.banner}.png`}
            />
            {children}
        </div>
    )
}

export default PreviewProject;
