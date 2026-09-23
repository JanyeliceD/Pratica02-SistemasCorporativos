import {
  Controller,
  Get,
  Param,
  Patch,
  ParseIntPipe,
  UseGuards,
  Post,
  Body, Query, Req
} from '@nestjs/common';

import { AprovarSolicitacaoDto } from './dto/aprovar-solicitacao.dto';
import { SolicitacoesService } from './solicitacoes.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CriarSolicitacaoDto } from './dto/criar-solicitacao.dto';
import { FiltrarSolicitacoesDto } from './dto/filtrar-solicitacoes.dto';
import { RejeitarSolicitacaoDto } from './dto/rejeitar-solicitacao.dto';
import { CentroCustoDto } from './dto/centro-custo-solicitacao.dto'; 


type RequisicaoAutenticada = {
  user: { id: number; papel: string };
};

@Controller('solicitacoes')
export class SolicitacoesController {

  constructor(
    private readonly solicitacoesService: SolicitacoesService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  listar(@Query() filtros: FiltrarSolicitacoesDto) {
  return this.solicitacoesService.listar(filtros);
}

  @UseGuards(JwtAuthGuard)
  @Post()
  criar(@Body() dto: CriarSolicitacaoDto) {
    return this.solicitacoesService.criar(dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('gestor', 'auditor')
  @Get('relatorio')
  solRelatorio() {
    return this.solicitacoesService.solRelatorio();
  }


@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('gestor')
@Patch(':id/aprovar')
aprovar(
  @Param('id', ParseIntPipe) id: number,
  @Body() dto: ( AprovarSolicitacaoDto , CentroCustoDto)
  @Req() request: RequisicaoAutenticada,
) {
  return this.solicitacoesService.aprovar(id, dto.versao,dto.centroCusto,  request.user.id);
}

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('gestor')
@Patch(':id/rejeitar')
rejeitar(
  @Param('id', ParseIntPipe) id: number,
  @Body() dto: RejeitarSolicitacaoDto,
  @Req() request: RequisicaoAutenticada,
) {
  return this.solicitacoesService.rejeitar(id, dto.versao, dto.justificativa, request.user.id);
}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('gestor', 'auditor')
  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.solicitacoesService.buscarPorId(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('gestor')
  @Get('/centros-custo/:codigo')
  ctCusto(
  @Param('id', ParseIntPipe) id: number,
  @Body() dto: CentroCustoDto,
  @Req() request: RequisicaoAutenticada,
) {
  return this.solicitacoesService.centroCusto(id, dto.versao,dto.saldoctCusto request.user.id);
}
}