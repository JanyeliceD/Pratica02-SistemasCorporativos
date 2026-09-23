import { IsInt, Min,IsString, IsNotEmpty, MinLength, MaxLength, } from 'class-validator';

export class RejeitarSolicitacaoDto {
  @IsInt()
  @Min(1)
  versao: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(200)
  justificativa: string;
}