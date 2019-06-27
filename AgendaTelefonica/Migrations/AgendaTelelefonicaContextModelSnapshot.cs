﻿// <auto-generated />
using AgendaTelefonica.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AgendaTelefonica.Migrations
{
    [DbContext(typeof(AgendaTelelefonicaContext))]
    partial class AgendaTelelefonicaContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AgendaTelefonica.Model.Dato", b =>
                {
                    b.Property<int>("IdDatos")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Area");

                    b.Property<string>("Celular");

                    b.Property<string>("TelefonoLocal");

                    b.HasKey("IdDatos");

                    b.ToTable("Datos");
                });

            modelBuilder.Entity("AgendaTelefonica.Model.Persona", b =>
                {
                    b.Property<int>("IdNombre")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Correo");

                    b.Property<string>("Nombre");

                    b.HasKey("IdNombre");

                    b.ToTable("Personas");
                });
#pragma warning restore 612, 618
        }
    }
}
