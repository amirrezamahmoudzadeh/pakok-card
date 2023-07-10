import { Box } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

type Props = {
  startSeconds: number;
  endSeconds: number;
  onEndTime: () => void;
};

const TimeCounter: FC<Props> = ({ startSeconds, endSeconds, onEndTime }) => {
  const [currentTime, setCurrentTime] = useState<number>(startSeconds);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (currentTime > endSeconds) {
      timer = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      onEndTime();
    }

    return () => {
      clearInterval(timer);
    };
  }, [currentTime, endSeconds, onEndTime]);

  return <Box color={"blue.500"}>{currentTime > 0 ? currentTime : ""}</Box>;
};

export default TimeCounter;
