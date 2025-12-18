'use client';

import { Graph } from '@antv/g6';
import { useEffect, useRef, useState } from 'react';

export default () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const graph = new Graph({
            container: containerRef.current!,
            layout: {
                type: 'dagre',
                rankdir: 'LR',
                align: 'UR',
                nodesep: 100,
                ranksep: 150,
            },
            // layout: { type: 'random' },
            width: 1500,
            height: 1000,
            data: {
                nodes: [
                    { id: 'gwy', type: 'image', style: { size: 80, src: '/icons/10042-icon-service-API-Management-Services.svg' }, },
                    { id: 'svc1', type: 'image', style: { size: 80, src: '/icons/10035-icon-service-App-Services.svg' }, },
                    { id: 'svc2', type: 'image', style: { size: 80, src: '/icons/10035-icon-service-App-Services.svg' }, },
                    { id: 'svc3', type: 'image', style: { size: 80, src: '/icons/10035-icon-service-App-Services.svg' }, },
                    { id: 'sb', type: 'image', style: { size: 80, src: '/icons/10836-icon-service-Azure-Service-Bus.svg' }, },
                    { id: 'db1', type: 'image', style: { size: 80, src: '/icons/10130-icon-service-SQL-Database.svg' }, },
                    { id: 'db2', type: 'image', style: { size: 80, src: '/icons/10130-icon-service-SQL-Database.svg' }, },
                    // {
                    //     id: 'active',
                    //     states: ['active'],
                    // },
                    // {
                    //     id: 'selected',
                    //     states: ['selected'],
                    // },
                    // {
                    //     id: 'highlight',
                    //     states: ['highlight'],
                    // },
                    // {
                    //     id: 'inactive',
                    //     states: ['inactive'],
                    // },
                    // {
                    //     id: 'disabled',
                    //     states: ['disabled'],
                    // },
                ],
                edges: [
                    { id: 'edge1', source: 'gwy', target: 'svc1', style: { lineWidth: 10, lineDash: [5, 5], endArrow: true } },
                    { id: 'edge2', source: 'svc1', target: 'svc2' },
                    { id: 'edge3', source: 'svc1', target: 'svc3' },
                    { id: 'edge4', source: 'svc2', target: 'sb' },
                    { id: 'edge5', source: 'svc2', target: 'db2' },
                    { id: 'edge6', source: 'svc3', target: 'db1' },
                ],
            },
        });

        graph.render();
    }, []);

    return <div ref={containerRef} />;
};