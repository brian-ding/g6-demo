export interface ArchElement {
    id: string;

    dependsOn (element: ArchElement): ArchElement;
}