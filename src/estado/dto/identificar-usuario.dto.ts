import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class IdentificarUsuarioDto {

    @IsString()
    @IsNotEmpty()
    nome!: string;

    @IsOptional()
    @IsString()
    email?: string;
}