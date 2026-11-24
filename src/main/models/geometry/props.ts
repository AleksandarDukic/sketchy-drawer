export type Props  = PointProps| LineProps| TriangleProps| RectProps| CircleProps

export type PointProps = [number, number];
export type LineProps = [PointProps, PointProps];
export type TriangleProps = [PointProps, PointProps, PointProps];
export type RectProps = [PointProps, PointProps, PointProps, PointProps];
export type CircleProps = [PointProps, number];
