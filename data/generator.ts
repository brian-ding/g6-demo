import { ComboData, EdgeData, GraphData, NodeData } from "@antv/g6";
import { apim } from "./main";
import { ArchElement } from "@/arch";

export class ArchDataGenerator {
    private nodes: NodeData[];
    private edges: EdgeData[];
    private combos: ComboData[];

    /**
     *
     */
    constructor() {
        this.nodes = [];
        this.edges = [];
        this.combos = [];
    }

    generate (): GraphData {
        // traverse through the very first root node
        this.traverse(apim);

        return {
            nodes: this.nodes,
            edges: this.edges,
            combos: this.combos,
        };
    }

    private traverse (element: ArchElement): void {
        this.nodes.push({
            id: element.id,
            type: 'image',
            combo: element.group?.id,
            style: {
                size: 80,
                src: '/icons/10035-icon-service-App-Services.svg',
                labelText: element.name,
            },
        });

        if (element.group && !this.combos.find(c => c.id === element.group!.id)) {
            this.combos.push({
                id: element.group.id,
                label: element.group.name,
                // data: {
                //     "groupName": element.group.name,
                // },
                style: {
                    fill: 'black',
                    stroke: 'green',
                    collapsed: false,
                    labelText: element.group.name,
                },
            });
        }

        for (const dep of element.dependencies) {
            this.edges.push({
                id: `edge-${element.id}-to-${dep.id}`,
                source: element.id,
                target: dep.id,
                style: {
                    endArrow: true,
                },
            });

            if (!this.nodes.find(n => n.id === dep.id)) {
                this.traverse(dep);
            }
        }
    }
}