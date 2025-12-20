import { NodeData } from "@antv/g6";

export interface ArchElement {
    id: string;
    dependencies: ArchElement[];

    dependsOn (element: ArchElement): ArchElement;
    toNode (): NodeData;
}