using Microsoft.EntityFrameworkCore.Migrations;

namespace AgendaTelefonica.Migrations
{
    public partial class QuitarUncampoPersonas : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Personas_Personas_PersonaIdNombre",
                table: "Personas");

            migrationBuilder.DropIndex(
                name: "IX_Personas_PersonaIdNombre",
                table: "Personas");

            migrationBuilder.DropColumn(
                name: "PersonaIdNombre",
                table: "Personas");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PersonaIdNombre",
                table: "Personas",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Personas_PersonaIdNombre",
                table: "Personas",
                column: "PersonaIdNombre");

            migrationBuilder.AddForeignKey(
                name: "FK_Personas_Personas_PersonaIdNombre",
                table: "Personas",
                column: "PersonaIdNombre",
                principalTable: "Personas",
                principalColumn: "IdNombre",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
