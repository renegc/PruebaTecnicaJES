/*
 * ER/Studio 8.0 SQL Code Generation
 * Company :      RegulusM
 * Project :      DATA MODEL
 * Author :       RegulusM
 *
 * Date Created : Friday, August 21, 2020 20:10:29
 * Target DBMS : Microsoft SQL Server 2008
 */

/* 
 * TABLE: Tb_Departamento 
 */

CREATE TABLE Tb_Departamento(
    Id_Departamento    int             IDENTITY(1,1),
    Dp_Nombre          nvarchar(50)    NOT NULL,
    CONSTRAINT PK3 PRIMARY KEY NONCLUSTERED (Id_Departamento)
)
go



IF OBJECT_ID('Tb_Departamento') IS NOT NULL
    PRINT '<<< CREATED TABLE Tb_Departamento >>>'
ELSE
    PRINT '<<< FAILED CREATING TABLE Tb_Departamento >>>'
go

/* 
 * TABLE: Tb_Fiscalias 
 */

CREATE TABLE Tb_Fiscalias(
    Fiscalia_ID           int             IDENTITY(1,1),
    Fiscalia_Direccion    nvarchar(50)    NOT NULL,
    Fiscalia_Telefono     nvarchar(15)    NOT NULL,
    Fiscalia_Nombre       nvarchar(50)    NOT NULL,
    Id_Departamento       int             NOT NULL,
    Id_Tipo               int             NULL,
    Id_Mpio               int             NULL,
    CONSTRAINT PK1 PRIMARY KEY NONCLUSTERED (Fiscalia_ID)
)
go



IF OBJECT_ID('Tb_Fiscalias') IS NOT NULL
    PRINT '<<< CREATED TABLE Tb_Fiscalias >>>'
ELSE
    PRINT '<<< FAILED CREATING TABLE Tb_Fiscalias >>>'
go

/* 
 * TABLE: Tb_Municipio 
 */

CREATE TABLE Tb_Municipio(
    Id_Mpio            int             IDENTITY(1,1),
    Mpio_Nombre        nvarchar(50)    NOT NULL,
    Id_Departamento    int             NULL,
    CONSTRAINT PK2 PRIMARY KEY NONCLUSTERED (Id_Mpio)
)
go



IF OBJECT_ID('Tb_Municipio') IS NOT NULL
    PRINT '<<< CREATED TABLE Tb_Municipio >>>'
ELSE
    PRINT '<<< FAILED CREATING TABLE Tb_Municipio >>>'
go

/* 
 * TABLE: Tb_Tipo 
 */

CREATE TABLE Tb_Tipo(
    Id_Tipo        int             IDENTITY(1,1),
    Tipo_Nombre    nvarchar(50)    NOT NULL,
    CONSTRAINT PK4 PRIMARY KEY NONCLUSTERED (Id_Tipo)
)
go



IF OBJECT_ID('Tb_Tipo') IS NOT NULL
    PRINT '<<< CREATED TABLE Tb_Tipo >>>'
ELSE
    PRINT '<<< FAILED CREATING TABLE Tb_Tipo >>>'
go

/* 
 * TABLE: Tb_Fiscalias 
 */

ALTER TABLE Tb_Fiscalias ADD CONSTRAINT RefTb_Departamento2 
    FOREIGN KEY (Id_Departamento)
    REFERENCES Tb_Departamento(Id_Departamento)
go

ALTER TABLE Tb_Fiscalias ADD CONSTRAINT RefTb_Tipo4 
    FOREIGN KEY (Id_Tipo)
    REFERENCES Tb_Tipo(Id_Tipo)
go

ALTER TABLE Tb_Fiscalias ADD CONSTRAINT RefTb_Municipio5 
    FOREIGN KEY (Id_Mpio)
    REFERENCES Tb_Municipio(Id_Mpio)
go


/* 
 * TABLE: Tb_Municipio 
 */

ALTER TABLE Tb_Municipio ADD CONSTRAINT RefTb_Departamento1 
    FOREIGN KEY (Id_Departamento)
    REFERENCES Tb_Departamento(Id_Departamento)
go


