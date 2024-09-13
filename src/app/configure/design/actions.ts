'use server'

import { db } from '@/db'
import { TorsoColor, TorsoFinish, TorsoMaterial, TorsoSeries } from "@prisma/client"

export type SaveConfigArgs = {
  color: TorsoColor
  finish: TorsoFinish
  material: TorsoMaterial
  series: TorsoSeries
  configId: string
}

export async function saveConfig({
  color,
  finish,
  material,
  series,
  configId,
}: SaveConfigArgs) {
  await db.configuration.update({
    where: { id: configId },
    data: { color, finish, material, series },
  })
}
