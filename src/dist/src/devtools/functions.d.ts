import { DevtoolsTreeNode } from '../types';
export declare const getParentId: (id: number, devtoolsTree: Map<number, DevtoolsTreeNode>) => number;
export declare const getChildId: (id: number, devtoolsTree: Map<number, DevtoolsTreeNode>) => number;
export declare const getDevtoolsTree: () => Map<number, DevtoolsTreeNode>;
