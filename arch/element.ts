import { NodeData } from "@antv/g6";

export interface ArchElement {
    id: string;
    name: string;
    dependencies: ArchElement[];
    group?: ArchElementGroup;

    dependsOn (element: ArchElement): ArchElement;
}

export interface ArchElementGroup {
    id: string;
    name: string;
    group?: ArchElementGroup;
}