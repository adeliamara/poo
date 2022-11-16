import { FiguraGeometrica } from "./FiguraGeometrica";
export interface Comparavel {
    comparar(figuraGeometrica: FiguraGeometrica): number;
}