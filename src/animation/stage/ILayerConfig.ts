import { Layer } from './Layer';

/**
 * Configuration for adding an Layer to the Stage
 */

export interface ILayerConfig {
    depth: number;
    id: string;
    layer: Layer;
}
