import { Vector3, Box3, PerspectiveCamera } from 'three';
import Viewport from '../Viewport';
import { OffsetPoint } from '../Interface';
declare class FullFreeControls {
    viewport: Viewport;
    camera: PerspectiveCamera;
    domElement: HTMLElement;
    rotateTiltRange: {
        max: number;
        min: number;
    };
    enabled: boolean;
    enableZoom: boolean;
    enableZoomToMouse: boolean;
    zoomSpeed: number;
    zoomMinDistance: number;
    zoomMaxDistance: number;
    zoomMinDistanceToMesh: number;
    zoomMinStepDistance: number;
    zoomMaxStepDistance: number;
    zoomMinY: number;
    enableRotate: boolean;
    enableRotateX: boolean;
    enableRotateY: boolean;
    rotateSpeed: number;
    enableOutOfScene: boolean;
    unOffsetOfScene: number;
    enablePan: boolean;
    enablePanX: boolean;
    enablePanY: boolean;
    enablePanAxisX: boolean;
    enablePanAxisY: boolean;
    enablePanAxisZ: boolean;
    enabledPickupPosition: boolean;
    centerPositionType: 'scene' | 'dom';
    bbox: Box3;
    centerPosition: Vector3;
    interactivePosition: Vector3;
    enableDamping: boolean;
    dampingFactor: number;
    onProgress?: Function;
    state: number;
    constructor(viewport: Viewport, camera: PerspectiveCamera);
    init(): void;
    getInteractivePosition(event: MouseEvent | TouchEvent | OffsetPoint): Vector3;
    intersectsBox(panOffset: Vector3): boolean;
    caculateContainPoint(point: Vector3, camera: PerspectiveCamera): boolean;
    panLeft(distance: number): void;
    panUp(distance: number): void;
    pan(delta: Vector3): void;
    zoom_on_point(delta: Vector3, event: WheelEvent): void;
    zoom_touch(delta: Vector3): void;
    rotate(delta: Vector3): void;
    _getSceneBboxCenter(): Vector3;
}
export default FullFreeControls;
