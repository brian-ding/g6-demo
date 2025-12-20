import { NodeData } from "@antv/g6";
import { ArchElement, ArchElementGroup } from ".";

export class Microservice implements ArchElement {
    id: string;
    name: string;
    dependencies: ArchElement[];
    group?: ArchElementGroup;
    properties?: Record<string, any>;

    constructor(id: string, name: string, group?: ArchElementGroup) {
        this.id = id;
        this.name = name;
        this.dependencies = [];
        this.group = group;
        this.properties = {
            'hello': `world, {id: ${id}}`,
        };
    }

    dependsOn (element: ArchElement): ArchElement {
        this.dependencies.push(element);

        return this;
    }
}