'use client';

import { ArchDataGenerator } from '@/data/generator';
import { Graph } from '@antv/g6';
import { useEffect, useRef } from 'react';

export default () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const data = new ArchDataGenerator().generate();

        const graph = new Graph({
            container: containerRef.current!,
            autoFit: {
                type: 'view',
            },
            layout: {
                type: 'dagre',
                rankdir: 'LR',
                align: 'UR',
                nodesep: 100,
                ranksep: 150,
            },
            // layout: { type: 'random' },
            data: data,
        });

        graph.render();
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            background: 'grey',
        }}>
            <div style={{
                flexGrow: 0,
                background: '#BB6611',
            }}>top menu</div>
            <div style={{
                display: 'flex',
                flexGrow: 1,
            }}>
                <div ref={containerRef} style={{
                    flexGrow: 1,
                    background: '#567843',
                }}></div>
                <div style={{
                    flexGrow: 0,
                    background: '#123456',
                    color: '#FFFFFF',
                }}>side bar</div>
            </div>
        </div>
    );
};