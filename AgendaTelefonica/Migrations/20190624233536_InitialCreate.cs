using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AgendaTelefonica.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Datos",
                columns: table => new
                {
                    IdDatos = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Area = table.Column<string>(nullable: true),
                    TelefonoLocal = table.Column<string>(nullable: true),
                    Celular = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Datos", x => x.IdDatos);
                });

            migrationBuilder.CreateTable(
                name: "Personas",
                columns: table => new
                {
                    IdNombre = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nombre = table.Column<string>(nullable: true),
                    PersonaIdNombre = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Personas", x => x.IdNombre);
                    table.ForeignKey(
                        name: "FK_Personas_Personas_PersonaIdNombre",
                        column: x => x.PersonaIdNombre,
                        principalTable: "Personas",
                        principalColumn: "IdNombre",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Personas_PersonaIdNombre",
                table: "Personas",
                column: "PersonaIdNombre");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Datos");

            migrationBuilder.DropTable(
                name: "Personas");
        }
    }
}
