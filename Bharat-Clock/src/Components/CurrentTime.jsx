import { useEffect } from "react";
import { useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalid);
    };
  }, []);

  return (
    <p className="fs-3">
      This is Current Time:{time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
}
export default CurrentTime;
