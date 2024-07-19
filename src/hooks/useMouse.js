// import { useCallback, useEffect, useState } from "react";
// import gsap from "gsap";

// export default function useMouse() {
//     const [mouseText, setMouseText] = useState('');

//     const updateTextCursor = useCallback((e) => {
//         if (e.target.hasAttribute('data-text-cursor')) {
//             const value = e.target.getAttribute('data-text-cursor');
//             console.log('mounted =======', value);
//             setMouseText(value);
//         } else {
//             setMouseText('');
//         }
//     }, []);

//     useEffect(() => {
//         window.addEventListener('mouseenter', updateTextCursor);
//         window.addEventListener('mouseleave', updateTextCursor);

//         return () => {
//             window.removeEventListener('mouseenter', updateTextCursor);
//             window.removeEventListener('mouseleave', updateTextCursor);
//         }
//     })

//     return {
//         mouseText,
//         setMouseText
//     };
// }