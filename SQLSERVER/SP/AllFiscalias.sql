/****** Script para el comando SelectTopNRows de SSMS  ******/
SELECT 
	   f.[Fiscalia_ID]
      ,f.[Fiscalia_Direccion]
      ,f.[Fiscalia_Telefono]
      ,f.[Fiscalia_Nombre]
      ,f.[Id_Departamento]
      ,f.[Id_Tipo]
      ,f.[Id_Mpio]
	  ,d.[Dp_Nombre]
	  ,m.[Mpio_Nombre]
	  ,t.	[Tipo_Nombre]  
  FROM [Db_Fiscalias].[dbo].[Tb_Fiscalias] as f
  inner join[dbo].[Tb_Departamento] as d
  on d.[Id_Departamento] = f.[Id_Departamento]
  inner join [dbo].[Tb_Municipio] as m
  on m.[Id_Mpio] = f.[Id_Mpio]
  inner join [dbo].[Tb_Tipo] as t
  on t.[Id_Tipo] = f.[Id_Tipo]

  


