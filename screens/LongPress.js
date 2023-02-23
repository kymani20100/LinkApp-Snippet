// import React, { useRef, useEffect } from 'react';
// import { TouchableWithoutFeedback } from 'react-native';

// const LongPress = ({ onShortPress, onLongPress, children, style }) => {
//   const pressStartTimeRef = useRef(0);
//   const timeoutIdRef = useRef(null);

//   const handlePressIn = () => {
//     pressStartTimeRef.current = Date.now();
//     timeoutIdRef.current = setTimeout(() => {
//       if (onLongPress) {
//         onLongPress();
//       }
//     }, 200); // Long press duration threshold set to 500ms
//   };

//   const handlePressOut = () => {
//     const pressDuration = Date.now() - pressStartTimeRef.current;
//     if (pressDuration < 200) { // Short press
//       clearTimeout(timeoutIdRef.current);
//       if (onShortPress) {
//         onShortPress();
//       }
//     }
//   };

//   useEffect(() => {
//     return () => {
//       // Clean up timer when component unmounts
//       clearTimeout(timeoutIdRef.current);
//     };
//   }, []);

//   return (
//     <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} style={style}>
//       {children}
//     </TouchableWithoutFeedback>
//   );
// };

// export default LongPress;
// import React, { useRef, useEffect } from 'react';
// import { TouchableWithoutFeedback } from 'react-native';

// const LongPress = ({ onShortPress, onLongPress, children, style }) => {
//   const pressStartTimeRef = useRef(0);
//   const timeoutIdRef = useRef(null);
//   const LONG_PRESS_THRESHOLD = 200;

//   const handlePressIn = () => {
//     pressStartTimeRef.current = Date.now();
//     timeoutIdRef.current = setTimeout(() => {
//       if (onLongPress) {
//         onLongPress();
//       }
//     }, LONG_PRESS_THRESHOLD);
//   };

//   const handlePressOut = () => {
//     const pressDuration = Date.now() - pressStartTimeRef.current;
//     if (pressDuration < LONG_PRESS_THRESHOLD) { // Short press
//       clearTimeout(timeoutIdRef.current);
//       if (onShortPress) {
//         onShortPress();
//       }
//     }
//   };

//   useEffect(() => {
//     return () => {
//       clearTimeout(timeoutIdRef.current);
//     };
//   }, []);

//   return (
//     <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} style={style}>
//       {children}
//     </TouchableWithoutFeedback>
//   );
// };

// export default LongPress;

import React, { useRef, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

const LongPress = ({ onShortPress, onLongPress, children, style, longPressDuration = 500 }) => {
  const pressStartTimeRef = useRef(0);
  const timeoutIdRef = useRef(null);
  const LONG_PRESS_THRESHOLD = longPressDuration;

  const handlePressIn = () => {
    pressStartTimeRef.current = Date.now();
    timeoutIdRef.current = setTimeout(() => {
      if (onLongPress) {
        onLongPress();
      }
    }, LONG_PRESS_THRESHOLD);
  };

  const handlePressOut = () => {
    const pressDuration = Date.now() - pressStartTimeRef.current;
    if (pressDuration < LONG_PRESS_THRESHOLD) { // Short press
      clearTimeout(timeoutIdRef.current);
      if (onShortPress) {
        onShortPress();
      }
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutIdRef.current);
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} style={style}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default LongPress;


