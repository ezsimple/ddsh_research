import { useEffect, useState } from 'react';

// 화면 회전 감지 hook
// https://www.npmjs.com/package/use-orientation-change
export default function useScreenOrientation() {
  const [orientation, setOrientation] = useState(
    window.screen.orientation.type
  );

  useEffect(() => {
    const handleOrientationChange = () =>
      setOrientation(window.screen.orientation.type);
    window.addEventListener('orientationchange', handleOrientationChange);
    return () =>
      window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);

  return orientation;
}
