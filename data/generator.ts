import { ComboData, EdgeData, GraphData, NodeData } from "@antv/g6";
import { apim } from "./main";
import { ArchElement } from "@/arch";

export class ArchDataGenerator {
    generate (): GraphData {
        const nodes: NodeData[] = [];
        const edges: EdgeData[] = [];
        // const combos: ComboData[] = [];

        // traverse through the very first root node
        this.traverse(apim, nodes, edges);

        return {
            nodes,
            edges,
            // combos,
        };
    }

    private traverse (element: ArchElement, nodes: NodeData[], edges: EdgeData[]): void {
        nodes.push(element.toNode());

        for (const dep of element.dependencies) {
            edges.push({
                id: `edge-${element.id}-to-${dep.id}`,
                source: element.id,
                target: dep.id,
                style: {
                    endArrow: true,
                },
            });

            if (!nodes.find(n => n.id === dep.id)) {
                this.traverse(dep, nodes, edges);
            }
        }
    }
}