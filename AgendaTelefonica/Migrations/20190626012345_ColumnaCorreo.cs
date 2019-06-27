using Microsoft.EntityFrameworkCore.Migrations;

namespace AgendaTelefonica.Migrations
{
    public partial class ColumnaCorreo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Correo",
                table: "Personas",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Correo",
                table: "Personas");
        }
    }
}
