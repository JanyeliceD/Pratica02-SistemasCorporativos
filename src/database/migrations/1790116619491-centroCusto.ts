import { MigrationInterface, QueryRunner } from "typeorm";

export class centroCusto1790116619491 implements MigrationInterface {
    name = 'AdicionarAuditoria1789934862534'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT TABLE "solicitacoes" ("saldo" VARCHAR NOT NULL ,"versaoAtual" SERIAL NOT NULL, "codCtCusto" SERIAL NOT NULL )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP COLUMN TABLE ("saldo", "versaoAtual", "codCtCusto")`);
    }

}
