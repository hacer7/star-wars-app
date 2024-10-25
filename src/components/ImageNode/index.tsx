import Image from "next/image";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import s from "./style.module.scss";
import Tooltip from "@mui/material/Tooltip";

type ImageNodeData = {
  imageUrl: string;
  name: string;
  width: number;
  height: number;
};

const ImageNode = ({ data }: NodeProps<Node<ImageNodeData>>) => {
  return (
    <Tooltip title={data.name}>
      <div className={s.wrapper}>
        <Image
          src={data.imageUrl}
          alt={data.name}
          width={data.width}
          height={data.height}
        />
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    </Tooltip>
  );
};

export default ImageNode;
