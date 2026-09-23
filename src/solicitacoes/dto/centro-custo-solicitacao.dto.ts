import { IsDecimal, IsNotEmpty,  MinLength } from 'class-validator';

export class CentroCustoDto {
  @IsDecimal()
  @IsNotEmpty()
  @MinLength(0)
  saldoctCusto: string;

  
}