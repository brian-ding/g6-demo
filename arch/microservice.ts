import { NodeData } from "@antv/g6";
import { ArchElement } from ".";

export class Microservice implements ArchElement {
    id: string;
    name: string;

    private dependencies: ArchElement[];

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.dependencies = [];
    }

    dependsOn (element: ArchElement): ArchElement {
        this.dependencies.push(element);

        return this;
    }


    toNode (): NodeData {
        return {
            id: this.id,
            type: 'image',
            style: {
                size: 80,
                src: '/icons/10035-icon-service-App-Services.svg',
            },
        };
    }
}