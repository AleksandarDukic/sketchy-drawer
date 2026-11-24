import type { Position } from "../position.interface";

export type Attributes  = BaseAttributes |LineAttributes |TriangleAttributes | RectAttributes | CircleAttributes; // | PointAttributes;

export type BaseAttributes = {}
//export type PointAttributes = 
export type LineAttributes = number;
export type TriangleAttributes = [Position, Position, Position];
export type RectAttributes = [Position, Position, Position, Position];
export type CircleAttributes = [Position, number];
