import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";

import lerp from "../../utils/basics";

const Cursor = ({ isTransitioning }) => {
    const circle = useRef(null);
    const [cursorText, setCursorText] = useState('');
    const enterTimeline = useRef(null);
    const leaveTimeline = useRef(null);

    const mouse = useRef({
        x: 0,
        y: 0
    });

    const delayedMouse = useRef({
        x: 0,
        y: 0
    });

    const managedMouseMove = (e) => {
        const { clientX, clientY } = e;

        mouse.current = {
            x: clientX,
            y: clientY
        };
    };

    const moveCircle = useCallback((x, y) => {
        if (circle.current) {
            gsap.set(circle.current, { top: y - (7.5 / 2), left: x - (7.5 / 2) });
        }
    }, []);

    const animate = () => {
        const { x, y } = delayedMouse.current;

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.075),
            y: lerp(y, mouse.current.y, 0.075),
        };

        moveCircle(delayedMouse.current.x, delayedMouse.current.y);
        window.requestAnimationFrame(animate);
    };

    useEffect(() => {
        animate();
        window.addEventListener("mousemove", managedMouseMove);
        return () => window.removeEventListener("mousemove", managedMouseMove);
    }, []);

    const updateCursorText = useCallback((e) => {
        const text = e.target.getAttribute('data-text-cursor') || '';
        setCursorText(text);

        if (enterTimeline.current) {
            enterTimeline.current.kill();
        }
        if (leaveTimeline.current) {
            leaveTimeline.current.kill();
        }

        if (text) {
            enterTimeline.current = gsap.timeline();
            enterTimeline.current.fromTo('.cursor-text p', {
                transform: 'translateY(100%)'
            }, {
                transform: 'translateY(0%)',
                duration: 0.7,
                ease: "Expo.easeInOut"
            });
        }
    }, []);

    const removeCursorText = useCallback(() => {
        if (enterTimeline.current) {
            enterTimeline.current.kill();
        }

        leaveTimeline.current = gsap.timeline({
            defaults: {
                duration: 0.7,
                ease: "Expo.easeInOut"
            }
        });
        leaveTimeline.current.to('.cursor-text p', {
            transform: 'translateY(100%)'
        });
    }, []);

    useEffect(() => {
        if (isTransitioning) {
            setCursorText("loading");
            gsap.to('.cursor-text p', {
                transform: 'translateY(0%)',
                duration: 0.7,
                ease: "Expo.easeInOut"
            });
        } else {
            setCursorText("");
            removeCursorText();
        }
    }, [isTransitioning, removeCursorText]);

    useEffect(() => {
        const allDataCursorText = document.querySelectorAll('[data-text-cursor]');

        allDataCursorText.forEach(cursorText => {
            cursorText.addEventListener('mouseenter', updateCursorText);
            cursorText.addEventListener('mouseover', updateCursorText);
            cursorText.addEventListener('mouseleave', removeCursorText);
        });

        return () => {
            allDataCursorText.forEach(cursorText => {
                cursorText.removeEventListener('mouseenter', updateCursorText);
                cursorText.removeEventListener('mouseover', updateCursorText);
                cursorText.removeEventListener('mouseleave', removeCursorText);
            });
        };
    }, [updateCursorText, removeCursorText]);

    return (
        <div className="cursor" ref={circle}>
            <div className="cursor-icon"></div>
            <div className="cursor-text">
                <p>{cursorText}</p>
            </div>
        </div>
    );
};

export default Cursor;
