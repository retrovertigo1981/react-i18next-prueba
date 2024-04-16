import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import { useTranslation } from "react-i18next"; // Importa el hook useTranslation de react-i18next

export default function DataTable() {
  const [t] = useTranslation("global"); // Inicializa el hook useTranslation con el namespace "global"

  // Devuelve el componente de tabla
  return (
    <Table aria-label='Example static collection table' className=' ml-4 mr-4'>
      <TableHeader>
        {/* Columnas de encabezado traducidas */}
        <TableColumn>{t("table.name")}</TableColumn>
        <TableColumn>{t("table.role")}</TableColumn>
        <TableColumn>{t("table.status")}</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key='1'>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key='2'>
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow key='3'>
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key='4'>
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
