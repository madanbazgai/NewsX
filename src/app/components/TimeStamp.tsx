"use client";
import TimeAgo from "react-timeago";

type Props = {
  time: string;
};

function Timestamp({ time }: Props) {
  return <TimeAgo date={time} />;
}

export default Timestamp;
