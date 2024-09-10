import './ButtonLink.scss';

const Button = ({
    children,
    styles,
    href,
    classNames
}) => {
    return (
        <a className={`btn primary ${classNames}`} target="_blank" style={styles} href={href || '#'}>
            <p className="link-animated">
                <span data-text={children}>
                    {children}
                </span>
            </p>
            <div className="svgs">
                <div className="svg svg__1">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L31 31" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1 31H31V1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="svg svg__2">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L31 31" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1 31H31V1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </a>
    )
}

export default Button;
