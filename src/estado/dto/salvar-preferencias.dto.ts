import { IsIn } from "class-validator";

export class SalvarPreferenciasDto {
    
    @IsIn(['claro', 'escuro', 'sistema'])
    tema!: 'claro' | 'escuro' | 'sistema';
}