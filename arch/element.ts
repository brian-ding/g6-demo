import { NodeData } from "@antv/g6";

export interface ArchElement {
    id: string;

    dependsOn (element: ArchElement): ArchElement;
    toNode (): NodeData;
}